import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import { HomePage, ProjectPage } from "@pages/index";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
