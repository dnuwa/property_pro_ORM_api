import express, { json } from 'express';
import morgan from 'morgan';

// importing routes
import authRouter from './server/routes/auth';
import advertRoutes from './server/routes/adverts';

// initialisation
const app = express();

// middlewares
app.use(morgan('dev'));
app.use(json());

// routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/adverts', advertRoutes);

app.get('/', (req, res) => {
  res.status(200).send({
    status: 200,
    message: 'Welcome to the property_pro_lite API'
  });
});

export default app;
