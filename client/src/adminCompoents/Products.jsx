import React from 'react'
import Sidebar from './Sidebar'

import './product.css'

function Products() {
  return (
    <div className='product' >
   
    <div className='container'>

        <div className='row'>

                <div className='col-12'>
           <Sidebar></Sidebar>

                </div>
                <div col-12>
                <button className='' style={{'marginTop':'15%' ,"width":"30%","backgroundColor":'#1d1d1f'}}> Add product</button>

                </div>
        </div>


    </div>
    </div>
  )
}

export default Products
