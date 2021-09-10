import React from "react";
import { Link } from "gatsby";
import { Transition } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "antd/dist/antd.css";

export const Layout = ({ children }) => (
  <div style={{ backgroundColor: "#111111", color: "lightgrey" }}>
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
          Forside
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
          Friis
        </Link>
      </div>
    </div>

    <Transition transitionOnMount>
      <div style={{ backgroundColor: "#111111" }}>{children}</div>
    </Transition>
  </div>
);
