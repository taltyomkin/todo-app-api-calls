import React, {useState,useEffect} from 'react';
import uniqid from 'uniqid';
import axios from 'axios';
import Task from './Task';
import AddTask from './AddTask';
import Header from './Header';
import { getData } from '../services/ApiCalls';

// import {getData} from '../services/ApiCalls'


const Main = () => {
    const [inputValue, setInputValue] = useState('');
    const [tasks,setTasks] = useState([]);
    const [taskRemain, setTaskRemain] = useState(tasks.length);

    const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjJlM2U1MzVkODdiZmYxMzBiOTJlZiIsIm5hbWUiOiJUYWxUIiwiaWF0IjoxNjMzODcwODI5LCJleHAiOjE2MzUwODA0Mjl9.VaTiwyqup-dO5YcnnYlSwCyfCGSvxxcxF70W0HQ0TFo';
    const apiUrl = 'http://todo.etodo.xyz/api/v1';

    const getData = () => {
    const authAxios = axios.create({
        baseURL: apiUrl,
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
    authAxios.get('/tasks')
    .then(response => {
        console.log("wwwwwwwww",response);
        
        return response
    })
    .catch(error => {
        console.log(error)
    })
}

    useEffect(() => {
        const myData = getData()
        console.log('ffffffffffff', myData)
    },[])
    
    const hendleCheckBox = (e) => {
        if(e.target.checked){
            console.log("............ true")
            console.log("............ taskRemain",taskRemain)

        }
    }



    const handleChange = (e) => {
        setInputValue(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setTasks([...tasks, {title:inputValue, id:uniqid()}]);
        setTaskRemain(tasks.length)
        setInputValue('')
    }

    const handleDelete = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }
    // console.log(tasks);
    return ( <>
        <Header taskNumber={tasks.length} />
        {tasks.map(task => <Task
            key={task.id}
            toggleCheck={hendleCheckBox}
            task={task.title}
            id={task.id}
            deleteTask={handleDelete}
        />)}
        <AddTask
            handleInput={handleChange}
            inputValue={inputValue}
            task={handleSubmit}
        />
    </> );
}
 
export default Main;