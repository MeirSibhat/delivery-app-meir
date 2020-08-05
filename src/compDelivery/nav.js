import React from 'react';

function Nav(props) {
    const doSeort= (e) => {
        props.SortProds(e.target.innerText)
    }

    
    const changeInput = (e) => {
        props.SearchItem(e.target.value)
    }
    return (
        <div>

            <nav className="navbar navbar-dark bg-primary">
                {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                <div className="dropdown ">
                    <button className="btn btn-outline-light dropdown-toggle btn-sm" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        sort
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <div className="dropdown-item" onClick={doSeort}  >price</div>
                        <div className="dropdown-item"   onClick={doSeort}  >name</div>
                    </div>
                </div>
                <div className="form-inline">
                    <input onChange={changeInput} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                </div>
            </nav>
        </div>
    )
}

export default Nav
