const { response } = require('express')
const dataPoint = require('../models/graph')

// show list of data points
const index = (req,res,next)=>{
    dataPoint.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message:"An error Occured :("
        })
    })
}


//show single datapoint
const show = (req,res,next)=>{
    let DataPointID = req.body._id
    dataPoint.findById(DataPointID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: "An error Occured :("
        })
    })
}

const store = (req, res,next) => {
    //console.log("hello")
    let datapoint = new dataPoint({
        _id: req.body._id,
        x: req.body.x,
        y: req.body.y,
        label: req.body.label
    })
    datapoint.save()
    .then(response => {
        res.json({
            message: "Datapoint saved"
        })
    })
    .catch(error => {
        console.log(error)
        res.json({
            message: "An error occured :("
        })
    })
}

const update  = (req,res,next) => {
    let datapoint_id = req.body._id

    let updatedData = {
        _id: req.body._id,
        x: req.body.x,
        y: req.body.y,
        label: req.body.label
    }

    dataPoint.findByIdAndUpdate(datapoint_id,{$set: updatedData})
    .then(response => {
        res.json({
            message: "Datapoint updated"
        })
    })
    .catch(error => {
        console.log(error)
        res.json({
            message: "error occured :("
        })
    })
}

// delete a datapoint
const destroy = (req,res,next)=>{
    let datapointID = req.body._id
    dataPoint.findByIdAndDelete(datapointID)
    .then(()=>{
        req.json({
            message:"datapoint deleted successfully"
        })
    })
    .catch(error => {
        req.json({
            message:"An error occured :("
        })
    })
}

module.exports = {
    index, show, store, update, destroy,
}