import Nav from "./components/nav";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Resume from "./components/resume";
import Footer from "./components/footer";
import React, { useState } from "react";

export default function App() {
  return (
    <main className="">
      <Nav />
      <About />
      <Portfolio />
      <Contact />
      <Resume />
      <Footer />
    </main>
  );
}
