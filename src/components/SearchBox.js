import React from 'react';

const SearchBox = ({ searchChange}) => {
    return ( 
        <div className="pa2">
            <input
            aria-label = "Search robots"
            className="pa2 ba b--green bg-lightest-blue"
            placeholder = "search robots"
            onChange={searchChange}
            />
            

            
            
        </div>
     );
}
 
export default SearchBox;