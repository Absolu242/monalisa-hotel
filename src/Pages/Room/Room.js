import React, { useState } from "react"
import Header from "../../Components/Header/Header"
import { rooms } from "../../data/monaRooms"
import bkg from "../../data/images/rooms/room1.jpg"
import { Link } from "react-router-dom"
import "./Room.css"
export default function Room({ match }) {
  const path = match.path
  const [qty, setQty] = useState(1)
  const [image, setImage] = useState("")

  const headerInfo = {
    title: "",
    text: "Classic room",
    bkg: bkg,
    height: "65vh",
    path: path,
  }

  return (
    <div>
      <Header info={headerInfo} />
      <div className="singleRoom">
        <div className="singleRoom__content ">
          <section className="room__sectionOne container py-5">
            <div className="room__slide"></div>
            <div className="room__info text-center py-4">
              <p className="grey f-xs f-bold">
                START FROM <span className="red f-xl"> $39</span>
                <span className="black"> / Night</span>
              </p>
              <p className="grey f-bold f-xs">
                PASSENGER <span className="black">02</span>
              </p>
            </div>
          </section>

          <section className="room__sectionTwo">
            <div className="about__history ">
              <div className="about__history-top text-center">
                <div className="about__history-title py-4">
                  <h2>Description</h2>
                </div>
              </div>
            </div>
          </section>

          <section className="room__sectionThree  bg-white">
            <div className="about__history-title text-center py-2">
              <h2>Amenities</h2>
            </div>

            <div className="room__am--list container grey">
              <ul>
                <li>bonjour</li>
                <li>bonjour</li>
                <li>bonjour</li>
                <li>bonjour</li>
                <li>bonjour</li>
                <li>bonjour</li>
                <li>bonjour</li>
                <li>bonjour</li>
              </ul>
              <ul>
                <li>bonjour</li>
                <li>bonjour</li>
                <li>bonjour</li>
                <li>bonjour</li>
                <li>bonjour</li>
                <li>bonjour</li>
                <li>bonjour</li>
                <li>bonjour</li>
              </ul>
              <ul>
                <li>bonjour</li>
                <li>bonjour</li>
                <li>bonjour</li>
                <li>bonjour</li>
                <li>bonjour</li>
                <li>bonjour</li>
                <li>bonjour</li>
                <li>bonjour</li>
              </ul>
            </div>
          </section>

          <section className="room__sectionReview bg-white py-4">
            <div className="about__history-title text-center ">
              <h2>Reviews</h2>
            </div>
            <div className="room__sectionReview--content container ">
              <div className="review--item">
                <div className="img bg" style={{ backgroundImage: `url(${bkg})` }}></div>
                <div className="info">
                  <span className="name">
                    <p>
                      {" "}
                      <span className="black f-xs f-bold"> Class Room - </span> <span className="grey">3 review</span> <span className="grey">view on </span>
                      <span className="green f-bold"> TripAdvisor</span>
                    </p>
                  </span>

                  <p className="text f-xs grey2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, vel.</p>
                  <div className="date grey">June , 21th , 2016</div>
                </div>
              </div>
            </div>
          </section>

          <section className="room__book  text-center bg-white">
            <button className="btn  btn-green">BOOK NOW</button>
          </section>

          <section className="home__blog my-5">
            <div className="home__blog--content container">
              <div className="home__blog--top text-center">
                <h2 className=" py-3">Related Rooms</h2>
              </div>

              <div className="room__card--list container">
                {rooms
                  .filter((item, i) => i < 3)
                  .map((room, i) => {
                    const check = i % 2
                    return (
                      <div className="room__card--item">
                        <div className="room__left">
                          <div className="img bg" style={{ backgroundImage: `url(${room.main_img})` }}></div>
                          <div className="room__left-details">
                            <div className="room__left-title">
                              <Link to={`/rooms/${room.id}`}>
                                {room.name ? room.name : ""}
                                <span></span>
                                {room.type ? room.type : ""}
                              </Link>
                            </div>
                            <div className="room__left-review grey">{room.reviews.length} Review</div>
                            <div className="room__left-others">
                              <p>status :{room.status_count >= 5 ? <span className="green2"> Available </span> : <span className="red"> {`0${room.status_count} Rooms left`}</span>}</p>
                              <p>
                                Deposit : <span className="black"> {room.deposit === true ? `Required ${room.deposit_percent}%` : "Not Required"}</span>
                              </p>
                              <p>
                                Beds : <span className="black">{room.beds}</span>
                              </p>
                              <p>
                                Passenger : <span className="black">{room.passenger}</span>
                              </p>
                            </div>

                            <div className="room__left-more">
                              <Link to={`/rooms/${room.id}`}>
                                <button className="btn">Details </button>
                              </Link>

                              <div className="room__left-price">
                                <p className="grey ">
                                  Start at
                                  <span className="red f-sm f-bold"> ${room.price_start}</span>/Night
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="room__right bg" style={{ backgroundImage: `url(${room.main_img})` }} />
                      </div>
                    )
                  })}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
