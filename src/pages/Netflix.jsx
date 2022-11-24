import React, { useState } from "react";
import Navbar from "../component/Navbar";

function Netflix(props) {
  const [isScrolled, setisScrolled] = useState(false);
  window.onscroll = () => {
    setisScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.scroll = null);
  };
  return (
    <div>
      <Navbar isScrolled={isScrolled} />
    </div>
  );
}

export default Netflix;
