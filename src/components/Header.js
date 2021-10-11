import React from 'react';

const Header = ({taskNumber}) => {
    return ( 
        <div>
            <h1>{taskNumber} Tasks</h1>
            <span>task remain</span>
        </div>
     );
}
 
export default Header;