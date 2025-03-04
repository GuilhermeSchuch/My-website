import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import {
  HomePage,
  ProjectPage,
  BlogPage,
} from "@pages/index";

// Components
import { Header } from "./components";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
