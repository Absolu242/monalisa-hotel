import React from "react"

//components
import Header from "../../Components/Header/Header"

//assets
import logo from "../../data/images/tripAdvisor.png"
import bkg from "../../data/images/headers/header4.jpg"

//styles
import "./About.css"

export default function About({ match }) {
  const path = match.path

  const headerInfo = {
    title: "ABOUT US",
    text: "A best place to enjoy your life",
    bkg: bkg,
    height: "100vh",
    path: path,
  }

  return (
    <>
      <Header info={headerInfo} />
      <div className='about h-full'>
        <div className='about__content '>
          <div className='about__history '>
            <div className='about__history-top text-center'>
              <div className='about__history-title'>
                <h2>Since 1991</h2>
                <span>~~~~~</span>
              </div>
              <div className='about__history-text text-center'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  id provident eaque ullam velit itaque sapiente eius ratione,
                  maxime porro, dolor architecto aperiam delectus qui molestias
                  neque nobis debitis consequuntur? Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Facilis hic at quidem magnam,
                  aspernatur ratione tenetur facere. Assumenda debitis earum
                  odio numquam ut, laboriosam eaque a at ex optio laborum sequi
                  rem, hic amet exercitationem, nostrum neque temporibus
                  nesciunt quos placeat aperiam! Tempore praesentium expedita
                  accusantium laborum deleniti maxime numquam illo iste, itaque
                  saepe voluptate explicabo ipsam accusamus sit! Amet!
                </p>
              </div>
            </div>
            <div className='about__history-bottom text-center'>
              <div className='about__history-fact'>
                <p>Numbers Fact</p>
              </div>
              <div className='about__history-numbers'>
                <div className='numbers_item text-center'>
                  <span>320</span>
                  <p>Clients</p>
                </div>
                <div className='numbers_item text-center'>
                  <span>24</span>
                  <p>Rooms</p>
                </div>
                <div className='numbers_item text-center'>
                  <span>50</span>
                  <p>Staffs</p>
                </div>
                <div className='numbers_item text-center'>
                  <span>12</span>
                  <p>Awards</p>
                </div>
              </div>
            </div>
          </div>
          <div className='about__testimonial container'>
            <div className='testimonial__content  text-center'>
              <div className='testimonial__title'>
                <p>TESTIMONIAL</p>
              </div>
              <div className='testimonial__heading'>
                <p>What Client Say</p>
              </div>

              <div className='testimonial__text text-center'>
                <p>
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo officiis accusamus, excepturi nemo perspiciatis iste
                  magnam consequuntur rerum nesciunt tempore provident quas
                  minima vel deleniti cumque eveniet sint voluptatem id. "
                </p>
              </div>

              <div className='testimonial__stars'>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
              </div>
              <div className='testimonial__credit'>
                <div className='testimonial__logo'>
                  <img src={logo} alt='' />
                </div>
                <div className='testimonial__client'>
                  <p>
                    <strong>Adam Levine -</strong> <span>Review from</span>{" "}
                    TripAdvisor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
