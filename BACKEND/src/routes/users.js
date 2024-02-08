import { Router } from "express";
import controller from "./../controllers/users.controller.js";

const router = Router()

router.route('/')
    .get(controller.getUsers)
    .post(controller.createUser)

router.route('/:id')
    .get(controller.getUser)
    .put(controller.updateUser)
    .delete(controller.deleteUser)

export default router   