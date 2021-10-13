import React from 'react';

const AddTask = ({handleInput, task, inputValue}) => {
    return ( 
        <div id='add-task' >
            <form onSubmit={task}>
                <input
                    className='add-Task-input'
                    type='text'
                    onChange={handleInput}
                    value={inputValue}
                />
                <button>Add</button>
            </form>
        </div>
     );
}
 
export default AddTask;
