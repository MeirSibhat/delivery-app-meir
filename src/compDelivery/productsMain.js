import React, { useEffect, useState } from 'react'
import { doApiGet } from '../services/apiService'
import ProductItem from './productItem'
import Header from './header'
import Nav from './nav'

function MainProducts() {
    let [prods_ar, setProds] = useState([])
    let [tempArr, setTempArr] = useState([])
    useEffect(() => {
        let url = 'https://api-products-meir.herokuapp.com/products';
        doApiGet(url)
            .then(data => {
                console.log(data);
                setProds(data)
                setTempArr(data)

            })
    }, [])

    const SearchItem = (_val) => {

        let searchVal = _val;
        let searchItems = tempArr.filter(item => {

            return (item.name.toLowerCase().includes(searchVal.toLowerCase()) ||
                item.description.toLowerCase().includes(searchVal.toLowerCase()))
        })

        setProds(searchItems)
    }
    const SortProds = (_val) => {
        let url = 'https://api-products-meir.herokuapp.com/products/sort/'+_val;
        doApiGet(url)
            .then(data => {
                console.log(data);
                setProds(data)
                setTempArr(data)

            })

    }

    return (
        <div className="container">
            <Header />
            <Nav SearchItem={SearchItem} SortProds={SortProds} />
            <div className="row">
                {prods_ar.map((item, i) => {
                    return (<ProductItem key={item.id} item={item} />)
                })}
            </div>
        </div>
    )
}

export default MainProducts
