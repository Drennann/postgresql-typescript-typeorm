import express from "express";
import morgan from "morgan";
import cors from "cors";
import userRouter from "./routes/user.routes";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());


app.use("/api/users", userRouter);

export default app;
