import React, { useEffect, useState } from 'react'



import axios from 'axios'

function Listprodut({refresh}) {

    const [data, setData] = useState([])




    const deleteHandl = async(id)=>{

      let res =await axios.delete(`http://localhost:4000/cat/${id}`)

      if (res.status) {
        fetchCat()
      }
      

    }
    const fetchCat = async()=>{

        try {

            const data = await axios.get('http://localhost:4000/cat')

            console.log(data.data.data,"wdwd");
            setData(data.data.data)
            
        } catch (error) {
            
        }

    }
    useEffect(()=>{

        
        fetchCat()
    },[refresh])
    return (
        
        <div className='section 2 ' >
            <div className='container'>
           
                { data.map((cat)=>{
                  
                        return(<> 
                         <h2>{cat._id}</h2>
                         <div className='row'>
                    
                                {cat.items.map((val)=>{
                                        return(<>
                                        
                                        <div className='col-12 col-md-3 p-3 '>
                            
                     
                            <div className='card ' style={{ backgroundColor: '#092024', width: '100%', height: '100%' }}>
                              
                                <div className='text-white text-center mt-2'>
                                    
                                    <h4>{val.sub}</h4>
                                </div>
                                <div className='p-3'>
    
                                    <img src={`http://localhost:4000/${val.image}`} style={{ width: '100%', height: '60%' }} />
                                    <div className='container mt-2 mb-3 text-center'>
                                        <button style={{ width: '60%', backgroundColor: '#196359' }} onClick={()=>{deleteHandl(val._id)}}>Delete</button>
    
                                    </div>
    
                                    
                                </div>
                            </div>

                            </div>
                                        </>)
                                })}

    
                        </div></>)
                    })}
                   
                  

              

            </div>

        </div>
    )
}

export default Listprodut
