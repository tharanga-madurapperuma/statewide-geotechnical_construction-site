# Deployment Guide

## 🚀 Deployment Options

### **Option 1: Separate Hosting (Recommended)**

#### Frontend Deployment (Vercel)
1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel:**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy
   vercel --prod
   ```

3. **Set environment variables in Vercel:**
   - Go to Vercel Dashboard → Project → Settings → Environment Variables
   - Add: `VITE_API_URL` = `https://your-backend-url.com`

#### Backend Deployment (Railway)
1. **Push backend to GitHub:**
   ```bash
   cd backend
   git init
   git add .
   git commit -m "Initial backend commit"
   # Push to GitHub repository
   ```

2. **Deploy on Railway:**
   - Go to [Railway.app](https://railway.app)
   - Connect your GitHub repo
   - Select the backend folder
   - Add environment variables:
     - `EMAIL_USER`
     - `EMAIL_PASS`
     - `RECIPIENT_EMAIL`
     - `FRONTEND_URL` (your Vercel URL)
     - `NODE_ENV=production`

#### Alternative Backend Hosts:
- **Render**: Free tier, automatic deployments
- **Heroku**: Classic choice, easy setup
- **DigitalOcean App Platform**: Good performance
- **AWS/Google Cloud**: More control, higher complexity

### **Option 2: Same Server Hosting**

#### Full-Stack on Railway/Render
1. **Create a unified package.json in root:**
   ```json
   {
     "scripts": {
       "build": "npm run build:frontend && npm run build:backend",
       "build:frontend": "npm run build",
       "build:backend": "cd backend && npm install",
       "start": "cd backend && npm start"
     }
   }
   ```

2. **Serve frontend from backend:**
   ```javascript
   // Add to backend/server.js
   const path = require('path');
   
   // Serve static files from React app
   app.use(express.static(path.join(__dirname, '../dist')));
   
   // Catch all handler for React Router
   app.get('*', (req, res) => {
     res.sendFile(path.join(__dirname, '../dist/index.html'));
   });
   ```

### **Option 3: Serverless (Advanced)**

#### Convert backend to Vercel Functions
1. **Create `api/send-email.js` in root:**
   ```javascript
   // Serverless function version of your backend
   export default async function handler(req, res) {
     // Your email logic here
   }
   ```

2. **Deploy everything to Vercel**

## 🔧 Configuration Summary

### For Separate Hosting:
- **Frontend**: Update `VITE_API_URL` to your backend URL
- **Backend**: Set `FRONTEND_URL` to your frontend URL
- **CORS**: Properly configured for cross-origin requests

### For Same Server:
- **No CORS issues**
- **Single deployment**
- **Backend serves frontend files**

## 📝 Environment Variables

### Frontend (.env.production):
```
VITE_API_URL=https://your-backend.railway.app
```

### Backend (.env):
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
RECIPIENT_EMAIL=admin@company.com
FRONTEND_URL=https://your-frontend.vercel.app
NODE_ENV=production
PORT=5000
```

## 🎯 My Recommendation

**Start with separate hosting:**
- **Frontend**: Vercel (free, fast, great for React)
- **Backend**: Railway (free tier, easy Node.js deployment)

This gives you:
- ✅ Better performance
- ✅ Independent scaling
- ✅ Specialized optimizations
- ✅ Easy to maintain
- ✅ Industry standard approach