import React from 'react';

const Header = ({taskNumber, remains}) => {
    return ( 
        <div id='header' >
            <h1>{taskNumber} Tasks</h1>
            <span>task remain {remains.length}</span>
        </div>
     );
}
 
export default Header;