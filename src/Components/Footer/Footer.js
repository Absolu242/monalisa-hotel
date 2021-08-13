import React from "react"
import { Link } from "react-router-dom"
import "./Footer.css"
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__content container">
          <div className="footer__content-top flex">
            <ul>
              <li>
                <Link to="/">Site Map</Link>
              </li>
              <li>
                <Link to="/">Term & Conditions</Link>
              </li>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/">Help</Link>
              </li>
              <li>
                <Link to="/">Affiliate</Link>
              </li>
            </ul>

            <ul>
              <li>
                <Link to="/">Our Location</Link>
              </li>
              <li>
                <Link to="/">Career</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>

            <ul>
              <li>
                <Link to="/">FAQs</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/">Car Blog</Link>
              </li>
              <li>
                <Link to="/">Location</Link>
              </li>
              <li>
                <Link to="/">Press</Link>
              </li>
            </ul>

            <form action="" className="form">
              <div className="form-input">
                <p>Sign up to get our newsletter</p>

                <div>
                  <span>
                    <button>
                      <i className="far fa-paper-plane"></i>
                    </button>
                  </span>
                  <input type="email" name="email" placeholder="Your email..." id="" />
                </div>
              </div>
            </form>
          </div>
          <div className="footer__content-bottom flex">
            <div className="footer__content-left">
              <span className="flex">
                <Link to="/">
                  <h2>Monalisa</h2>
                </Link>{" "}
                <p>&copy; 2021 Monalisa Hotel</p>
              </span>
            </div>
            <div className="footer__content-right">
              <span className="white">
                <a href="#" className="white">
                  <i className="fas fa-twitter    "></i>
                </a>
                <a href="#">
                  <i className="fa fab-facebook" />
                </a>
                <a href="#">
                  <i className="fa fab-google-plus" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
