import cors from 'cors';
import express, { Application } from 'express'
import { todoRoutes } from './app/modules/todo/todo.route';
const app:Application = express()

//parsers
app.use(express.json());
app.use(cors());


app.use('/api/todos',todoRoutes)

export default app