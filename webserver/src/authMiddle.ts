// authMiddleware.js

import jwt from 'jsonwebtoken';

export function authenticateToken(req, res, next) {
    const token = req.headers['authorization'];

    if (!token) return res.status(401).json({ error: 'Token não fornecido' });

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).json({ error: 'Token inválido' });
        req.user = user;
        next();
    });
}
