// CSS
import "./Blog.css";

// Data
import { posts, postsBR } from "../../data";

// Hooks
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { BlurhashCanvas } from "react-blurhash";

// Components
import { TinyFooter } from "@components/index";

// Icons
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const Blog = () => {
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();

  const [active, setActive] = useState("all-posts");  
  const [imageLoaded, setImageLoaded] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(
    (i18n.language === "pt-BR" ? postsBR : posts) || []
  );

  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const handleSubHeader = (category: string) => {
    setActive(category);
    filterPosts(search, category);
  };

  const handleSearch = (searchValue: string) => {
    setSearch(searchValue);
    filterPosts(searchValue, active);
  };

  const filterPosts = (searchText: string, category: string) => {
    const sourcePosts = i18n.language === "pt-BR" ? postsBR : posts;

    const filtered = sourcePosts.filter((post) => {
      const matchesCategory = category === "all-posts" || post.tags.includes(category);
      const matchesSearch =
        post.title.toLowerCase().includes(searchText.toLowerCase()) ||
        post.subtitle.toLowerCase().includes(searchText.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchText.toLowerCase()));

      return matchesCategory && matchesSearch;
    });

    setFilteredPosts(filtered);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (
      wrapperRef.current &&
      e.relatedTarget &&
      wrapperRef.current.contains(e.relatedTarget as Node)
    ) {
      return;
    }

    setIsOpen(false);
  };

  return (
    <>
      <Helmet>
        <title>Guilherme Schuch</title>
        <meta name="description" content="You will find all kind of things here, how to fix common errors in the dev/game community, install mods for your favourite games and more." />
        <meta name="keywords" content="Guilherme Schuch, Schuch, Blog, Jada, Mods, Errors, Error, How to fix" />
      </Helmet>

      <div id="blog" className="blog-container">
        <div className="top-blog-container">
          <h1 className="h1 primary-text-color">{ t("Discover") }</h1>
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
                  { t("All posts") }
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
                  onClick={() => handleSubHeader(t("Tech"))}
                  className="cleared-button"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  { t("Tech") }
                </motion.button>

                {active === t("Tech") && (
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
                  onClick={() => handleSubHeader(t("Games"))}
                  className="cleared-button"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  { t("Games") }
                </motion.button>

                {active === t("Games") && (
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
            <div className="search-wrapper" ref={wrapperRef}>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    key="input"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 200, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="input-container"
                  >
                    <input
                      ref={inputRef}
                      type="text"
                      placeholder="Search..."
                      className="search-input"
                      value={search}
                      onChange={(e) => handleSearch(e.target.value)}
                      onBlur={handleBlur}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                className="icon-button"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label="Toggle search"
              >
                {isOpen ? <CloseIcon /> : <SearchIcon />}
              </button>
            </div>
          </div>
        </div>

        <div className="blog-content-container">
          {filteredPosts.length ? filteredPosts.map((post) => (
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
          )) : (
            <>
              <div className="not-found-container">
                <p>{ t("No post was found.") }</p>
              </div>
            </>
          )}

        </div>
      </div>

      <TinyFooter />
    </>
  )
}

export default Blog