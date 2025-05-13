// CSS
import "./Post.css";

// Data
import { posts, postsBR } from "../../data";

// Hooks
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

import { motion, useInView } from "framer-motion";

// Meta tags
import { Helmet } from "react-helmet-async";

// Components
import { TinyFooter } from "@components/index";

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
  imageHash: string;
  date: string;
  author: string;
  title: string;
  url: string;
  subtitle: string;
  tags: string[];
  metaTags: MetaTag;
  content: Content;
}

const Post = () => {
  const [post, setPost] = useState<Post | null>(null);

  const { title } = useParams();
  const { i18n, t } = useTranslation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if(title) {
      if(i18n.language === "pt-BR") {
        const post = postsBR.find((item) => item.url === title);
        if (post) setPost(post);
      }
      else {
        const post = posts.find((item) => item.url === title);
        if (post) setPost(post);
      }

      window.scrollTo(0, 0);
    }
  }, [post])

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
        {post ? (
          <>
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
                  <li key={topic}>
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
                      else if (pContent.type === "bold") {
                        return <b key={pIndex}>{ pContent.content }</b>;
                      }
                    })}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="post-bottom-container">
              <p>{ t("Posted on") } { post?.date } { t("by") } { post?.author }</p>
            </div>
          </>
        ) : (
          <div className="not-found-container">
            <p>{ t("Post not found") }</p>
          </div>
        )}
      </div>

      {post && <TinyFooter />}
    </>
  )
}

export default Post