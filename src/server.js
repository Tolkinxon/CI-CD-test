import express from 'express';
import { serverConfig } from './config.js'
const { PORT } = serverConfig;

const app = express();

app.get('/hello', (req, res)=>{res.send("Hello world")});
app.listen(PORT, ()=>console.log(`Server runnig on PORT ${PORT}`));