const express = require("express")
const set07Model = require("../model/set07Model")

const getAllset07 = async(req, res) =>{
    try {
        const Getset07 = await set07Model.find()
        res.status(200).json({
            message: "List of set07",
            data: Getset07
        })
    } catch (error) {
        return res.status(404).json({
            message: "Can't get set07 details"
        })
    }
}

const Createset07 = async (req, res) =>{
    try {
        const {name, password, email, isFemale, phoneNum} = req.body
        const createSingleset07 = await set07Model.create(
            {
                name, password, email, isFemale, phoneNum
            }
        )

        return res.status(200).json({
            message: "set07 Created",
            data: createSingleset07
        })
    } catch (error) {
        return res.status(404).json({
            message: "Can't Create set07"

        })
    }
}