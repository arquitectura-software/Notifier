import express, { json } from "express";

const app = express();
// Routes

import notificationRoutes from "./routes/notificationRoutes";

//settings

app.set("port", process.env.PORT || 3000);

//Middlewares
app.use(json());

//Routes
app.use("/notifications", notificationRoutes);

export default app;
