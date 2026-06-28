import { Request, Response } from "express";
import TodoModel from "../model/TodoModel";

export const getTodos = async (req: Request, res: Response) => {
  try {
    const todos = await TodoModel.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json("Something went wrong !");
    console.log(error);
  }
};

export const addTodo = async (req: Request, res: Response) => {
  try {
    const { task, completed } = req.body;

    const newTask = new TodoModel({
      task,
      completed,
    });
    const savedTask = await newTask.save();
    res
      .status(201)
      .json({ message: "Task add successfully !", data: savedTask });
  } catch (error) {
    res.status(500).json("somthing went wrong!");
    console.log(error);
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  try {
    await TodoModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Task dleeted successfully! ");
  } catch (error) {
    res.status(500).json("somthing went wrong!");
    console.log(error);
  }
};
