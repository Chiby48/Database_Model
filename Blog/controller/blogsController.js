const express = require("express")
const BlogModel = require("../model/blogsModel")

const getAllBlogs = async(req, res) =>{
    try {
        const GetBlog = await BlogModel.find()
        res.status(200).json({
            message: "List of Blogs",
            data: GetUser
        })
    } catch (error) {
        return res.status(404).json({
            message: "Can't get Blogs details"
        })
    }
}

const CreateBlog = async (req, res) =>{
    try {
        const {structure, introduction, body, content, conclusion} = req.body
        const createSingleBlog = await BlogModel.create(
            {
                structure, introduction, body, content, conclusion
            }
        )

        return res.status(200).json({
            message: "Blog Created",
            data: createSingleBlog
        })
    } catch (error) {
        return res.status(404).json({
            message: "Can't Create Blog"

        })
    }
}