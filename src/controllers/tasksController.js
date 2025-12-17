const taskModel = require('../models/tasksModel');

async function index(req, res) {
    taskModel.getAllTasks((error, tasks) => {
    if (error) {
        return res.status(500).send('Error retrieving tasks' + error);
    }
    res.render('pages/index', { tasks } );
});
}

function newForm(req, res){
    res.render('pages/new');
}

function editForm(req,res){
    const {id} = req.params;
    taskModel.getTaskById(id, (error, taskTable) => {
        if (error) {
            return res.status(500).send('Error retrieving task: ' + error);
        }
        const task = taskTable[0]; 
        res.render('pages/edit', { task });
    });
}

function add(req,res) {
    const {title, content, status} = req.body;
    taskModel.addTask(title, content, status, (error) => {
        console.log(status);
        if (error) {
            return  res.status(500).send('Error adding task: ' + error);
        }
        res.redirect('/');
    });
}

function edit(req, res) {
        const {id, title, content, status} = req.body;
    taskModel.editTask(id, title, content, status, (error) => {
        console.log(status);
        if (error) {
            return  res.status(500).send('Error editing task: ' + error);
        }
        res.redirect('/');
    });
}

function remove(req, res) {
    const {id} = req.params;
    taskModel.removeTask(id, (error) => {
        if (error) {
            return  res.status(500).send('Error deleting task: ' + error);
        }
        res.redirect('/');
});
}

module.exports = {
    index,
    newForm,
    add,
    editForm,
    edit,
    remove
};
