// index.js

//import express from 'express';

//import pkg from 'stv';
//const {stv} =pkg;
const stv = require('./stv/dist')
const express=require('express');
import { tempRouter } from './src/routes/temp.route';

const app = express();
const port = 3000;

// router setting
app.use('/temp', tempRouter);

// error handling
/*app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send(err.stack);
});*/

app.use((err,req,res,next)=>{
    res.locals.message=err.message;
    //개발환경이면 에러 출력! 아니면 출력하지 않기.
    res.locals.error=process.env.NODE_ENV!=='production' ? err : {};
    res.stauts(err.data.status).send(response(err.data));    
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});