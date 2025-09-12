const router = require("express").Router();
const db = require("../db").db;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const JWT_TOKEN = process.env.JWT_TOKEN;
const JWT_EXPIRATION = process.env.JWT_EXPIRATION;

// LOGIN 
router.post("/login", (req, res) => {
    const { username, password } = req.body;
    console.log(`[LOGIN REQUEST] Username: ${username}, IP: ${req.ip}`);

    // Get user from DB
    db.query(
        `SELECT username, usertype, password FROM user WHERE username = ?`,
        [username],
        async (err, results) => {
            if (err) {
                console.error(`[ERROR] Login DB query failed: ${err.message}`);
                return res.status(500).json({ error: "Internal Server Error" });
            }

            if (results.length < 1) {
                return res.status(403).json({ error: "Invalid credentials" });
            }

            const user = results[0];

            // Compare entered password with hashed password in DB
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(403).json({ error: "Invalid credentials" });
            }

            // Generate JWT
            const token = jwt.sign(
                { user: user.username, type: user.usertype },
                JWT_TOKEN,
                { expiresIn: JWT_EXPIRATION }
            );

            res.status(200).json({
                username: user.username,
                usertype: user.usertype,
                token: token,
            });
        }
    );
});

// REFRESH TOKEN
router.post("/refresh-token", (req, res) => {
    const { token } = req.body;
    if (!token) return res.status(401).json({ error: "No token provided" });

    jwt.verify(token, JWT_TOKEN, (err, decoded) => {
        if (err) return res.status(401).json({ error: "Invalid or expired token" });

        const newToken = jwt.sign({ user: decoded.user, type: decoded.type }, JWT_TOKEN, {
            expiresIn: JWT_EXPIRATION,
        });

        res.status(200).json({ token: newToken });
    });
});

// VALIDATE TOKEN
router.get("/validate-token", (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "No token provided" });

    jwt.verify(token, JWT_TOKEN, (err, decoded) => {
        if (err) return res.status(401).json({ error: "Invalid token" });
        res.json({ message: "Valid token", user: decoded });
    });
});

module.exports = router;
