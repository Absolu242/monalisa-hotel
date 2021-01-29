import React, { useState } from "react"
import Header from "../../Components/Header/Header"
import bkg from "../../data/images/rooms/room1.jpg"
import { Link } from "react-router-dom"
import { posts } from "../../data/monaPosts"
import "./Blog.css"
export default function Blog({ match }) {
  const path = match.path

  const [qty, setQty] = useState(2)

  const [filtered, setFilter] = useState("")

  const headerInfo = {
    title: "",
    text: "The Latest news",
    bkg: "",
    height: "40vh",
    path: path,
  }
  return (
    <div>
      <Header info={headerInfo} />

      <div className="blog">
        <div className="blog__content container">
          <div className="blog__content--filter text-center">
            <span className="filter">
              <button onClick={() => setFilter("")} className="btn ">
                All
              </button>
            </span>
            <span className="filter">
              <button onClick={() => setFilter("business")} className="btn ">
                Business
              </button>
            </span>
            <span className="filter">
              <button onClick={() => setFilter("entertaiment")} className="btn ">
                Entertaiment
              </button>
            </span>
            <span className="filter">
              <button onClick={() => setFilter("lifestyle")} className="btn ">
                LifeStyle
              </button>
            </span>
            <span className="filter">
              <button onClick={() => setFilter("technology")} className="btn ">
                Technology
              </button>
            </span>
            <span className="filter">
              <button onClick={() => setFilter("other")} className="btn ">
                Other
              </button>
            </span>
          </div>
          <div className="blog__content--posts grid grid-3">
            {posts.filter((itm, i) => (filtered !== "" ? itm.category === filtered : posts)).length === 0 && filtered !== "" ? (
              <div className="grey empty">
                <p>There is no content for this category</p>
              </div>
            ) : (
              posts
                .filter((itm, i) => (filtered !== "" ? itm.category === filtered : posts))
                .filter((item, i) => i < qty + 1)
                .map((post, i) => (
                  <div className="home__blog--item" key={i}>
                    <div className="img bg" style={{ backgroundImage: `url(${bkg})` }}></div>
                    <div className="info">
                      <p className="date">{post.date}</p>
                      <h3>{post.title}</h3>

                      <Link to={`/blog/${post.id}`}>
                        <button className="btn ">Continue</button>
                      </Link>
                    </div>
                  </div>
                ))
            )}
          </div>
          <div className="blog__button text-center">
            {posts.length <= qty + 1 ? (
              ""
            ) : (
              <button className="btn" onClick={() => setQty(qty + 3)}>
                Load more...
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
