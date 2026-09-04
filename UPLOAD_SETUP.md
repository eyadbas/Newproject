# Setup & Usage Guide - Certification Upload System

## 🚀 Quick Start

### 1. Start the Backend Server
```bash
npm run server
```
Server will run on `http://localhost:3001`

For development with auto-reload:
```bash
npm run server:dev
```

### 2. Start the Frontend (in another terminal)
```bash
npm run dev
```

### 3. Upload Certifications
- Navigate to `http://localhost:5173/upload.html` (or your Vite dev server URL)
- Drag & drop or click to select PDF, JPG, or PNG files (max 10MB each)
- Click "Upload files" button to save them permanently
- View saved certifications immediately in the "Saved" section

---

## 📁 File Structure

```
public/
  ├── upload.html           # Upload UI
  ├── certifications/       # ⭐ Where uploaded files are stored
  │   └── (uploaded files here)
  └── cv-ar.html
server.js                    # Express backend for handling uploads
```

---

## 🔧 API Endpoints

### Upload Files
**POST** `/api/upload`
- Accept: `multipart/form-data`
- Field name: `certifications` (array)
- Returns: Array of uploaded files with URLs

### List All Certifications
**GET** `/api/certifications`
- Returns: Array of all saved certification files with metadata

### Delete Certification
**DELETE** `/api/certifications/:filename`
- Deletes the specified file
- Returns: Success message

### Health Check
**GET** `/api/health`
- Returns: Server status

---

## ✨ Features

✅ **Persistent Storage** - Files saved to `public/certifications/`  
✅ **Drag & Drop** - Easy file selection  
✅ **File Validation** - Only PDF, JPG, PNG up to 10MB  
✅ **Real-time Preview** - View files before/after upload  
✅ **Delete Support** - Remove certifications as needed  
✅ **Automatic Loading** - Previously uploaded files load on page refresh  
✅ **Mobile Friendly** - Responsive design  

---

## 🔒 Security

- Filenames are sanitized to prevent injection attacks
- File types and sizes are validated on both client and server
- Directory traversal protection on file deletion
- CORS enabled for local development

---

## 📝 Deployment Notes

When deploying to production:
1. Set `API_URL` in `upload.html` to your production backend
2. Ensure `public/certifications/` directory has write permissions
3. Consider implementing authentication for upload endpoints
4. Use environment variables for configuration (PORT, file upload paths, etc.)

