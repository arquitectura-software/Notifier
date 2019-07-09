import express, { json } from "express";

const app = express();
// Routes

import notificationRoutes from "./routes/notificationRoutes";
import seed  from "./seed"
//settings

app.set("port", process.env.PORT || 3002);

//Middlewares
seed()
app.use(json());

//Routes
app.use("/notifications", notificationRoutes);

export default app;
