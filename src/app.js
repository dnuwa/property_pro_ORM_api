import express, { json } from 'express';
import morgan from 'morgan';
import Cors from 'cors';

// importing routes
import authRouter from './server/routes/auth';
import propertyRouter from './server/routes/property';

// initialisation
const app = express();

// middlewares
app.use(Cors());
app.use(morgan('dev'));
app.use(json());

// routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/', propertyRouter);

app.get('/', (req, res) => {
  res.status(200).send({
    status: 200,
    message: 'Welcome to the property_pro_lite API'
  });
});

export default app;
