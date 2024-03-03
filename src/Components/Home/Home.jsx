import React from 'react'
import me from '../../assets/images/pngtree-woman-avatar-with-smiling-face-picture-image_8225731.png'
export default function () {
    return (
        <>
            <section className='py-5'>
                <div className="home-content ">
                    <div className="text-center">
                        <img className='w-25 mb-3 mt-3' src={me} alt="my-img" />
                        <h2 className='fs-1'>START FRAMEWORK</h2>
                        <div>
                            <i className="fa-solid fa-grip-lines fs-5 p-2" />
                            <i className="fa-solid fa-star fs-5 p-2" />
                            <i className="fa-solid fa-grip-lines fs-5 p-2" />
                        </div>
                        <p className='fw-bold'>Graphic Artist - Web Designer - Illustrator</p></div>
                </div>
            </section>
        </>
    )
}
