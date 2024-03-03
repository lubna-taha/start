import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className=' bg-dark text-center text-white '>
        <div className="container ">
          <div className="row py-5 ">
            <div className="col-md-4 ">
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div className="col-md-4  ">
              <h3>AROUND THE WEB</h3>
              <div _ngcontent-xcb-c21="" class="icons fs-4">
                <i _ngcontent-xcb-c21="" class="fa-brands fa-facebook mx-1 icon"></i>
                <i _ngcontent-xcb-c21="" class="fa-brands fa-twitter mx-1 icon"></i>
                <i _ngcontent-xcb-c21="" class="fa-brands fa-linkedin-in mx-1 icon"></i>
                <i _ngcontent-xcb-c21="" class="fa-solid fa-globe mx-1 icon"></i>
              </div>

            </div>
            <div className="col-md-4">
              <h3>ABOUT FREELANCER</h3>
              <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p> 
            </div>

          </div>

        </div>
        <p className="bg-secondary text-black pt-3">Copyright © Your Website 2021</p>

      </footer>

    </>
  )
}
