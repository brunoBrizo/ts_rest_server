import express, { Application } from "express";
import * as userRoutes from "../routes/user";

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    users: "/api/users",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "3000";

    this.routes();
  }

  routes() {
    this.app.use(this.apiPaths.users, userRoutes.default);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server is running");
    });
  }
}

export default Server;
