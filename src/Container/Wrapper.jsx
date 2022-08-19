import React, {useEffect, useState} from 'react'
import Item from '../Components/Item/Item';
import axios from 'axios'


export const Wrapper = ({val, inner}) => {
    let [arr, setArr] = useState([]) 
    const url = "http://hn.algolia.com/api/v1/"

    useEffect(() => {
        axios.get(`${url}search?query=${val}&tags=${inner}`)
            .then(res => {
                if(res.status === 200 || res.status === 201) {
                    setArr(res.data.hits)
                    }
            })

    }, [val, inner])

    return (
        <div className="wrapper">
            {
                arr.map((item, index) => <Item key={index} {...item} />)
            }
        </div>
    )
}
