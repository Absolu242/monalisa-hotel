import React, { useState } from "react"
import Header from "../../Components/Header/Header"
import "./Reservation.css"
import bkg from "../../data/images/headers/header5.jpg"
import DatePick from "../../Components/Date/DatePick"

export default function Reservation({ match }) {
  const path = match.path

  const [startDay, setStartDay] = useState("")
  const [startMonth, setStartMonth] = useState("")

  const [endDay, setEndDay] = useState("")
  const [endMonth, setEndMonth] = useState("")

  // const [startDate, setStartDate] = useState("")
  // const [endDate, setEndDate] = useState("")

  const headerInfo = {
    title: "",
    text: "Reservation",
    bkg: "",
    height: "60vh",
    path: path,
  }

  const months = ["Jan", "Fev", "Mar", "Apr", "Mai", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]

  return (
    <div>
      <Header info={headerInfo} />
      <div className="reservation container">
        <div className="reservation__content">
          <div className="reservation__text text-center">
            <h2>Make you reservation</h2>
          </div>

          <div className="reservation__form">
            <div className="form__content">
              <form action="" className="reserv-form">
                <div className="reserv-input bar">
                  <span className="field-name">CHECK-IN</span>
                  <div className="field-info">
                    {" "}
                    <span className="day">{startDay}</span>
                    {months
                      .filter((m, i) => i === startMonth - 1)
                      .map((n) => (
                        <span className="month">/ {n}</span>
                      ))}
                  </div>
                </div>
                <div className="reserv-input bar">
                  <span className="field-name">CHECK-OUT</span>
                  <div className="field-info">
                    {" "}
                    <span className="day">{endDay}</span>
                    {months
                      .filter((m, i) => i === endMonth - 1)
                      .map((n) => (
                        <span className="month">/ {n}</span>
                      ))}
                  </div>
                </div>
                <div className="reserv-input">
                  <span className="field-name">GUESTS</span>
                  <div className="field-info">
                    {" "}
                    <span className="day">3</span>
                  </div>
                </div>
                <div className="reserv-input submit">
                  <span>
                    {" "}
                    <p className="field-message">Have a promotion code?</p>
                    <button className="btn btn-green" type="submit">
                      CHECK AVAILABILITY
                    </button>
                  </span>
                </div>
              </form>
            </div>
            <DatePick startMth={setStartMonth} startDy={setStartDay} endDay={setEndDay} endMonth={setEndMonth} />
          </div>

          <div className="reservation__rooms">
            <div className="reservation__text text-center py-4">
              <h2>Rooms available for you</h2>
            </div>
            <div className="reservation__rooms--content">
              <div className="av_room">
                <div className="av_room__content">
                  <div className="av_room--left">
                    <div className="img bg" style={{ backgroundImage: `url(${bkg})` }}></div>
                    <div className="info-1">
                      <div className="name f-bold">Class Room</div>
                      <div className="review grey">3 reviews</div>

                      <div className="status">
                        {" "}
                        Status : <span className="green f-bold">Available</span>{" "}
                      </div>
                      <div className="status">
                        {" "}
                        Deposit : <span className="black f-bold">Not Required</span>{" "}
                      </div>
                      <div className="status">
                        {" "}
                        Beds : <span className="black f-bold">01</span>{" "}
                      </div>
                      <div className="status">
                        {" "}
                        Passenger : <span className="black f-bold">02</span>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="av_room--right">
                    <div className="info-2">
                      <div>
                        <input type="checkbox" name="night" id="no-break" />{" "}
                        <p className="start">
                          {" "}
                          start from{" "}
                          <span className="black">
                            <span className="red"> $39</span>/Night
                          </span>
                        </p>
                      </div>

                      <div>
                        <input type="checkbox" name="night" id="break" />{" "}
                        <p className="includes">
                          {" "}
                          Includes breakfast
                          <span className="black">
                            <span className="red"> $49</span>/Night
                          </span>
                        </p>
                      </div>

                      <div>
                        <span className="grey">Rooms</span>
                        <select name="number" id="room-num">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>

                        <button className="btn  btn-green ">Selected</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="reservation__booking">
            <div className="reservation__text text-center py-4">
              <h2>Your booking overview</h2>
            </div>
            <div className="reservation__booking--content">
              <div className="bo-dates text-center">
                <div className="grey">
                  <p>
                    Arival date: <span className="black">June,26th,2019</span>
                  </p>{" "}
                  <p>|</p>{" "}
                  <p>
                    Departure date: <span className="black">June,29th,2019</span>
                  </p>{" "}
                </div>
              </div>

              <div className="bo-room__list">
                <div className="bo-room">
                  <div className="bo-room--left">
                    <div className="img bkg" style={{ backgroundImage: `url(${bkg})` }} />
                    <div className="info-3">
                      <span className="name">
                        Class Room - <span className="grey">3 review</span>
                      </span>
                      <div className="choices">
                        <div>
                          <div className="grey">
                            Includes : <span className="black">Includes Breakfast</span>
                          </div>
                          <div className="grey">
                            Deposit : <span className="black">Not Required</span>
                          </div>
                        </div>
                        <div>
                          <div className="grey">
                            Rooms : <span className="black">01</span>
                          </div>
                          <span className="grey">
                            Paasenger : <span className="black">02</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bo-room--right text-center">
                    <p className="f-bold">Price</p>
                    <p className="f-bold red">$147</p>
                  </div>
                </div>
              </div>

              <div className="bo-room__pricing">
                <span>
                  <p className="f-bold f-sm">Coupon Code</p>
                </span>
                <span>
                  <form className="f-bold">
                    <input type="text" placeholder="Enter your coupon code" name="coupon" id="" /> <button type="submit">APPLY</button>
                  </form>
                </span>
                <span className="total text-center">
                  <p className=" f-bold">Total Price</p> <p className="grey">(Includes 10% Tax)</p>{" "}
                </span>
                <span className="bo-price">
                  <p className="f-bold red">$339.9</p>
                </span>
              </div>
            </div>
          </div>

          <div className="reservation__text text-center py-4">
            <h2>Confirm your reservation</h2>
          </div>
          <div className="reservation__confirm my-4">
            <div className="reservation__confirm--content bkg-white ">
              <div className="contact__form">
                <form action="" className="form">
                  <div className="form__content">
                    <div className="form-top">
                      <div className="form-input">
                        <input type="text" placeholder="First Name" />
                      </div>
                      <div className="form-input">
                        <input type="text" placeholder="Last Name" />
                      </div>
                      <div className="form-input">
                        <input type="email" placeholder="Email Address" />
                      </div>
                    </div>
                    <div className="form-top py-5">
                      <div className="form-input">
                        <input type="text" placeholder="Phone Number" />
                      </div>
                      <div className="form-input">
                        <input type="text" placeholder="Country" />
                      </div>
                      <div className="form-input">
                        <input type="text" placeholder="Zip code" />
                      </div>
                    </div>

                    <div className="form-bottom">
                      <div className="form-input">
                        <textarea type="text" placeholder="Here goes your message" />
                      </div>
                    </div>
                  </div>
                  <div className="confzone ">
                    <div className="confzone__content">
                      <div className="confzone--pay">
                        <div>
                          <input type="checkbox" name="pay" id="" />
                          Payement directly at hotel{" "}
                        </div>
                        <div>
                          <input type="checkbox" name="pay" id="" />
                          Payement online{" "}
                        </div>
                      </div>
                      <div className="confzone--btn">
                        <button className="btn f-bold btn-green">CONFIRMATION</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  )
}
