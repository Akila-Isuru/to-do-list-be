import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import todoRouter from "../src/router/todoRouter";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/v1/todo", todoRouter);

const DB_URL = process.env.DB_URL as string;
const PORT = process.env.PORT as string;

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("DB Connected");
  })

  .catch((error) => {
    console.log(error);
  });

app.listen(PORT, () => {
  console.log("App successfully running in port :", PORT);
});
