import React from 'react'
import Title from 'react-vanilla-tilt'
function ProductItem(props) {
    let item = props.item;
    return (
        <div className="p-3 col-lg-6 col-md-12">
        <Title className="tilt" options={{ scale: 4, max: 30 ,width:150}}> 
            <div className="mainItem" >
                <img className="pic"  src={item.image} alt={item.name} />
                <br/>
                 <h5 className="itemName">{item.name}</h5>
                 <br/>
                 <p className="itemDescription">{item.description}</p>
            </div>
            
            </Title>
          
        </div>
    )
}

export default ProductItem

/**      <Title options={{ scale: 4, max: 30 }}>  
            <div>
                You can put whatever you want inside this
     </div>
        </Title>
         */