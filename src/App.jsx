import { Routes, Route, Link } from "react-router-dom";

import { Homepage } from "./pages/Homepage";
import { About } from "./pages/Aboutpage";
import { Blogpage } from "./pages/Blogpage";

import { Notfoundpage } from "./pages/Notfoundpage";

function App() {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
      </header>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog" element={<Blogpage />} />
        <Route path="/about" element={<About />} />

        <Route path="*" element={<Notfoundpage />} />
      </Routes>
    </>
  );
}

export default App;
