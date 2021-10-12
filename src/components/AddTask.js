import React from 'react';

const AddTask = ({handleInput, task, inputValue}) => {
    return ( 
        <div id='add-task' style={{background:'yellow'}}>
            <form onSubmit={task}>
                <input type='text' onChange={handleInput} value={inputValue}/>
                <button>Add</button>
            </form>
        </div>
     );
}
 
export default AddTask;
