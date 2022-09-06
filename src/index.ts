import express, { Express, Request, Response } from 'express' 

const app:Express = express();

let data:Array<any> = [{msg:"hello"}]

app.get('/get',(req:Request,res:Response) => {
    res.json({data})
})

app.post('/add',(req:Request,res:Response) => {
    
})
app.listen(2000,() => console.log("http://localhost:2000"))