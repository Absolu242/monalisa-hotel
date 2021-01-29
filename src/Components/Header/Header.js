import React from "react"

import "./Header.css"
export default function Header({ info }) {
  const { title, text, bkg, height, path } = info

  const image = {
    minHeight: `${height}`,
    backgroundImage: `  linear-gradient(to bottom, rgba(0, 0, 0, 0.472), rgba(0, 0, 0, 0.596)),url(${bkg})`,
  }

  const umg = {
    minHeight: `${height}`,
  }
  return (
    <>
      <div className="header h-full bg" style={bkg === "" ? umg : image}>
        <div className="header__content text-center ">
          {title !== "" ? (
            <div className="header__content-title">
              <p>{title}</p>
            </div>
          ) : (
            ""
          )}
          {bkg === "" ? (
            <div className="header__content-text black">
              <h1>{text}</h1>
            </div>
          ) : (
            <div className="header__content-text">
              <h1>{text}</h1>
            </div>
          )}
          {path === "" ? (
            ""
          ) : path !== "/" ? (
            <div className="header__content-title">
              <p className="grey">
                {" "}
                Home
                {bkg === "" ? <span className="black">{path}</span> : <span className="white">{path}</span>}
              </p>
            </div>
          ) : (
            <div>
              <p className="py-4 f-sm">A place to experience and enjoy life fully</p>
              <button className="btn btn-round f-xl white">
                {" "}
                <i className="fas fa-play-circle    "></i>{" "}
              </button>
            </div>
          )}
          {/* <span className="bar"></span> */}
        </div>
      </div>
    </>
  )
}
