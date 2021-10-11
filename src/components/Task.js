import React from 'react';

const Task = ({task, deleteTask, id,toggleCheck}) => {
    return ( 
        <form>
            <input type='checkbox' onClick={toggleCheck}/>
            <label htmlFor='task'>{task}</label>
            <button onClick={() =>deleteTask(id)} >Delete</button>
        </form>
     );
}


 
export default Task;