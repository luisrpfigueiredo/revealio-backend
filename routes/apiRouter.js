const getRouter = require("../utils/getRouter");
const secretsRouter = require("./secrets");

const apiRouter = getRouter();

apiRouter.use(secretsRouter);

module.exports = apiRouter;
