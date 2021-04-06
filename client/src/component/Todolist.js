import { Button } from '@material-ui/core';
import React, {useEffect, useState} from 'react'
import axios from 'axios'

const styles = {
    completed : {
        color : 'green',
        textDecoration : 'line-through'
    },
    notCompleted : {
        color: 'red'
    },
    btnStyle : {
        height:"40px"
    }
}

    function Todolist(){
        const[flag,setFlag]=useState(false)
        const [input, setInput] = useState('')
        // const [additem, setAdditem] = useState([])
        const [alldata, setAllData] = useState([])

        useEffect(()=>{
            axios.post('http://localhost:8080/data').then((result)=>{
                // console.log(result)
                setAllData(result.data.data)
            })
        },[flag])

        const handleAdd= (e) => {
            axios.post('http://localhost:8080/todo',{task:input}).then((result)=>{
                console.log(result)
            setFlag(!flag)
            })
            // e.preventDefault()
            // setAdditem([...additem,{id:Date.now(),task : input, completed: false}])
            // // console.log(additem)
        } 
        
        const handleDelete= (e,id)=>{
        axios.post("http://localhost:8080/removedata",{id}).then(result=>{
            console.log(result)
            setFlag(!flag)
        })
            // setAdditem(additem.filter(item => item.id !== id ))
            // console.log(id)
        }

        const handleToggle=(e,id,completed)=>{
            axios.post("http://localhost:8080/update",{id,completed}).then(result=>{
            console.log(result)
            setFlag(!flag)
        })
            // setAdditem(additem.map(item => {
            //     if(item.id === id ) {
            //         return {...item, completed : !item.completed}
            //     }
            //     else return item
            // }))
        }

        return(
            <div  >
                <h1><center>Todo List</center></h1>
                <form onSubmit={e=>handleAdd(e)}>
                <br />
                <div style={{textAlign:"center"}}>
                    <input type="text" name='input' placeholder="Add Item..." style={{height:'30px'}} onChange={e=>setInput(e.target.value)} required/> &emsp;
                    <Button variant='contained' color='primary' onClick={e=>handleAdd(e)} >Add</Button>                   
                </div>   <br />
                <ol>
                    {  
                        alldata && alldata.length>0 ? 
                        alldata.map((item,index)=>{
                            return(<>
                                    <div style={{display:'flex', marginBottom : '0px', textAlignLast : 'center'}} key={index} > <li style={item.completed ? styles.completed : styles.notCompleted}> <h5 style={{minWidth:'150px'}}>{item.task}</h5   > &emsp;
                                        </li>
                                        <Button variant='contained' style={styles.btnStyle}  className={item.completed ? 'completedItem' : 'incompleteItem'} onClick={e=>handleToggle(e,item.id,item.completed)} >Toggle</Button> &ensp;
                                        <Button variant='contained' color='secondary' style={styles.btnStyle} onClick={e=>handleDelete(e,item.id)} >Delete</Button> 
                                    </div>
                            </>)
                        }):null
                    }   
                </ol>
                </form>
            </div>
        )
    }
export default Todolist;