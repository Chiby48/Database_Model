const express = require("express")
const CarModel = require("../model/CarModel")

const getAllCars = async(req, res) =>{
    try {
        const GetCars = await CarModel.find()
        res.status(200).json({
            message: "List of cars",
            data: GetCars
        })
    } catch (error) {
        return res.status(404).json({
            message: "Can't get car details"
        })
    }
}

const CreateCar = async (req, res) =>{
    try {
        const {name, model, year, capacity, engine} = req.body
        const createSingleCar = await CarModel.create(
            {
                name, model, year, capacity, engine
            }
        )

        return res.status(200).json({
            message: "Car Created",
            data: createSingleCar
        })
    } catch (error) {
        return res.status(404).json({
            message: "Can't Create Car"

        })
    }
}