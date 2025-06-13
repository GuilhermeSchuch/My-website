import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Pages
import {
  HomePage,
  ProjectPage,
  BlogPage,
  PostPage,
  JadaErrorPage,
} from "@pages/index";

// Components
import { Header } from "./components";

const AppRouter = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:title" element={<ProjectPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:title" element={<PostPage />} />
          <Route path="/project/Jada-Mod-Manager/:code" element={<JadaErrorPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default AppRouter;
