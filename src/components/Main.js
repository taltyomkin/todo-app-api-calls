import React, {useState,useEffect} from 'react';
import axios from 'axios';
import './Main.css';
import Task from './Task';
import AddTask from './AddTask';
import Header from './Header';

const Main = () => {
    const [inputValue, setInputValue] = useState('');
    const [tasks,setTasks] = useState();
    const [fetchData, setFetchData] = useState(false);

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
    
    async function patchtData(id,checked){
        const authAxios = axios.create({
            baseURL: apiUrl,
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        try{
            await authAxios.patch(`/tasks/${id}`, checked)
            .then(response => {
                console.log(response);
                setFetchData(true);
            })
        } catch(error){
            console.log(error)
        } 
    }
    
    async function deleteData(id){
        const authAxios = axios.create({
            baseURL: apiUrl,
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        try{
            await authAxios.delete(`/tasks/${id}`)
            .then(() => {
                setFetchData(true);
            })
        } catch(error){
            console.log(error)
        } 
    }
    
    useEffect(() => {
        getData();
        setFetchData(false);
    },[fetchData])

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {title:inputValue, body:"", done:false};
        postData(newTask);
        setFetchData(true);
        setInputValue('');
    }

    const handleRemainsTasks = () => {
        if(tasks){
            const remains = tasks.filter(task => task.done !== true);
            return remains   
        } 
    }
    
    return ( 
        <div id='container'>
        {!tasks ? <h1>No tasks yet...</h1>
        : 
        <>
            <Header taskNumber={tasks.length} remains={handleRemainsTasks()}/>
            <ul >
                {tasks.map(task => <li className={task.done ? 'task-li-done' : 'task-li'}>
                    <Task
                        key={task._id}
                        toggleCheck={patchtData}
                        task={task.title}
                        id={task._id}
                        deleteTask={deleteData}
                    />
                </li>)}
            </ul>
        </> 
        }
        <AddTask handleInput={handleChange} inputValue={inputValue} task={handleSubmit} />
    </div> );
}
 
export default Main;

