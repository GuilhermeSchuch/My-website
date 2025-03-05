// CSS
import "./Post.css";

// Data
import { posts } from "../../data";

// Hooks
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRef } from "react";

import { motion, useInView } from "framer-motion";

// Meta tags
import { Helmet } from "react-helmet-async";

import React from "react";

interface MetaTag {
  title: string;
  description: string;
  keywords: string;
}

interface ParagraphItem {
  type: string;
  content: string;
  link?: string;
}

interface Block {
  title: string;
  paragraph: ParagraphItem[];
}

interface Content {
  topics: string[];
  block: Block[];
}

interface Post {
  id: number;
  image: string;
  date: string;
  author: string;
  title: string;
  subtitle: string;
  tags: string[];
  metaTags: MetaTag;
  content: Content;
}

const Post = () => {
  const [post, setPost] = useState<Post | null>(null);

  const { id } = useParams();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if(posts && id) {
      const post = posts.find((item) => item.id === parseInt(id));
      if (post) setPost(post);
    }
  }, [])

  const handleScroll = (topic: string) => {
    const sectionElement = document.getElementById(topic);
  
    if(sectionElement) {
      const elementPosition = sectionElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 100;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }

  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
      <Helmet>
        <title>{ post?.metaTags.title }</title>
        <meta name="description" content={ post?.metaTags.description } />
        <meta name="keywords" content={ post?.metaTags.keywords } />
      </Helmet>

      <div className="post-container">
        <div className="post-top-container">
          <div className="post-top-text-container">
            <h1 className="h1 primary-text-color">{ post?.title }</h1>
            <img src={post?.image} alt={post?.title} />
          </div>

          <div className="post-top-image-container">
            <p>{ post?.subtitle }</p>
          </div>
        </div>

        <div className="post-topics">
          <h2 className="h2">Topics</h2>

          <ul>
            {post?.content.topics.map((topic) => (              
              <li>
                <motion.button
                  whileHover={{ scale: 1.1, color: "#BB2BCB" }}
                  whileTap={{ scale: 0.95 }}
                  className="cleared-button"
                  onClick={() => handleScroll(topic)}
                >
                  - { topic }
                </motion.button>
              </li>
            ))}
          </ul>
        </div>

        {/* <div className="post-blocks-container">
          {post?.content.block.map((item) => (
            <div id={item.title} className="post-block">
              <h3>{ item.title }</h3>

              <p>
                {item.paragraph.map((pContent) => {
                  if(pContent.type === "text") {
                    return (
                      <span>{ pContent.content }</span>
                    )
                  }
                  else if(pContent.type === "link") {
                    return (
                      <a href={pContent.link} target="_blank">{ pContent.content }</a>
                    )
                  }
                  else if(pContent.type === "break") {
                    return (
                      <>
                        <br />
                        <br />
                      </>
                    )
                  }
                  else if(pContent.type === "code") {
                    return (
                      <code>{ pContent.content }</code>
                    )
                  }
                  else if(pContent.type === "image") {
                    return (
                      <img src={pContent.content} />
                    )
                  }
                })}
              </p>
            </div>
          ))}
        </div> */}

        <div className="post-blocks-container">
          {post?.content.block.map((item, index) => (
            <motion.div
              key={item.title}
              id={item.title}
              className="post-block"
              variants={fadeInVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3>{ item.title }</h3>

              <p>
                {item.paragraph.map((pContent, pIndex) => {
                  if(pContent.type === "text") {
                    return <span key={pIndex}>{pContent.content}</span>;
                  }
                  else if (pContent.type === "link") {
                    return (
                      <a key={pIndex} href={pContent.link} target="_blank">
                        { pContent.content }
                      </a>
                    );
                  }
                  else if (pContent.type === "break") {
                    return (
                      <React.Fragment key={pIndex}>
                        <br />
                        <br />
                      </React.Fragment>
                    );
                  }
                  else if (pContent.type === "code") {
                    return <code key={pIndex}>{ pContent.content }</code>;
                  }
                  else if (pContent.type === "image") {
                    return <img key={pIndex} src={ pContent.content } />;
                  }
                })}
              </p>
            </motion.div>
          ))}
        </div>;

        <div className="post-bottom-container">
          <p>Posted on { post?.date } by { post?.author }</p>
        </div>
      </div>
    </>
  )
}

export default Post