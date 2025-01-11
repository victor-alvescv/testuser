import React from 'react';

const Directory = () => {
    return (
        <div className="directory">
            <div className="container">
                <div className="row">
                    <div className="searchbar__wrapper">
                        <input type="search" className='searchbar' >
                        <i class="fa-solid fa-magnifying-glass"></i>
                        </input>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Directory;
