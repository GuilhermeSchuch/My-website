// CSS
import "./Blog.css";

// Data
import { posts } from "../../data";

// Hooks
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { BlurhashCanvas } from "react-blurhash";

// Components
import { TinyFooter } from "@components/index";

const Blog = () => {
  const [active, setActive] = useState("all-posts");
  const [imageLoaded, setImageLoaded] = useState(false);

  const navigate = useNavigate();

  const handleSubHeader = (menu: string) => {
    setActive(menu);
  }

  return (
    <>
      <Helmet>
        <title>Guilherme Schuch</title>
        <meta name="description" content="You will find all kind of things here, how to fix common errors in the dev/game community, install mods for your favourite games and more." />
        <meta name="keywords" content="Guilherme Schuch, Schuch, Blog, Jada, Mods, Errors, Error, How to fix" />
      </Helmet>

      <div id="blog" className="blog-container">
        <div className="top-blog-container">
          <h1 className="h1 primary-text-color">Discover</h1>
        </div>

        <div className="sub-header-blog-container">
          <div className="sub-header-blog-menus">
            <ul>
              <li>
                <motion.button
                  onClick={() => handleSubHeader("all-posts")}
                  className="cleared-button"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  All posts
                </motion.button>

                {active === "all-posts" && (
                  <motion.div
                    className="active-header-button"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </li>

              <li>
                <motion.button
                  onClick={() => handleSubHeader("tech")}
                  className="cleared-button"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Tech
                </motion.button>

                {active === "tech" && (
                  <motion.div
                    className="active-header-button"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </li>
            </ul>

          </div>

          <div className="sub-header-blog-search">

          </div>
        </div>

        <div className="blog-content-container">
          {posts && posts.map((post) => (
            <motion.div
              key={post.id}
              className="blog-content-item"
              onClick={() => navigate(`/blog/${post.url}`)}
              whileHover={{ scale: 1.05, boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)" }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
            >
              <div className="blog-content-item-image-container">
                {!imageLoaded && (
                  <BlurhashCanvas
                    hash={post.imageHash}
                    className="blurhash-placeholder"
                    punch={1}
                  />
                )}
                <img
                  src={post.image}
                  alt={post.title}
                  style={{ display: imageLoaded ? "block" : "none" }}
                  onLoad={() => setImageLoaded(true)}
                />
              </div>
        
              <div className="blog-content-item-text-container">
                <div className="blog-content-item-text-top">
                  <h6>{post.author}</h6>
                  <p>{post.date}</p>
                </div>
        
                <div className="blog-content-item-text-mid">
                  <h2>{post.title}</h2>
                  <p>{post.subtitle}</p>
                </div>
        
                <div className="blog-content-item-text-bottom">
                  <ul>
                    {post.tags.map((tag, index) => (
                      <li key={index}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <TinyFooter />
    </>
  )
}

export default Blog