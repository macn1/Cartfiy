import React from 'react'

import img1 from '../../src/image/mob.png'
import img2 from '../../src/image/cloth.png'
import img3 from '../../src/image/home.png'
import img4 from '../../src/image/beauty.png'
import img5 from '../../src/image/grocery.png'







function Landing() {
    return (
        <div className='hel p-2' style={{ backgroundColor: '#e0dce8' }}>

            <div className='container'>

                <div className='row'>

                    <div className='col-12 cat' style={{ backgroundColor: '#e7e7fc' }}>
                        <div className='d-flex flex-coulmn justify-content-between'>


                            <div style={{ backgroundColor: '' }} >
                                <div>
                                    <img src={img1} style={{ width: '60px', height: '70px' }} alt="" />
                                    <p>Electronics</p>



                                </div>





                            </div>
                            <div>
                                <div>
                                    <img src={img2} style={{ width: '60px', height: '70px' }} alt="" />
                                    <p> Clothing</p>
                                </div>


                            </div><div>
                                <div>
                                <img src={img3} style={{ width: '60px', height: '70px' }} alt="" />
                                <p>Appliance</p>

                                </div>
                               
                            </div>
                            <div>
                                <div>
                                <img src={img4} style={{ width: '60px', height: '70px' }} alt="" />
                                <p>Cosmetics</p>

                                </div>
                               

                            </div><div>
                                <div >
                                <img src={img5} style={{ width: '60px', height: '70px' }} alt="" />
                                <p>Grocery</p>
                            </div>

                                </div>
                               
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Landing
