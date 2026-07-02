import express from 'express';

const router = express.Router();

import{addTask, getTask, updateTask, deleteTask, isCompleted} from '../controller/tasksController.js';

router.post('/add', addTask);
router.get('/get', getTask);
router.put('/update/:id', updateTask);
router.delete('/delete/:id', deleteTask);
router.put('/isCompleted/:id', isCompleted)

export default router;