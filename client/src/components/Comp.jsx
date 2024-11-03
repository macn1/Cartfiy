import React from 'react';

import img1 from '../../src/image/car3.png';
import img2 from '../../src/image/car1.jpg';
import img3 from '../../src/image/car2.jpg';

import './comp.css'

function Comp() {
  return (
    <div className='car' style={{ backgroundColor: '#e0dce8' }}>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div>
              <div 
                id="carouselExampleFade" 
                className="carousel slide carousel-fade" 
                data-bs-ride="carousel" 
                data-bs-interval="3000" // Automatically slide every 2 seconds
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img style={{ height: '200px' }} src={img1} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img style={{ height: '150px' }} src={img2} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img style={{ height: '150px' }} src={img3} className="d-block w-100" alt="..." />
                  </div>
                </div>

                <button 
                  className="carousel-control-prev" 
                  type="button" 
                  data-bs-target="#carouselExampleFade" 
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                
                <button 
                  className="carousel-control-next" 
                  type="button" 
                  data-bs-target="#carouselExampleFade" 
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comp;
