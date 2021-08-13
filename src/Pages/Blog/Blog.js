import React, { useState } from "react"

//components
import Header from "../../Components/Header/Header"
import PostCard from "../../Components/PostCard/PostCard"

//assets
import bkg from "../../data/images/rooms/room1.jpg"

//data
import { posts } from "../../data/monaPosts"

//styles
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

      <div className='blog'>
        <div className='blog__content container'>
          <div className='blog__content--filter text-center'>
            <span className='filter'>
              <button
                onClick={() => setFilter("")}
                className={filtered === "" ? "btn btn-active" : "btn "}
              >
                All
              </button>
            </span>
            <span className='filter'>
              <button
                onClick={() => setFilter("business")}
                className={filtered === "business" ? "btn btn-active" : "btn "}
              >
                Business
              </button>
            </span>
            <span className='filter'>
              <button
                onClick={() => setFilter("entertaiment")}
                className={
                  filtered === "entertaiment" ? "btn btn-active" : "btn "
                }
              >
                Entertaiment
              </button>
            </span>
            <span className='filter'>
              <button
                onClick={() => setFilter("lifestyle")}
                className={filtered === "lifestyle" ? "btn btn-active" : "btn "}
              >
                LifeStyle
              </button>
            </span>
            <span className='filter'>
              <button
                onClick={() => setFilter("technology")}
                className={
                  filtered === "technology" ? "btn btn-active" : "btn "
                }
              >
                Technology
              </button>
            </span>
            <span className='filter'>
              <button
                onClick={() => setFilter("other")}
                className={filtered === "other" ? "btn btn-active" : "btn "}
              >
                Other
              </button>
            </span>
          </div>
          <div className='blog__content--posts grid grid-3'>
            {posts.filter((itm, i) =>
              filtered !== "" ? itm.category === filtered : posts
            ).length === 0 && filtered !== "" ? (
              <div className='grey empty'>
                <p>There is no content for this category</p>
              </div>
            ) : (
              posts
                .filter((itm, i) =>
                  filtered !== "" ? itm.category === filtered : posts
                )
                .filter((item, i) => i < qty + 1)
                .map((post, i) => (
                  <PostCard post={post} img={post.image} key={i} />
                ))
            )}
          </div>
          <div className='blog__button text-center'>
            {posts.length <= qty + 1 ? (
              ""
            ) : (
              <button className='btn' onClick={() => setQty(qty + 3)}>
                Load more...
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
