import React, {useState,useEffect} from 'react';
import uniqid from 'uniqid';
import axios from 'axios';
import Task from './Task';
import AddTask from './AddTask';
import Header from './Header';

const Main = () => {
    const [inputValue, setInputValue] = useState('');
    const [tasks,setTasks] = useState();

    const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjJlM2U1MzVkODdiZmYxMzBiOTJlZiIsIm5hbWUiOiJUYWxUIiwiaWF0IjoxNjMzODcwODI5LCJleHAiOjE2MzUwODA0Mjl9.VaTiwyqup-dO5YcnnYlSwCyfCGSvxxcxF70W0HQ0TFo';
    const apiUrl = 'http://todo.etodo.xyz/api/v1';

    async function getData(){
        const authAxios = axios.create({
            baseURL: apiUrl,
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        try{
            await authAxios.get('/tasks')
            .then(response => {
                setTasks(response.data.docs);
                console.log("wwwwwwwww",response);
                
            })
        } catch(error){
            console.log(error)
        } 
    }
    async function postData(newTask){
        const authAxios = axios.create({
            baseURL: apiUrl,
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        try{
            await authAxios.post('/tasks',newTask)
            .then(response => {
                console.log(response)
            })
        } catch(error){
            console.log(error)
        } 
    }
    
    
    useEffect(() => {
        getData();
    },[])
    
    console.log('-----hhh----',tasks)
    const hendleCheckBox = (e) => {
        if(e.target.checked){
            console.log("............. true")
        }
    }



    const handleChange = (e) => {
        setInputValue(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {title:inputValue, body:"", done:false};
        postData(newTask);
        setInputValue('')
    }

    const handleDelete = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }
    // console.log(tasks);
    return ( <>
        {!tasks ? <h1>Loading</h1>
        : 
        <>
        <Header taskNumber={tasks.length} />
        {tasks.map(task => <Task
            key={task._id}
            toggleCheck={hendleCheckBox}
            task={task.title}
            id={task._id}
            deleteTask={handleDelete}
        />)}
        <AddTask handleInput={handleChange} inputValue={inputValue} task={handleSubmit} />
        </> 
        }
    </> );
}
 
export default Main;

