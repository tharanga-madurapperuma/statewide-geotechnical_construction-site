const express = require("express")
const cors = require("cors")
const multer = require("multer")
const nodemailer = require("nodemailer")
const path = require("path")
const fs = require("fs")
const logger = require('./logger')
require("dotenv").config()
const process = require("process")

const app = express()
const PORT = process.env.PORT || 5000


app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? process.env.FRONTEND_URL
        : ["http://localhost:5173", "http://localhost:3000"], 
    credentials: true,
  })
)
app.use(express.json())
app.use(express.urlencoded({extended: true}))


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = "uploads/"
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, {recursive: true})
    }
    cb(null, uploadDir)
  },
  filename: function (req, file, cb) {
    
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9)
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    )
  },
})

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, 
  },
  fileFilter: function (req, file, cb) {
    
    const allowedTypes = /jpeg|jpg|png|pdf|txt|doc|docx/
    const extname = allowedTypes.test(
      path.extname(file.originalname).toLowerCase()
    )
    const mimetype = allowedTypes.test(file.mimetype)

    if (mimetype && extname) {
      return cb(null, true)
    } else {
      cb(new Error("Unsupported file type"))
    }
  },
})

let transporter
let emailConfigured = false

if (
  process.env.EMAIL_USER &&
  process.env.EMAIL_PASS 
) {
  transporter = nodemailer.createTransport({
    service: "gmail", 
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS, 
    },
  })

  transporter.verify((error, success) => {
    if (error) {
      logger.error("ERROR: Email configuration error:", error)
      logger.warn("WARNING: Please check your EMAIL_USER and EMAIL_PASS in .env file")
    } else {
      logger.info("INFO: Email server is ready to send messages")
      emailConfigured = true
    }
  })
} else {
  logger.warn("WARNING: Email credentials not configured.")
  logger.info(
    "INFO: Please update your .env file with valid EMAIL_USER and EMAIL_PASS"
  )
  logger.info(
    "INFO: The server will run but emails won't be sent until configured."
  )
}


app.post("/api/send-email", upload.any(), async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      phone,
      project_details,
      questions,
      services,
    } = req.body

    const files = req.files || []

    
    const emailHTML = `
      <h2>New Appointment Request</h2>
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h3>Contact Information:</h3>
        <p><strong>Name:</strong> ${first_name} ${last_name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        
        <h3>Services Required:</h3>
        <p>${services || "None selected"}</p>
        
        <h3>Project Details:</h3>
        <p>${project_details}</p>
        
        ${questions ? `<h3>Additional Questions:</h3><p>${questions}</p>` : ""}
        
        ${
          files.length > 0
            ? `
          <h3>Attached Files:</h3>
          <ul>
            ${files
              .map(
                (file) =>
                  `<li>${file.originalname} (${(
                    file.size /
                    1024 /
                    1024
                  ).toFixed(2)}MB)</li>`
              )
              .join("")}
          </ul>
        `
            : "<p>No files attached</p>"
        }
        
        <hr>
        <p style="color: #666; font-size: 12px;">
          This email was sent from the Statewide Geotechnical website contact form.
        </p>
      </div>
    `

    
    if (!emailConfigured) {
      
      files.forEach((file) => {
        if (fs.existsSync(file.path)) {
          fs.unlinkSync(file.path)
        }
      })

      return res.status(500).json({
        success: false,
        message:
          "Email service not configured. Please set EMAIL_USER and EMAIL_PASS in environment variables.",
        error: "Missing email configuration",
      })
    }

    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL, 
      replyTo: email, 
      subject: `New Appointment Request from ${first_name} ${last_name}`,
      html: emailHTML,
      attachments: files.map((file) => ({
        filename: file.originalname,
        path: file.path,
      })),
    }

    
    const info = await transporter.sendMail(mailOptions)
    logger.info(`INFO: Email sent successfully: ${info.messageId}`)

   
    files.forEach((file) => {
      if (fs.existsSync(file.path)) {
        fs.unlinkSync(file.path)
      }
    })

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
      messageId: info.messageId,
    })
  } catch (error) {
    logger.error("ERROR: Error sending email:", error)

    
    if (req.files) {
      req.files.forEach((file) => {
        if (fs.existsSync(file.path)) {
          fs.unlinkSync(file.path)
        }
      })
    }

    res.status(500).json({
      success: false,
      message: "Failed to send email",
      error: error.message,
    })
  }
})


app.get("/api/health", (req, res) => {
  res.status(200).json({status: "OK", message: "Server is running"})
})


app.listen(PORT, () => {
  logger.info(`INFO: Server is running on port ${PORT}`)
})
