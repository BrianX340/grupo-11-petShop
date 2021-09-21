const fs = require('fs');

const logs = (req, res, next) => {
    console.log('src/logs/serverLogs.txt', `direccion: ${req.headers['x-forwarded-for']} ## ruta: ${req.url} ## fecha: ${new Date()} \n`)
    fs.appendFileSync('src/logs/serverLogs.txt', `direccion: ${req.headers['x-forwarded-for']} ## ruta: ${req.url} ## fecha: ${new Date()} \n`);
    next();
}

module.exports = logs