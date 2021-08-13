import React from "react"

//components
import Header from "../../Components/Header/Header"

//assets
import bkg from "../../data/images/headers/header2.jpg"
import map from "../../data/images/map.jpg"

//styles
import "./Contact.css"

export default function Contact({ match }) {
  const path = match.path
  console.log(path)

  const headerInfo = {
    title: "",
    text: "Contact us",
    bkg: bkg,
    height: "50vh",
    path: path,
  }

  return (
    <>
      <Header info={headerInfo} />
      <div className='contact'>
        <div className='contact__content'>
          <div className='contact__top container'>
            <div className='contact__details'>
              <div className='contact-title'>
                <h2>Contact details</h2>
                <p>
                  if you need any help please contact us or send us an email or
                  go to our forum <br />
                  we are sure that you can receive our reply as soon as possible
                </p>
              </div>

              <div className='contact__details-info'>
                <div className='contact__details-item'>
                  <span className='icon'>
                    <i className='fas fa-mobile'></i>
                  </span>
                  <p className='title'>Phone</p>
                  <span className='details'>
                    <p>phone 01: (0091) 8547 632521</p>
                    <p>phone 02: (0091) 8547 632521</p>
                  </span>
                </div>

                <div className='contact__details-item'>
                  <span className='icon'>
                    <i className='fas fa-map-marker-alt'></i>
                  </span>
                  <p className='title'>Address</p>
                  <span className='details'>
                    <p>
                      69 Halsey St, New York, Ny 10002 <br /> United States.
                    </p>
                  </span>
                </div>
                <div className='contact__details-item'>
                  <span className='icon'>
                    <i className='fas fa-envelope'></i>
                  </span>
                  <p className='title'>Email</p>
                  <span className='details'>
                    <p>support@monalisahotel.com</p>
                    <p>hello@monalisahotel.com</p>
                  </span>
                </div>
              </div>
            </div>

            <div className='contact__form'>
              <form action='' className='form'>
                <div className='contact-title'>
                  <h2>Get in touch with us</h2>
                  <p>
                    if you have any question , please don't hesitate to send us
                    a message
                  </p>
                </div>

                <div className='form__content'>
                  <div className='form-top'>
                    <div className='form-input'>
                      <input type='text' placeholder='Enter Your name...' />
                    </div>
                    <div className='form-input'>
                      <input type='email' placeholder='Enter Your email...' />
                    </div>
                    <div className='form-input'>
                      <input type='text' placeholder='Subject (Optional)' />
                    </div>
                  </div>

                  <div className='form-bottom'>
                    <div className='form-input'>
                      <textarea
                        type='text'
                        placeholder='Here goes your message'
                      />
                    </div>

                    <button type='submit'>SEND MESSAGE</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div
            className='contact__map  h-5 bg'
            style={{ backgroundImage: ` url(${map})` }}
          ></div>
        </div>
      </div>
    </>
  )
}
