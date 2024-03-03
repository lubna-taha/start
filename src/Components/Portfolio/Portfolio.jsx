import React from 'react'
import img1 from '../../assets/images/poert1 (1).png'
import img2 from '../../assets/images/port2.png'
import img3 from '../../assets/images/port3.png'
import './Portfolio.module.css'

export default function

    () {
    return (
        <>
            <div className="container   p-5">
                <div className="text-center ">
                    <h2 className='fs-1 '>PORTFOLIO COMPONENT</h2>
                    <div>
                        <i className="fa-solid fa-grip-lines fs-5 p-2" />
                        <i className="fa-solid fa-star fs-5 p-2" />
                        <i className="fa-solid fa-grip-lines fs-5 p-2" />
                    </div>
                </div>

                <div className="imgs mt-3">
                    <div className="row gy-4">
                        <div className="col-md-4 content position-relative overflow-hidden  ">
                            <img className='w-100 rounded-4 ' src={img1} alt="" />
                            <div className="layer rounded-4  ">
                           <div className="add  ">
                           <i class="fa-solid fa-plus"></i>
                           </div>
                            </div>
                            
                        </div>
                        <div className="col-md-4 content position-relative overflow-hidden">
                            <img className='w-100 rounded-4' src={img2} alt="" />
                            <div className="layer rounded-4 ">
                            <div className="add  ">
                           <i class="fa-solid fa-plus"></i>
                           </div>
                            </div>
                        </div>
                        <div className="col-md-4 content position-relative overflow-hidden">
                            <img className='w-100 rounded-4' src={img3} alt="" />
                            <div className="layer rounded-4 ">
                            <div className="add ">
                           <i class="fa-solid fa-plus"></i>
                           </div>
                            </div>
                        </div>
                        <div className="col-md-4 content position-relative overflow-hidden">
                            <img className='w-100 rounded-4' src={img1} alt="" />
                            <div className="layer rounded-4 ">
                            <div className="add ">
                           <i class="fa-solid fa-plus"></i>
                           </div>
                            </div>
                        </div>
                        <div className="col-md-4 content position-relative overflow-hidden">
                            <img className='w-100 rounded-4' src={img2} alt="" />
                            <div className="layer rounded-4 ">
                            <div className="add ">
                           <i class="fa-solid fa-plus"></i>
                           </div>
                            </div>
                        </div>
                        <div className="col-md-4 content position-relative overflow-hidden">
                            <img className='w-100 rounded-4' src={img3} alt="" />
                            <div className="layer rounded-4 ">
                            <div className="add  ">
                           <i class="fa-solid fa-plus"></i>
                           </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
