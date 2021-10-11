import React from 'react';

const AddTask = ({handleInput, task, inputValue}) => {
    return ( 
        <form onSubmit={task}>
            <input type='text' onChange={handleInput} value={inputValue}/>
            <button>Add</button>
        </form>
     );
}
 
export default AddTask;