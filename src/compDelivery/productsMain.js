import React, { useEffect, useState } from 'react'
import { doApiGet } from '../services/apiService'
import ProductItem from './productItem'
import Header from './header'
import _ from 'underscore'
import Nav from './nav'

function MainProducts() {
    let [prods_ar, setProds] = useState([])
    let [tempArr, setTempArr] = useState([])
    useEffect(() => {
        let url = 'https://api-delivery-meir.herokuapp.com/products'
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
        let sortItem = _.sortBy(tempArr, _val);
        setProds(sortItem)
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
