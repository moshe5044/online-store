import React from 'react'
import ItemList from './ItemList'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Categories from './Categories'
import ItemDetails from './ItemDetails'

function Content() {

  const nav = useNavigate()

  return (
    <div className='content'>
      {/* <div onClick={() => nav('/')}>Home</div> */}
      <Routes>
        <Route path='/' element={<Categories />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/categories/:catName' element={<ItemList />} />
        <Route path='/item/:itemId' element={<ItemDetails />} />
      </Routes>
    </div>
  )
}

export default Content