import express from 'express';

import {connectUsingMongoose} from './src/config/db.js';
import vendorRouter from './src/vendor/vendor.routes.js';

const app = express();
app.use(express.json());

// routes
app.use('/api/vendors',vendorRouter);

// 404 response
app.use((req,res) => {
    res.status(404).send("API not found");
})

const PORT = process.env.PORT || 8000

app.listen(PORT,() => {
    console.log(`Server is up and running on port ${PORT}`);
    connectUsingMongoose();
})

