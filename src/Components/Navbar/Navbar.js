import React from "react"
import { Link, NavLink } from "react-router-dom"
import "./Navbar.css"
export default function Navbar() {
  return (
    <>
      <nav className="nav">
        <div className="nav__content container">
          <div className="nav__top flex">
            <div className="nav__top-left">
              <p>Contact us directly at +33(0)1 40 41 14 14 (local time: 02:22)</p>
            </div>
            <div className="nav__top-right">
              <span className="lang">
                <select name="lang" id="">
                  <option value="eng">ENG</option>
                  <option value="fr">FR</option>
                  <option value="es">ES</option>
                </select>
              </span>
              <span className="bar"></span>
              <span className="cur">
                <select name="cur" id="">
                  <option value="usd">USD</option>
                  <option value="eur">EUR</option>
                </select>
              </span>
            </div>
          </div>

          <div className="nav__bottom flex">
            <ul className="nav__bottom-links">
              <li className="nav__bottom-item">
                <NavLink
                  activeStyle={{
                    color: "#adadad",
                  }}
                  to="/"
                >
                  HOME
                </NavLink>
              </li>
              <li className="nav__bottom-item">
                <NavLink
                  activeStyle={{
                    color: "#adadad",
                  }}
                  to="/about"
                >
                  ABOUT US
                </NavLink>
              </li>
              <li className="nav__bottom-item">
                <NavLink
                  activeStyle={{
                    color: "#adadad",
                  }}
                  to="/rooms"
                  exact
                >
                  OUR ROOMS
                </NavLink>
              </li>
            </ul>

            <div className="nav__bottom-logo">
              <Link to="/">
                <span className="text-center">
                  <h2>Monalisa</h2> <br /> <p>HOTEL & RESORT</p>
                </span>
              </Link>
            </div>

            <ul className="nav__bottom-links">
              <li className="nav__bottom-item">
                <NavLink
                  activeStyle={{
                    color: "#adadad",
                  }}
                  to="/reservation"
                >
                  RESERVATION
                </NavLink>
              </li>
              <li className="nav__bottom-item">
                <NavLink
                  activeStyle={{
                    color: "#adadad",
                  }}
                  to="/blog"
                >
                  BLOG
                </NavLink>
              </li>
              <li className="nav__bottom-item">
                <NavLink
                  activeStyle={{
                    color: "#adadad",
                  }}
                  to="/contact"
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
