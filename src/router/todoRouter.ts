import Router from "express";
import { addTodo, deleteTodo, getTodos } from "../controller/TodoController";

const router = Router();

router.get("/", getTodos);
router.post("/", addTodo);
router.delete("/:id", deleteTodo);

export default router;
