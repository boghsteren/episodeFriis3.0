import React from "react";
import { Link } from "gatsby";
import { Icon, Image, Menu, Transition } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "antd/dist/antd.css";
import { SearchBar } from "./components/SearchBar";

export const Layout = ({ children }) => (
  <div>
    <Menu fixed="top" borderless>
      <Menu.Item link as={Link} to="/">
        <Icon name="home" />

        <span className="hide-on-mobile">EpisodeFriis</span>
      </Menu.Item>
      <Menu.Item link as={Link} to="/posts">
        <Icon name="newspaper" />
        <span className="hide-on-mobile">Posts</span>
      </Menu.Item>
      <Menu.Item link as={Link} to="/serier">
        <Icon name="tv" />
        <span className="hide-on-mobile">Serier</span>
      </Menu.Item>

      <Menu.Item position={"right"}>
        <Image
          src="https://images.ctfassets.net/qqmq4jsguzi3/6DYE8VjNPa2uaaqUswEog6/0db08e1e665fbf70440b12ce967bd395/friis.jpg"
          avatar
        />
        <span className="hide-on-mobile">Friis</span>
      </Menu.Item>
    </Menu>
    <Transition transitionOnMount>
      <div style={{ marginTop: "55px", backgroundColor: "#f0f0f0" }}>
        {children}
      </div>
    </Transition>
  </div>
);
