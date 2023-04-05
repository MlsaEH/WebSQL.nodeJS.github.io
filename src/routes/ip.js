module.exports = (app) => {
    app.get('/api/ip', (req, res) => {
        const clientIp = req.clientIp;
        res.send(`${clientIp}`);
    });
}