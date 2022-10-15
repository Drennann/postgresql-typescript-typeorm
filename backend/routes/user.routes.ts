import { Router } from "express";
import { deleteUser, getUser, getUserById, postUser, putUser } from "../controllers/user.controllers";

const userRouter = Router();

userRouter.get("/", getUser);

userRouter.post("/", postUser);

userRouter.put("/:id", putUser);

userRouter.delete("/:id", deleteUser);

userRouter.get("/:id", getUserById);

export default userRouter;