---

CDN Server

A Simple CDN (Content Delivery Network) Server built with Express.js to serve static assets efficiently. This project is designed to deliver static files (such as images, CSS, JavaScript, fonts, etc.) quickly and securely with built-in rate limiting and CORS support.

Features

✅ Fast and Lightweight – Uses Express.js for efficient file serving.
✅ Rate Limiting – Prevents abuse by limiting requests per IP.
✅ CORS Support – Allows cross-origin resource sharing.
✅ Environment Variables Support – Configurable settings via .env file.
✅ Logging & Debugging – Uses chalk for colored logs.
✅ Security Enhancements – Prevents unauthorized access with middleware.
✅ Scalability – Can be deployed on various cloud platforms (VPS, Docker, etc.).


---

Installation

1. Clone the Repository

git clone https://github.com/NyxObscura/cdn-server.git
cd cdn-server

2. Install Dependencies

npm install

3. Configure Environment Variables

Create a .env file in the root directory and configure the following settings:

PORT=3000
RATE_LIMIT_WINDOW_MS=60000
RATE_LIMIT_MAX=100
CORS_ORIGIN=*

PORT → Server listening port (default: 3000)

RATE_LIMIT_WINDOW_MS → Time window for rate limiting in milliseconds

RATE_LIMIT_MAX → Max requests per IP per time window

CORS_ORIGIN → Allowed CORS domains (* = allow all)


4. Start the Server

For Production

npm start

For Development (with Nodemon Auto-Reload)

npm run dev

The server will start at http://localhost:3000.


---

Usage

Once the server is running, you can serve static files by placing them in the public/ directory.

1. Upload Your Static Files

Create a public/ directory in the root project and place files inside:

/public
  ├── images/
  │   ├── logo.png
  │   ├── banner.jpg
  ├── styles/
  │   ├── main.css
  ├── scripts/
  │   ├── app.js

2. Access the Files via URL

You can access files using the following URL pattern:

http://localhost:3000/{file-path}

For example:

Image: http://localhost:3000/images/logo.png

CSS: http://localhost:3000/styles/main.css

JavaScript: http://localhost:3000/scripts/app.js



---

API Endpoints

Example:

curl -X GET http://localhost:3000/images/logo.png


---

Configuration & Customization

1. Change Port Number

Modify the .env file:

PORT=5000

Restart the server:

npm run dev

2. Enable CORS for Specific Domains

Edit the .env file:

CORS_ORIGIN=https://yourdomain.com

3. Modify Rate Limiting

Change the values in .env:

RATE_LIMIT_WINDOW_MS=30000
RATE_LIMIT_MAX=50

This limits users to 50 requests per 30 seconds.


---

Deployment

Deploying on a VPS (Linux Server)

1. Upload the Project to Your VPS



scp -r cdn-server user@your-vps-ip:/home/user/

2. Install Node.js & Dependencies



cd /home/user/cdn-server
npm install

3. Run the Server in the Background



nohup npm start > output.log 2>&1 &

4. Use PM2 for Process Management



npm install -g pm2
pm2 start index.js --name cdn-server
pm2 save
pm2 startup


---

Contributing

Contributions are welcome! If you’d like to improve this project, follow these steps:

1. Fork the Repository


2. Create a New Branch


3. Make Your Changes


4. Submit a Pull Request (PR)



Check out the issues page for bug reports or feature requests.


---

License

This project is licensed under the MIT License. See LICENSE for details.


---

Contact & Support

For any questions or support, feel free to open an issue or reach out:

📧 Email: service@obscura.icu
🐦 Twitter: @Obscura_icu
📜 GitHub: NyxObscura


---
