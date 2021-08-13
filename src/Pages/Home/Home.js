import React, { useState } from "react"

//componets
import Header from "../../Components/Header/Header"
import PostCard from "../../Components/PostCard/PostCard"

//assets
import bkg from "../../data/images/headers/header1.jpg"

//data
import { posts } from "../../data/monaPosts"
import { rooms } from "../../data/monaRooms"

//styles
import "./Home.css"

export default function Home({ match }) {
  const path = match.path

  const defaultImg = rooms.length !== 0 && rooms[0]

  const [image, setImage] = useState(defaultImg.main_img)

  const headerInfo = {
    title: "WELCOME TO",
    text: "Monalisa Hotel",
    bkg: bkg,
    height: "90vh",
    path: path,
  }

  return (
    <div>
      <Header info={headerInfo} />
      <div className='home'>
        <div className='home__content'>
          <section className='home__about'>
            <div className='home__about--content'>
              <div className='home__about--title text-center'>
                <p className='grey'>LITTlE ABOUT US</p>
              </div>
              <div className='home__about--main'>
                <div className='home__about--phone'>
                  <p>TEL: (03) 54813777</p>
                </div>

                <div className='home__about--middle'>
                  <div
                    className='img bg'
                    style={{ backgroundImage: `url(${bkg})` }}
                  ></div>
                  <div className='text'>
                    <h1>A best place to enjoy your life fully</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maiores, recusandae pariatur magni ab et culpa maxime
                      error quo expedita est aspernatur quaerat repudiandae? Est
                      iste dolor commodi at ea sunt! Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Nulla praesentium assumenda
                      ex harum. Iusto neque, eveniet dignissimos asperiores ex
                      voluptate.
                    </p>

                    <span>
                      <p className='grey'>
                        <span className='f-bold black'>Ethan Hunt </span>-
                        Director at Monalisa
                      </p>
                    </span>
                  </div>
                </div>

                <div className='home__about--mail'>
                  <p>INFO@MONALISA.CO</p>
                </div>
              </div>
            </div>
          </section>
          <section className='home__show'>
            <div className='home__show--content'>
              <div className='left'>
                <div className='left__content'>
                  <div className='left__content--top'>
                    <p className='grey'>DISCOVER OUR ROOMS</p>
                    <h1>Luxury interior</h1>
                  </div>

                  <div className='left__content--list'>
                    {rooms.map((room, i) => (
                      <div
                        className='left__content--item'
                        key={i}
                        onClick={() => setImage(room.main_img)}
                      >
                        <div
                          className='img bg'
                          style={{ backgroundImage: `url(${room.main_img})` }}
                        ></div>
                        <div className='info'>
                          <h3>{room.type}</h3>
                          <p className='grey'>
                            Starting from{" "}
                            <span className='black'>
                              {" "}
                              <span className='red'>${room.price_start}</span>
                              /Night
                            </span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className='right'>
                <div className='right__content '>
                  {image === "" ? (
                    <div className='info'>
                      {" "}
                      <p className='text-center  '>
                        Click on a room to see it's image here
                      </p>
                    </div>
                  ) : (
                    <div
                      className='img bg'
                      style={{ backgroundImage: `url(${image})` }}
                    ></div>
                  )}
                </div>
              </div>
            </div>
          </section>
          <section className='home__blog'>
            <div className='home__blog--content container'>
              <div className='home__blog--top text-center'>
                <p className='grey'>EXPLORE</p>
                <h2>Latest from our blog</h2>
              </div>

              <div className='home__blog--list container'>
                {posts
                  .filter((item, i) => i < 3)
                  .map((post, i) => (
                    <PostCard post={post} img={post.image} key={i} />
                  ))}{" "}
              </div>
            </div>
          </section>

          <section className='home__contact'>
            <div className='home__contact--content'>
              <div className='left'>
                <div className='left__content'>
                  <div
                    className='img bg'
                    style={{ backgroundImage: `url(${bkg})` }}
                  ></div>
                </div>
              </div>

              <div className='right'>
                <div className='right__content'>
                  <div className='right__content--top'>
                    <p className='grey'>INFORMATION</p>
                    <h2>Contact us</h2>
                  </div>

                  <div className='right__content--info'>
                    <h2>
                      Melbourne, <span className='grey'>Australia</span>
                    </h2>
                    <p className='address grey'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eaque, deserunt?
                    </p>
                    <p className='email'>
                      <span className='black f-bold'>Email : </span>{" "}
                      <span className='grey'>info@monalisahotel.com</span>
                    </p>
                    <span className='call'>
                      <p className='grey'>Call directly :</p>
                      <h2 className='f-bold f-md'>+99 (0) 344 956 4050</h2>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
