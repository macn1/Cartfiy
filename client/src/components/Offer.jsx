

import React from 'react'


import img1 from '../../src/image/casual.jpg'

import img3 from '../../src/image/tshirt.jpg'


import img4 from '../../src/image/festive.jpg'


import img5 from '../../src/image/classics.jpg'

import img2 from '../image/elect.jpg'


import img6 from '../../src/image/1.jpg'


import img7 from '../../src/image/2.jpg'


import img8 from '../../src/image/3.jpg'


import img9 from '../../src/image/4.jpg'


function Offer() {
    return (
        <div className='off' style={{ backgroundColor: '#e0dce8' }}>
            <div className='container' >
                <div className='row'>

                    <div className='mt-2'>

                        <div className='row '>
                            <div className='col-12 col-md-4  ' style={{ backgroundColor: 'e0dce8' }} >

                                <div className='' style={{ backgroundColor: '#b5c230' }}>



                                    <div className='col-12 '>

                                        <h5 className='p-2'>Starting ₹299 | Latest styles from top brands</h5>


                                    </div>
                                    <div className='row  p-1'>
                                        <div className='col-12 col-md-6 ps-4'>


                                            <a href="">
                                                <img src={img1} alt="" style={{ width: '75%' }} />
                                                <p>Casual shirts</p>
                                            </a>



                                        </div>

                                        <div className='col-12 col-md-6 ps-4'>

                                            <a href="">
                                                <img src={img3} alt="" style={{ width: '75%' }} />
                                                <p>T-shirts</p>
                                            </a>

                                        </div>
                                        <div className='col-12 col-md-6 ps-4 mb-2'>

                                            <a href="">
                                                <img src={img4} alt="" style={{ width: '75%' }} />
                                                <p>Fesrive wear</p>
                                            </a>

                                        </div>
                                        <div className='col-12 col-md-6 ps-4'>

                                            <a href="">
                                                <img src={img5} alt="" style={{ width: '75%' }} />
                                                <p>Classic jeans</p>
                                            </a>

                                        </div>

                                    </div>



                                </div>



                            </div>
                            <div className='col-12 col-md-4 ' style={{ backgroundColor: 'e0dce8' }} >

                                <div className='' style={{ backgroundColor: '#b5c230' }}>


                                    <h5 className='p-2'>Up to 80% off | Electronics & accessories</h5>

                                    <div className='p-2 text-center mt-4'>
                                        <img src={img2} alt="" style={{ width: '60%', height: '150px' }} />

                                    </div>
                                    <a href="">
                                        <p className='mt-4 m-3' >see all offers </p>

                                    </a>

                                </div>



                            </div>
                            <div className='col-12 col-md-4 ' style={{ backgroundColor: 'e0dce8' }} >

                                <div className='' style={{backgroundColor:'#b5c230'}}>

                                    <h5 className='p-2'>Deals on smartphones that suits your budget</h5>

                                    <div className='row p-1'>
                                        <div className='col-12 col-md-6 ps-4'>


                                            <a href="">
                                                <img src={img6} alt="" style={{ width: '75%' }} />
                                                <p>Under ₹10,000
                                                </p>
                                            </a>



                                        </div>

                                        <div className='col-12 col-md-6 ps-4'>

                                            <a href="">
                                                <img src={img7} alt="" style={{ width: '75%' }} />
                                                <p>

                                                     ₹10,000 - ₹25,000</p>
                                            </a>

                                        </div>
                                        <div className='col-12 col-md-6 ps-4 mb-2'>

                                            <a href="">
                                                <img src={img8} alt="" style={{ width: '75%' }} />
                                                <p> ₹25,000 - ₹40,000
                                                </p>
                                            </a>

                                        </div>
                                        <div className='col-12 col-md-6 ps-4 '>

                                            <a href="">
                                                <img src={img9} alt="" style={{ width: '75%' }} />
                                                <p>

                                                     Above ₹40,000</p>
                                            </a>

                                        </div>

                                    </div>


                                </div>





                            </div>
                        </div>

                    </div>


                </div>

            </div>
        </div>
    )
}

export default Offer
