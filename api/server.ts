import { createServer } from "http";
import  App  from "./app";
import { sequelize } from "./sequelize";
import { LoginController } from "./controllers/login.controller";

const port = process.env.PORT || 3000;

(async () => {
  await sequelize.Sequelize;

  createServer(new App([new LoginController()]).app).listen(port, () =>
    console.info(`Server running on port ${port}`)
  );
})();
