import express, { json} from 'express';
import morgan from 'morgan'

// importing routes
import authRoutes from './routes/auth';
import advertRoutes from './routes/adverts';

// initialisation
const app = express();

// middlewares
app.use(morgan('dev'));
app.use(json());

// routes
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/adverts',advertRoutes);


export default app;
