import express from 'express'
import multer from 'multer'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT || 3001

// Ensure certifications directory exists
const certsDir = path.join(__dirname, 'public', 'certifications')
if (!fs.existsSync(certsDir)) {
  fs.mkdirSync(certsDir, { recursive: true })
}

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, certsDir)
  },
  filename: (req, file, cb) => {
    // Sanitize filename and preserve extension
    const timestamp = Date.now()
    const sanitized = file.originalname.replace(/[^a-zA-Z0-9._-]/g, '_')
    cb(null, `${timestamp}_${sanitized}`)
  }
})

// File filter
const fileFilter = (req, file, cb) => {
  const allowed = ['application/pdf', 'image/jpeg', 'image/png']
  const maxSize = 10 * 1024 * 1024 // 10 MB

  if (!allowed.includes(file.mimetype)) {
    return cb(new Error('Only PDF, JPG, and PNG files are allowed'))
  }

  if (file.size > maxSize) {
    return cb(new Error('File size exceeds 10 MB limit'))
  }

  cb(null, true)
}

// Multer middleware
const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 }
})

// Middleware
app.use(express.static('public'))
app.use(express.json())

// CORS middleware for development
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200)
  }
  next()
})

// Upload endpoint
app.post('/api/upload', upload.array('certifications', 10), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ error: 'No files uploaded' })
  }

  const uploadedFiles = req.files.map(file => ({
    filename: file.filename,
    originalName: file.originalname,
    size: file.size,
    url: `/certifications/${file.filename}`
  }))

  res.json({
    success: true,
    message: `Successfully uploaded ${req.files.length} file(s)`,
    files: uploadedFiles
  })
})

// Get all certifications
app.get('/api/certifications', (req, res) => {
  fs.readdir(certsDir, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read certifications directory' })
    }

    const certFiles = files.map(file => {
      const filePath = path.join(certsDir, file)
      const stats = fs.statSync(filePath)
      return {
        filename: file,
        size: stats.size,
        created: stats.birthtime,
        url: `/certifications/${file}`
      }
    })

    res.json({
      count: certFiles.length,
      files: certFiles
    })
  })
})

// Delete certification
app.delete('/api/certifications/:filename', (req, res) => {
  const filename = req.params.filename
  const filepath = path.join(certsDir, filename)

  // Security: prevent directory traversal
  if (!filepath.startsWith(certsDir)) {
    return res.status(403).json({ error: 'Access denied' })
  }

  fs.unlink(filepath, err => {
    if (err) {
      if (err.code === 'ENOENT') {
        return res.status(404).json({ error: 'File not found' })
      }
      return res.status(500).json({ error: 'Failed to delete file' })
    }
    res.json({ success: true, message: 'File deleted successfully' })
  })
})

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.listen(PORT, () => {
  console.log(`✅ Certification server running on http://localhost:${PORT}`)
  console.log(`📁 Certifications saved to: ${certsDir}`)
})
