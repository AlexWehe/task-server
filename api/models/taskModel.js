'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let TaskSchema = new Schema({
    name: {
        type: String,
        required: 'Enter the name of the task',
    },
    create_date:{
        type: Date,
        default: Date.now
    },
    description:{
        type: String,
        required: 'Enter the task description',
    },
    status: {
        type: [{
            type: String,
            enum: ['todo', 'inprogress', 'completed']
        }],
        default:['todo']
    }
});

module.exports = mongoose.model('Tasks', TaskSchema);
