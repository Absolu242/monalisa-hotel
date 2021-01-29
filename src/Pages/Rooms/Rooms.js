import React, { useState } from "react"
import Header from "../../Components/Header/Header"
import logo from "../../data/images/tripAdvisor.png"
import bkg from "../../data/images/headers/header5.jpg"
import "./Rooms.css"
import { Link } from "react-router-dom"
import { rooms } from "../../data/monaRooms"

export default function Rooms({ match }) {
  const path = match.path

  const [qty, setQty] = useState(1)

  const headerInfo = {
    title: "",
    text: "Our rooms",
    bkg: bkg,
    height: "70vh",
    path: path,
  }

  return (
    <div>
      <Header info={headerInfo} />
      <div className="rooms h-full">
        <div className="rooms__content">
          <div className="rooms__list">
            {rooms
              .filter((item, i) => i < qty + 1)
              .map((room, i) => {
                const check = i % 2
                return (
                  <div key={i} className={check === 0 ? "rooms__item" : "rooms__item reverse"}>
                    <div className={check === 0 ? "room__left" : "room__left reverse"}>
                      <div className="room__left-type">
                        <div className="type-content">
                          {" "}
                          <p>{room.type}</p>
                          <div className="index">{room.id}</div>
                        </div>
                      </div>

                      <div className="room__left-details">
                        <div className="room__left-review">{room.reviews.length} Review</div>
                        <div className="room__left-title">
                          <Link to={`/rooms/${room.id}`}>
                            {room.name ? room.name : ""} <br />
                            {room.type ? room.type : ""}
                          </Link>
                        </div>
                        <div className="room__left-price">
                          <span> Start from</span>
                          <p>
                            <span>${room.price_start}</span>/Night
                          </p>
                        </div>
                        <div className="room__left-desc">
                          <p>{room.desc_excerpt}</p>
                        </div>
                        <div className="room__left-others">
                          <p>status :{room.status_count >= 5 ? <span className="green"> Available </span> : <span className="red"> {`0${room.status_count} Rooms left`}</span>}</p>
                          <p>
                            Deposit : <span> {room.deposit === true ? `Required ${room.deposit_percent}%` : "Not Required"}</span>
                          </p>
                          <p>
                            Beds : <span>{room.beds}</span>
                          </p>
                          <p>
                            Passenger : <span>{room.passenger}</span>
                          </p>
                        </div>

                        <div className="room__left-more">
                          <Link to={`/rooms/${room.id}`}>
                            <button>View Detail ></button>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="room__right bg" style={{ backgroundImage: `url(${room.main_img})` }} />
                  </div>
                )
              })}
          </div>

          <div className="rooms__button text-center">{rooms.length <= qty ? "" : <button onClick={() => setQty(qty + 3)}>SEE MORE ROOMS</button>}</div>
        </div>
      </div>
    </div>
  )
}
