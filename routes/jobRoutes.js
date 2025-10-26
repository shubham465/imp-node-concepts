const express = require('express')
const router = express.Router()
const Job = require('../models/Job')
const ValidateToken = require('../middleware/auth')

router.use(ValidateToken)

router.route('/').post(async (req, res)=> {
    const {id, email} = req.user;
    const {title, description, salary, skills} = req.body;
    const job = await Job.create({jobId: id, title, description, salary, skills})
    res.json(job)
})

router.route('/:id').get(async (req, res)=> {
    try{
    const job = await Job.findById(req.params.id)
    res.json(job)        
    }
    catch(err){
    res.json({message: "No job Found !"})
    }
})

router.route('/').get(async (req, res)=> {
    const job = await Job.find({})
    res.json(job)
})

module.exports = router
