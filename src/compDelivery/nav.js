import React from 'react';

function Nav(props) {
    const doSeort = (e) => {
        props.SortProds(e.target.innerText)
    }


    const changeInput = (e) => {
        props.SearchItem(e.target.value)
    }
    return (
        <div className="container">

            <nav className="navbar navbar-dark bg-primary row">
                <div className=" col-lg-6 col-md-12">
                    <div className="dropdown  sortItem ">
                        <button className="btn btn-outline-light dropdown-toggle btn-sm" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            sort
                    </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <div className="dropdown-item" onClick={doSeort}  >price</div>
                            <div className="dropdown-item" onClick={doSeort}  >name</div>
                        </div>
                    </div>
                </div>
                <div className=" col-lg-6 col-md-12">
                    <div className="searchItem form-inline">
                        <input onChange={changeInput} className="form-control " type="search" placeholder="Search" />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav
