const express = require('express')
const router = express.Router()

const Task = require('../models/Task')


// GET ALL TASKS
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find()

        res.status(200).json(tasks)
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})


// ADD NEW TASK
router.post('/', async (req, res) => {
    try {
        const { title, details } = req.body

        const newTask = new Task({
            title,
            details
        })

        const savedTask = await newTask.save()

        res.status(201).json(savedTask)
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})


// DELETE TASK
router.delete('/:id', async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id)

        if (!deletedTask) {
            return res.status(404).json({
                message: 'Task not found'
            })
        }

        res.status(200).json({
            message: 'Task deleted successfully'
        })
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})


module.exports = router