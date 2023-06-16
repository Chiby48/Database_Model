const express = require("express")
const ElectionModel = require("../model/ElectionModel")

const getAllElections = async(req, res) =>{
    try {
        const GetUser = await ElectionModel.find()
        res.status(200).json({
            message: "List of Users",
            data: GetUser
        })
    } catch (error) {
        return res.status(404).json({
            message: "Can't get User details"
        })
    }
}

const CreateUsers = async (req, res) =>{
    try {
        const {  id, PVC, pollingUnit, politicalParty, citizen} = req.body
        const createSingleElection = await ElectionModel.create(
            {
                id, PVC, pollingUnit, politicalParty, citizen
            }
        )

        return res.status(200).json({
            message: "User Created",
            data: createSingleElection
        })
    } catch (error) {
        return res.status(404).json({
            message: "Can't Create User"

        })
    }
}