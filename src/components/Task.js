import React from 'react';

const Task = ({task, deleteTask, id, toggleCheck}) => {
    const handleCheck = (e) => {
        const checked = e.target.checked ? {done: true} : {done: false}
        toggleCheck(id, checked);
    }
    return ( 
        <form>
            <div>
                <input type='checkbox' onClick={handleCheck}/>
                <label htmlFor='task'>{task}</label>
            </div>
            <div>
                <button className='deletBtn' onClick={() =>deleteTask(id)} >Delete</button>
            </div>
        </form>
     );
}


 
export default Task;