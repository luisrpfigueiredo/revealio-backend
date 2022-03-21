const getRouter = require("../utils/getRouter");
const secretsController = require("../controllers/secrets");

const secretsRouter = getRouter();
secretsRouter.get("/api/secrets/:secretLink", secretsController.retrieveSecret);
secretsRouter.post("/api/secrets/", secretsController.createSecret);

module.exports = secretsRouter;
