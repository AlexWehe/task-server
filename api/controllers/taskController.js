'use strict';

let moongose = require('mongoose');
let Task = moongose.model('Tasks');

exports.getTasks = function (req, res) {
    Task.find({}, function (err, task) {
        if(err)
            res.send(err);
        res.json(task);
    })
};

exports.createTask = function(req, res) {
    let new_task = new Task(req.body);
    new_task.save(function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

exports.getTask = function (req, res) {
    Task.findById(req.params.id, function (err, task) {
        if (err)
            res.send(err);
        res.json(task)
    })
};

exports.updateTask = function (req, res) {
    Task.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err) {
        if (err)
            res.send(err);
        res.json({message: 'Task succesfully updated'});
    })
};

exports.deleteTask = function (req, res) {
    Task.remove({_id: req.params.id}, function (err, task) {
        if (err)
            res.send(err);
        res.json({message: 'Task succesfully deleted'});
    })
};
