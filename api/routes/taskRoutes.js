'use strict';

module.exports = function (app) {
    let tasksCtrl = require('../controllers/taskController');
    console.log('prueba');

    app.route('/tasks')
        .get(tasksCtrl.getTasks)
        .post(tasksCtrl.createTask);

    app.route('/task/:id')
        .get(tasksCtrl.getTask)
        .put(tasksCtrl.updateTask)
        .delete(tasksCtrl.deleteTask);
}