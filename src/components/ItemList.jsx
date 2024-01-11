import React from 'react';
import Item from './item';
import { fruits } from '../data'

function ItemList() {

    return (
        <div className='itemList'>
            {fruits.map((fruit) => (
                <Item key={fruit.id} item={fruit} />
            ))}
        </div>
    )
} 

export default ItemList