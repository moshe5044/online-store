import React from 'react'
import CartList from './CartList'
import Total from '../Total'

export default function Cart() {
    return (
        <div className='cart'>
            {/* <h2>Shopping Cart</h2> */}
            <CartList />
            <Total />
        </div>
    )
}
