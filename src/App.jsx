import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import AboutP from "./pages/AboutP";
import BusinesP from "./pages/BusinesP";
import EntertaimenP from "./pages/EntertaimenP";
import HealthP from "./pages/HealthP";
import HomeP from "./pages/HomeP";
import PostP from "./pages/PostP";
import PostsP from "./pages/PostsP";
import SciencyP from "./pages/SciencyP";
import SportsP from "./pages/SportsP";
import TechnologyP from "./pages/TechnologyP";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeP />} />
          <Route path="about" element={<AboutP />} />
          <Route path="post" element={<PostP />} />
          <Route path="busines" element={<BusinesP />} />
          <Route path="sport" element={<SportsP />} />
          <Route path="technology" element={<TechnologyP />} />
          <Route path="enterteiment" element={<EntertaimenP />} />
          <Route path="health" element={<HealthP />} />
          <Route path="science" element={<SciencyP />} />
          <Route path="posts:id" element={<PostsP />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
