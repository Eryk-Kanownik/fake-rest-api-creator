import React,{useState} from 'react'
import CreateScheme from './CreateScheme'
import Generate from './Generate'
import NewFormInput from './NewFormInput'
import Times from './Times'
import Submit from './Submit'
import axios from 'axios'
import CreateCollection from './CreateCollection'

const Form = ({loadOnSubmit,value}) => {
    let add = () => {
        let name = prompt("Name of the new field")
        let value = "";
        if(name.length === null){
            
        }
        if(name.length > 0 && fields.filter(e => e[0] === name).length === 0) {
            let arr = [
                name,
                value
            ]
            setFields([...fields,arr])
        } else if(fields.filter(e => e[0] === name).length > 0 && name.length > 0){
            alert("Field with that name already exist");
        }
    }
    let del = (arg) => {
        let newData = fields.filter(e => e[0] !== arg);
        setFields(newData);
    }
    let submit = async () => {
        if(fields.length !== 0){
            let obj = Object.fromEntries(fields);
            await axios.post('http://localhost:2000/add/object',obj)
        }
        loadOnSubmit(value++)
    }
    let setDataInputField = (arg) => {
        let index = fields.map(e => e[0]).indexOf(arg.fieldName);
        let fds = fields;
        fds[index][1] = arg.value;
        setFields(fds)
    }
    const [fields,setFields] = useState([])

  return (
    <div className='form'>
        <div className='add-field' >
            <CreateScheme add={add} />
            <CreateCollection />
            <Submit submit={submit}/>
        </div>
        <div className='fields'>
            {fields.map(e => <NewFormInput fieldName={e[0]} key={e[0]} del={del} sDIF={setDataInputField}/>)}
        </div>
    
    </div>
  )
}

export default Form