import dotenv from 'dotenv';
import express from 'express';
import {notFoundMiddleware, errorHandler} from './middlewares/index.js';
import router from './routes/router.js';

dotenv.config();
const PORT = process.env.PORT || 3009;

const app = express();

app.use(express.json());
app.use(router);
app.use(notFoundMiddleware)
app.use(errorHandler);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});