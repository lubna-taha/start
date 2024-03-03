import React from 'react'
import style from './About.module.css'
export default function About() {
    return (
        <>
            <section className={style.about} >
                <div className="container  p-5">
                    <div className="text-dark text-center">
                        
                        <h2 className='fs-1'>ABOUT COMPONENT</h2>
                        <div>
                            <i className="fa-solid fa-grip-lines fs-5 p-2" />
                            <i className="fa-solid fa-star fs-5 p-2" />
                            <i className="fa-solid fa-grip-lines fs-5 p-2" />
                        </div>
                        <div className="">
                            <div className="row">
                                <div className="col-md-6 fw-bold">
                                    Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                                </div>
                                <div className="col-md-6  fw-bold" >
                                    Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
