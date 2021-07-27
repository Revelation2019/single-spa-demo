// const proxy = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(async (req, res, next) => {
    console.log(req.originalUrl)
    res.setHeader("Access-Control-Allow-Origin", '*');
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
  })

}
