import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Home } from "@/pages/Home";
import { Experience } from "@/pages/Experience";
import { Projects } from "@/pages/Projects";
import { Skills } from "@/pages/Skills";
import { About } from "@/pages/About";
import { Contact } from "@/pages/Contact";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
