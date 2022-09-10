import express, { Express, Request, Response } from 'express' 
import cors from 'cors'
import {v4} from 'uuid'

const app:Express = express();

app.use(cors());
app.use(express.json());

let data:Array<any> = []

app.get('/get',(req:Request,res:Response) => {
    res.json(data)
})

app.post('/add/object',(req:Request,res:Response) => {
    let credentials:Object = { id:v4(),...req.body }
    data.push(credentials);
    res.json(data)
})

app.post('/add/collection',(req:Request,res:Response) => {
    data.push(req.body);
    res.json(data)
})

app.post('/clear',(req:Request,res:Response) => {
    data = []
})

app.listen(2000,() => console.log("http://localhost:2000"))