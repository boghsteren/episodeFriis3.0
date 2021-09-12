import React from "react";
import { Link } from "gatsby";
import { Transition } from "semantic-ui-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Layout = ({ children }) => (
  <div
    style={{
      backgroundColor: "#111111",
      color: "lightgrey",
    }}
  >
    <style>
      @import
      url('https://fonts.googleapis.com/css2?family=Italiana&family=Prompt&display=swap');
    </style>
    <div
      style={{
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <Link to="/" className="menu-link">
          Hjem
        </Link>
      </div>
      <div>
        <Link to="/posts" className="menu-link">
          Posts
        </Link>
      </div>
      <div>
        <Link to="/serier" className="menu-link">
          Serier
        </Link>
      </div>
      <div>
        <Link to="/friis" className="menu-link">
          Mig
        </Link>
      </div>
    </div>

    <Transition transitionOnMount>
      <div style={{ backgroundColor: "#111111" }}>{children}</div>
    </Transition>
  </div>
);
