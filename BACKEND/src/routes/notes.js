import { Router } from "express";
import controller from "./../controllers/notes.controller.js";

const router = Router()

router.route('/')
    .get(controller.getNotes)
    .post(controller.createNote)

router.route('/:id')
    .get(controller.getNote)
    .put(controller.updateNote)
    .delete(controller.deleteNote)

export default router