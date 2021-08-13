import React from "react"
import { Link } from "react-router-dom"
//components
import Header from "../../Components/Header/Header"

//assets
import bkg from "../../data/images/rooms/room1.jpg"

//data
import { posts } from "../../data/monaPosts"

//styles
import "./Post.css"

export default function Post({ match }) {
  //const path = match.path
  const postId = match.params.postId

  // let pathName = path.replace(/^\/|\/$/g, "")

  const postArr = posts.filter((pos) => pos.id === postId)

  const post = postArr[0]

  const headerInfo = {
    title: "",
    text: "",
    bkg: post.image,
    height: "90vh",
    path: "",
  }

  return (
    <div>
      <Header info={headerInfo} />
      <div className='post'>
        <div className='post__container'>
          <div className='post__content'>
            <div className='post__title'>
              <h1>{post.title}</h1>
              <span>
                <p>
                  {" "}
                  <small className='grey'>Home > Blog > </small>
                  {post.title}
                </p>
              </span>
            </div>
            <div className='post__info'>
              <div className='post__author'>
                <img src={post.image} alt='author' />
                <span>
                  <p className='author__name'>{post.author.name}</p>
                  <p className='grey'>{post.author.position}</p>
                </span>
              </div>
              <div className='post__author'>
                <span>
                  <p className='author__name'>Date</p>
                  <p className='grey'>{post.date}</p>
                </span>
              </div>
              <div className='post__author'>
                <span>
                  <p className='author__name'>Category</p>
                  <p className='grey'>{post.category}</p>
                </span>
              </div>
              <div className='post__author'>
                <span>
                  <p className='author__name'>Tags</p>
                  <p className='grey'>{post.tags}</p>
                </span>
              </div>
            </div>
            <div className='post__text'>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
                officiis quia dicta minus facere, tempore aut voluptas obcaecati
                reprehenderit, eaque reiciendis vero sint voluptatem deleniti
                consectetur odio! Architecto, distinctio veniam ipsam ea soluta
                recusandae magni voluptas odit perferendis aut quae,
                perspiciatis natus eaque impedit id provident velit fuga!
                Dolore, omnis reiciendis exercitationem unde possimus asperiores
                natus quod aliquam assumenda maiores quibusdam tempora quia
                dolor? Consequuntur nam ratione ipsam suscipit vero facilis
                totam, placeat odit corporis dolorem! Ex perferendis vel fugiat
                soluta dolorum nihil odit et voluptatibus fuga iste? Est ad
                porro placeat alias cumque quo nam neque blanditiis sed qui?
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
                officiis quia dicta minus facere, tempore aut voluptas obcaecati
                reprehenderit, eaque reiciendis vero sint voluptatem deleniti
                consectetur odio! Architecto, distinctio veniam ipsam ea soluta
                recusandae magni voluptas odit perferendis aut quae,
                perspiciatis natus eaque impedit id provident velit fuga!
                Dolore, omnis reiciendis exercitationem unde possimus asperiores
                natus quod aliquam assumenda maiores quibusdam tempora quia
                dolor? Consequuntur nam ratione ipsam suscipit vero facilis
                totam, placeat odit corporis dolorem! Ex perferendis vel fugiat
                soluta dolorum nihil odit et voluptatibus fuga iste? Est ad
                porro placeat alias cumque quo nam neque blanditiis sed qui?
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
                officiis quia dicta minus facere, tempore aut voluptas obcaecati
                reprehenderit, eaque reiciendis vero sint voluptatem deleniti
                consectetur odio! Architecto, distinctio veniam ipsam ea soluta
                recusandae magni voluptas odit perferendis aut quae,
                perspiciatis natus eaque impedit id provident velit fuga!
                Dolore, omnis reiciendis exercitationem unde possimus asperiores
                natus quod aliquam assumenda maiores quibusdam tempora quia
                dolor? Consequuntur nam ratione ipsam suscipit vero facilis
                totam, placeat odit corporis dolorem! Ex perferendis vel fugiat
                soluta dolorum nihil odit et voluptatibus fuga iste? Est ad
                porro placeat alias cumque quo nam neque blanditiis sed qui?
              </p>
            </div>

            <div className='post__share'>
              <span className='f-bold  f-sm'>Shares : </span>
              <span className='grey'>
                <a href='#'>
                  {" "}
                  <i className='fab fa-twitter    '></i>
                </a>
                <a href='#'>
                  {" "}
                  <i className='fab fa-facebook-f    '></i>
                </a>
                <a href='#'>
                  {" "}
                  <i className='fab fa-google-plus    '></i>
                </a>
                <a href='#'>
                  {" "}
                  <i className='fab fa-instagram    '></i>
                </a>
              </span>
            </div>

            <div className='post__related'>
              <div className='post__related--title'>
                <h2>Related Posts</h2>
              </div>

              <div className='post__related--content grid grid-3'>
                {posts
                  .filter((item, i) => i < 3)
                  .map((post, i) => (
                    <div className='home__blog--item' key={i}>
                      <div
                        className='img bg'
                        style={{ backgroundImage: `url(${post.image})` }}
                      ></div>
                      <div className='info'>
                        <p className='date'>{post.date}</p>

                        <Link to={`/blog/${post.id}`}>
                          <h3>{post.title}</h3>
                          <button className='btn '>Continue</button>
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div className='post__related'>
              <div className='post__related--title'>
                <h2>02 Comments</h2>
              </div>

              <div className='post__related--content comment'>
                <div className='review--item'>
                  <div className='img-client '>
                    <img src={bkg} alt='client' srcset='' />
                  </div>
                  <div className='info'>
                    <span className='name'>
                      <p>
                        {" "}
                        <span className='black f-xs f-bold'>
                          {" "}
                          Daniel Vandaft -
                        </span>{" "}
                        <span className='grey'></span>{" "}
                        <span className='grey'></span>
                        <span className='green f-bold'> Reply</span>
                      </p>
                    </span>

                    <p className='text f-xs grey2 py-1'>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Recusandae, vel.
                    </p>
                    <div className='date grey'>June , 21th , 2016</div>
                  </div>
                </div>

                <div className='review--item'>
                  <div className='img-client '>
                    <img src={bkg} alt='client' srcset='' />
                  </div>
                  <div className='info'>
                    <span className='name'>
                      <p>
                        {" "}
                        <span className='black f-xs f-bold'>
                          {" "}
                          Daniel Vandaft -
                        </span>{" "}
                        <span className='grey'></span>{" "}
                        <span className='grey'></span>
                        <span className='green f-bold'> Reply</span>
                      </p>
                    </span>

                    <p className='text f-xs grey2 py-1'>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Recusandae, vel.
                    </p>
                    <div className='date grey'>June , 21th , 2016</div>
                  </div>
                </div>
              </div>
            </div>

            <div className='post__related'>
              <div className='post__related--title'>
                <h2>Leave A Comment</h2>
              </div>

              <div className='post__related--content comment__form'>
                <div className='contact__form'>
                  <form action='' className='form'>
                    <div className='form__content'>
                      <div className='form-top'>
                        <div className='form-input'>
                          <input type='text' placeholder='Your Name' />
                        </div>
                        <div className='form-input'>
                          <input type='email' placeholder='Email Address' />
                        </div>
                        <div className='form-input last'>
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
                      </div>
                    </div>
                    <div className='confzone '>
                      <div className='confzone__content'>
                        <div className='confzone--btn'>
                          <button className='btn f-bold btn-green'>
                            SUBMIT COMMENT
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
