import { json, urlencoded } from 'body-parser';

import cors from 'cors';
import dataTypeRoutes from './routes/datatype';
import express from 'express';
import mongoose from 'mongoose';
import templatesRoutes from './routes/template';
import todoRoutes from './routes/todos';

const app = express();
app.use(cors());
app.use(json());

app.use(urlencoded({ extended: true }));

app.use('/v1/todos', todoRoutes);
app.use('/v1/data-type', dataTypeRoutes);
app.use('/v1/template', templatesRoutes);

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(500).json({ message: err.message });
});

mongoose.connect(
    'mongodb+srv://sramyavishnu:5Pjy3jCNuEtPXSUo@healthcare.93xlkxy.mongodb.net/?retryWrites=true&w=majority'
);
const database = mongoose.connection;

database.on('error', error => {
    console.log(error);
});

database.once('connected', () => {
    console.log('Database Connected');
});

app.listen(3000);
