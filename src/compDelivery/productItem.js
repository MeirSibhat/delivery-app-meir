import React from 'react'

function ProductItem(props) {
    let item = props.item;
    return (
        <div className="p-5 col-lg-6 col-md-12">
            <div className="mainItem" >
                <img className="pic"  src={item.img}/>
                <br/>
                 <h5 className="itemName">{item.name}</h5>
                 <br/>
                 <p className="itemDescription">{item.description}</p>
            </div>
        </div>
    )
}

export default ProductItem

