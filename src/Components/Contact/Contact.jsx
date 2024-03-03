import React from 'react'
import styling from './Contact.module.css'
export default function Contact() {
  return (
    <>
      <section className={styling.cotact}>
        <div className="">
          <div className="container p-5">
            <div className="text-center ">
              <h2 className='fs-1'>CONATCT SECTION</h2>
              <div>
                <i className="fa-solid fa-grip-lines fs-5 p-2" />
                <i className="fa-solid fa-star fs-5 p-2" />
                <i className="fa-solid fa-grip-lines fs-5 p-2" />
              </div>
            </div>
            <div className="form mt-3 w-50 mx-auto">

              <div className="input-group mb-3">

                <input type="text" className="form-control" placeholder="UserName" aria-label="Username" aria-describedby="basic-addon1" />
              </div>
              <div className="input-group mb-3">

                <input type="text" className="form-control" placeholder="UserAge" aria-label="Username" aria-describedby="basic-addon1" />
              </div>
              <div className="input-group mb-3">

                <input type="text" className="form-control" placeholder="UserEmail" aria-label="Username" aria-describedby="basic-addon1" />
              </div>
              <div className="input-group mb-3">

                <input type="text" className="form-control" placeholder="UserPassword" aria-label="Username" aria-describedby="basic-addon1" />
              </div>
              <button type="button" class="btn btn-danger mt-3">Send Message</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
