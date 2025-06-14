const logger = function (req, res, next) {
  console.log("post requested");
  next();
};

module.exports = logger;
