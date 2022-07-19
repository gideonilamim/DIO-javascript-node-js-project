import express, { NextFunction, Request, Response } from "express";
import statusRoute from "./routes/status.route";
import userRoute from "./routes/users.route";

const app = express();

//basic setup for express
app.use(express.json()); //this will enable the code to understand json bodies
app.use(express.urlencoded({extended:true}));

//Routes imports
app.use(userRoute);
app.use(statusRoute);

app.listen(3000, ()=>{ // to access this:  http://localhost:3000
    console.log('porta 3000 ');
})
// this way, we can create a server very easily 