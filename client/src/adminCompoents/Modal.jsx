import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react'
import { FaTimesCircle } from 'react-icons/fa'

const Modal = ({ isOpen, onClose ,refresh}) => {

    const [form, setForm] = useState({ category: '', sub: '', image: null })
    const [imagePreview, setImagePreview] = useState(null)

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setForm({ ...form, [name]: value })
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        setForm({ ...form, image: file })
        setImagePreview(URL.createObjectURL(file))
    }

    const handleRemoveImage = () => {
        setForm({ ...form, image: null })
        setImagePreview(null)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const formData = new FormData()
        formData.append('category', form.category)
        formData.append('sub', form.sub)
        formData.append('image', form.image)


        console.log(FormData,"sdsd");
        

        try {
            const res = await axios.post('http://localhost:4000/cat', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })

            if (res.data.status) {
                refresh()
                setForm({ category: '', sub: '', image: null })
                setImagePreview(null)
            }
        } catch (error) {
            console.error(error)
        }
    }

    if (!isOpen) return null

    return (
        <div className="mt-3 modal-container d-flex justify-content-center align-items-center">
            <div className="modal-content container bg-dark p-4 rounded " style={{ width: "100%", maxWidth: "300px" }}>
                <button className="btn-close text-white" onClick={onClose} style={{ float: 'right' }}></button>
                <h2 className="text-light text-center">Create Category</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input 
                            type="text" 
                            name="category" 
                            placeholder="Category" 
                            value={form.category} 
                            onChange={handleChange} 
                            className="form-control" 
                        />
                    </div>
                    <div className="mb-3">
                        <input 
                            type="text" 
                            name="sub" 
                            placeholder="Sub-Category" 
                            value={form.sub} 
                            onChange={handleChange} 
                            className="form-control" 
                        />
                    </div>
                    <div className="mb-3">
                        <input 
                            type="file" 
                            name="image" 
                            onChange={handleFileChange} 
                            className="form-control" 
                        />
                    </div>
                    
                    {imagePreview && (
                        <div className="position-relative mb-3">
                             <FaTimesCircle 
                                onClick={handleRemoveImage} 
                                className="position-absolute text-danger" 
                                style={{ top: '5px', right: '5px', cursor: 'pointer', fontSize: '20px' }}
                            />
                            <img 
                                src={imagePreview} 
                                alt="Image Preview" 
                                className="img-fluid" 
                                style={{ maxHeight: '100px', borderRadius: '10px' }}
                            />
                           
                        </div>
                    )}

                    <div className="d-grid">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Modal
