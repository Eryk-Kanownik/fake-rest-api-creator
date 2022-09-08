import express, { Express, Request, Response } from 'express' 
import cors from 'cors'


const app:Express = express();

app.use(cors());
app.use(express.json());

let data:Array<any> = [{message:"hello"}]

app.get('/get',(req:Request,res:Response) => {
    res.json(data)
})

app.post('/add/object',(req:Request,res:Response) => {
    let credentials:Array<any> = req.body
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