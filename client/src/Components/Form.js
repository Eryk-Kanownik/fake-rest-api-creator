import React,{useState} from 'react'
import CreateScheme from './CreateScheme'
import Generate from './Generate'
import NewFormInput from './NewFormInput'
import Times from './Times'
import Submit from './Submit'
import axios from 'axios'
import CreateCollection from './CreateCollection'
import ClearServerArray from './ClearServerArray'

const Form = ({loadOnSubmit,value}) => {
    let add = () => {
        let name = prompt("Name of the new field")
        let value = "";
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

    //works
    let delField = (arg) => {
        let newData = fields.filter(e => e[0] !== arg);
        setFields(newData);
    }

    let editField = ({index,oldName}) => {
        //arg is id
        let newFields = fields;
        let newFieldName = prompt(`Write new name of the field: ${oldName}`)
        newFields[index][0] = newFieldName;
        console.log(newFields[index][0])
        setFields(newFields);
    }
    //works
    let clearBackend = () => {
        axios.post("http://localhost:2000/clear")
        loadOnSubmit(value + 1)
    }

    //works
    let submit = async () => {
        if(fields.length !== 0){
            let obj = Object.fromEntries(fields);
            await axios.post('http://localhost:2000/add/object',obj)
            loadOnSubmit(value + 1)
        } else {
            alert("You cannot pass anything without declaration of scheme")
        }
    }

    //on change set value for field name 
    //works
    let setDataInputField = (arg) => {
        let index = fields.map(e => e[0]).indexOf(arg.fieldName);
        let fds = fields;
        fds[index][1] = arg.value;
        setFields(fds)
    }
    const [fields,setFields] = useState([])

  return (
    <div className='form'>
        <div className='options' >
            <CreateCollection />
            <CreateScheme add={add} />
            <ClearServerArray clearBackend={clearBackend}/>
            <Submit submit={submit}/>
        </div>
            
        <div className='fields'>
            {fields.map((e,key,index) => <NewFormInput fieldName={e[0]} index={index} key={key} del={delField} edit={editField} sDIF={setDataInputField}/>)}
        </div>
    
    </div>
  )
}

export default Form