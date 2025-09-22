// API Configuration
const config = {
  // Use environment variable or fallback to local development
  API_BASE_URL: import.meta.env.VITE_API_URL || "http://localhost:5000",
}

export default config
