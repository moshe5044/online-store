import React, { useState, useEffect } from 'react';
import Item from './item';
import axios from 'axios';
import { useParams } from 'react-router-dom'

function ItemList() {
 
    const [items, setItems] = useState([]);
    const { catName } = useParams()

    useEffect(() => {
        const fetchItems = async () => {
            const response = await axios.get('https://jbh-mockserver.onrender.com/categories/' + catName)
            setItems(response.data)
        }
        fetchItems()
    }, [])

    return (
        <div className='itemList'>
            {!items.length ?
                <h1>Loading...</h1> :
                items.map(item => <Item key={item.id} item={item} />)
            }
        </div>
    )
}

export default ItemList