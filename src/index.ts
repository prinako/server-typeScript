import express, {Application, Response, Request} from 'express';

const app: Application = express()
const PORT: number = 5000;

app.get('/',(req: Request, res:Response)=>{
    res.send("hi");
});

app.listen(PORT, ()=>{
    console.log("on port 5000");
});
