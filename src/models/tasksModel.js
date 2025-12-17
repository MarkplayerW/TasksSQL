const db = require('../data/connection');

function getAllTasks(callback) {
    db.query('SELECT * FROM tasks', callback);
}

function addTask(title, content, status, callback) {
    const query = 'INSERT INTO tasks (title, content, status) VALUES (?, ?, ?)';
    db.query(query, [title, content, status], callback);
}

function getTaskById(id, callback) {
    const query = 'SELECT * FROM tasks WHERE id = ?';
    db.query(query, [id], callback);
}

function editTask(id, title, content, status, callback) {
    const query = 'UPDATE tasks SET title = ?, content = ?, status = ? WHERE id = ?';
    db.query(query, [title, content, status, id], callback);
}
function removeTask(id, callback) {
    const query = 'DELETE FROM tasks WHERE id = ?';
    db.query(query, [id], callback);
}


module.exports = { getAllTasks, addTask, editTask, removeTask, getTaskById };