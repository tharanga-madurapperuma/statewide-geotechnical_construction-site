# Backend Email Service Setup

## Quick Start

1. **Configure Environment Variables**
   ```bash
   cd backend
   cp .env.example .env
   ```
   Edit the `.env` file with your email credentials:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   RECIPIENT_EMAIL=admin@statewidegeotechnical.com
   PORT=5000
   ```

2. **Run the Application**
   ```bash
   # From the root directory, run both frontend and backend
   npm run full-dev
   
   # Or run separately:
   # Backend only
   npm run backend
   
   # Frontend only (in another terminal)
   npm run dev
   ```

## Gmail App Password Setup

1. Go to [Google Account settings](https://myaccount.google.com/)
2. Navigate to **Security** → **2-Step Verification** (must be enabled)
3. Go to **App passwords**
4. Select **Mail** and generate a password
5. Use this generated password in your `.env` file as `EMAIL_PASS`

## API Endpoints

- **POST** `/api/send-email` - Send appointment request email with attachments
- **GET** `/api/health` - Health check endpoint

## File Upload

- Maximum file size: 5MB per file
- Supported formats: JPG, PNG, PDF, TXT, DOC, DOCX
- Files are temporarily stored and cleaned up after email is sent

## Production Deployment

For production, make sure to:
1. Set proper environment variables
2. Use a process manager like PM2
3. Set up proper CORS origins
4. Use HTTPS
5. Configure proper email service (not Gmail for production)

## Alternative Email Services

Instead of Gmail, you can configure other email services:

### SendGrid
```javascript
const transporter = nodemailer.createTransporter({
  service: 'SendGrid',
  auth: {
    user: 'apikey',
    pass: process.env.SENDGRID_API_KEY,
  },
});
```

### Outlook/Hotmail
```javascript
const transporter = nodemailer.createTransporter({
  service: 'hotmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

### Custom SMTP
```javascript
const transporter = nodemailer.createTransporter({
  host: 'your-smtp-server.com',
  port: 587,
  secure: false, 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```