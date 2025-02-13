const express = require("express");
const path = require("path");
const chalk = require("chalk");
const rateLimit = require("express-rate-limit");
const app = express();
const PORT = process.env.PORT || 3000;
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, 
    max: 100, 
    handler: (req, res) => {
        res.status(429).json({
            status: "error",
            message: "Terlalu banyak permintaan dari IP ini, coba lagi nanti.",
            retry_after: `${Math.ceil(req.rateLimit.resetTime - Date.now())} ms`
        });
    }
});
app.use(limiter);
app.use((req, res, next) => {
    console.log(chalk.blue(`[${new Date().toISOString()}] ${req.method} ${req.url}`));
    next();
});
app.use(express.static(path.join(__dirname, "public")));
app.get("/:filename", (req, res) => {
    const filePath = path.join(__dirname, "public", req.params.filename);
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(404).json({
                status: "error",
                message: "File Not Found"
            });
        }
    });
});
app.listen(PORT, () => {
    console.log(chalk.white.bold(`CDN Server berjalan di port ${PORT}`));
});