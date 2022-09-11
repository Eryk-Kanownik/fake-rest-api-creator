import express, { Express, Request, Response } from 'express' 
import cors from 'cors'
import {v4} from 'uuid'

const app:Express = express();

app.use(cors());
app.use(express.json());


//an array has to be an object to set collections

let data:Array<any> = []

let arr:Array<any> = []

app.get('/get',(req:Request,res:Response) => {
    res.json(data)
})

app.post('/add/object',(req:Request,res:Response) => {
    let credentials:Object = { id:v4(),...req.body }
    data.push(credentials);
    res.json(data)
})

app.post('/add/collection',(req:Request,res:Response) => {
    let { name } = req.body;
    let newCollection:any = [];
    arr.push(newCollection);
    res.json(arr)
})

app.post('/clear',(req:Request,res:Response) => {
    data = []
})

app.delete('/delete/:id',(req:Request,res:Response) => {
    let { id } = req.params;
    let index = data.map(e => e.id).indexOf(id);
    data.splice(index,1)
    res.json(data)
})

app.listen(2000,() => console.log("http://localhost:2000"))