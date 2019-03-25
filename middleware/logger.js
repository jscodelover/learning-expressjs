const moment = require("moment");

const logger = (req, res, next) => {
  console.log(
    `${req.protocol}://${req.get("host")}${req.originalUrl}: ${moment().format(
      "DD-MM-YY HH:mm a"
    )}`
  );
  next();
};

module.exports = logger;
