import React from 'react'
import Sidebar from './Sidebar'
import './category.css'
import Modal from './Modal';
import { useState } from 'react';
import Listprodut from './Listprodut';

function Category() {


    const [refresh,setrefresh] =useState(2)

    const refreshData =  ()=>{

    setrefresh(refresh+1)



    }
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
    return (
        <div className='second '>
            <div>
                <Sidebar />
            </div>
            <div className='container'>
                <div className='row'>
                <div className='section'>
                    <div className='col-12'>
                    <button className='btn btn-dark' style={{ width: '30%' }} onClick={openModal}>Add Category</button>
                    <Modal refresh={refreshData} isOpen={isModalOpen} onClose={closeModal}/>

                    </div>
               
                </div>
                <div className='mb-2'>
                <Listprodut refresh={refresh}></Listprodut>

                </div>
                

                </div>
             

            </div>
        </div>
    )
}

export default Category
