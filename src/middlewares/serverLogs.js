const fs = require('fs');

const logs = (req, res, next) => {
    fs.appendFileSync('src/logs/serverLogs.txt', `method: ${req.method} ## direccion: ${req.headers['x-forwarded-for']} ## ruta: ${req.url} ## fecha: ${new Date()} \n`);
    next();
}

module.exports = logs