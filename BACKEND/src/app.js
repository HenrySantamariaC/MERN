import express from 'express'
import cors from "cors";

import UsersRoute from "./routes/users.js";
import NotesRoute from "./routes/notes.js";

const app = express()

//settings
app.set('port', process.env.PORT || 4000)

//middlewares
app.use(cors())
app.use(express.json())

//routes
app.use('/api/users', UsersRoute)
app.use('/api/notes', NotesRoute)

export default app