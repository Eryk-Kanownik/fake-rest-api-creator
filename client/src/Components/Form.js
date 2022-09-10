import React,{useEffect, useState} from 'react'
import AddField from './AddField'
import Generate from './Generate'
import NewFormInput from './NewFormInput'
import Times from './Times'
import Submit from './Submit'
import axios from 'axios'
import CreateCollection from './CreateCollection'
import ClearServerArray from './ClearServerArray'
import RetrievedData from './RetrievedData'
import Collections from './Collections'

const Form = () => {
    const [fields,setFields] = useState([]);
    const [click,setClick] = useState(0);
    const [data,setData] = useState([]);
    const [collections,setCollections] = useState([]);
    useEffect(() => {
      async function fetchData(){
        let response = await axios.get('http://localhost:2000/get') 
        setData(response.data)
      }
      fetchData();
    },[click])

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

    let editField = (oldName) => {
        //arg is id
        let newFields = fields;
        let getId = fields.map(e => e[0]).indexOf(oldName);
        let newFieldName = prompt(`Write new name of the field: ${oldName}`)
        newFields[getId][0] = newFieldName;     
        setFields([...newFields]);
    }
    //works
    let clearBackend = () => {
        axios.post("http://localhost:2000/clear")
        setClick(click + 1)
    }

    //works
    let submit = async () => {
        if(fields.length !== 0){
            let obj = Object.fromEntries(fields);
            await axios.post('http://localhost:2000/add/object',obj)
            setClick(click + 1)
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
    
    let createCollection = () => {
        let name = prompt("Name of the new collection");
        if(name.length === 0){
            return 0;
        }
        setCollections([...collections,name])
    }

  return (
    <div className='form'>
        <div className='options' >
            <CreateCollection create={createCollection}/>
            <AddField add={add} />
            <ClearServerArray clearBackend={clearBackend}/>
            <Submit submit={submit}/>
            <Collections collections={collections}/>
        </div>
        <div className='fields'>
            {fields.map((e,index) => <NewFormInput fieldName={e[0]} key={index} del={delField} edit={editField} sDIF={setDataInputField}/>)}
        </div>
        <div>
            <RetrievedData data={data}/>
        </div>
    </div>
  )
}

export default Form