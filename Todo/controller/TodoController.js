const express = require("express")
const TodoModel = require("../model/TodoModel")

const getAllTodos = async(req, res) =>{
    try {
        const GetTodo = await TodoModel.find()
        res.status(200).json({
            message: "List of Todo",
            data: GetUser
        })
    } catch (error) {
        return res.status(404).json({
            message: "Can't get Todo List"
        })
    }
}

const CreateTodos = async (req, res) =>{
    try {
        const {items, planning, preparation, task, done} = req.body
        const createSingleTodo = await TodoModel.create(
            {
                items, planning, preparation, task, done
            }
        )

        return res.status(200).json({
            message: "Todo Created",
            data: createSingleTodo
        })
    } catch (error) {
        return res.status(404).json({
            message: "Can't Create Todo"

        })
    }
}