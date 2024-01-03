import express from "express";
import {
    createUser,
    updateUser,
    deleteUser
} from "../controllers/UserController.js";

const router = express.Router();
router.get('/', (req, res) => {
    res.send('Hello from home')
})
router.post('/users', createUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;