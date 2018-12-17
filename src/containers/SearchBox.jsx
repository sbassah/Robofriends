import React from 'react';

const SearchBox = ({searchfield, searchChange}) =>{
    return(
        <div>
            <input type="search"  onChange= {searchChange} placeholder ="Enter a search" />
        </div>


    );

}

export default SearchBox;