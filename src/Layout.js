import React from "react";
import { Link } from "gatsby";
import { Icon, Image, Menu, Search, Transition } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { SearchBar } from "./components/SearchBar";

export const Layout = ({ children }) => (
  <div>
    <Menu fixed="top" borderless>
      <Menu.Item link as={Link} to="/">
        EpisodeFriis
      </Menu.Item>
      <Menu.Item link as={Link} to="/posts">
        <Icon name="newspaper" />
        Posts
      </Menu.Item>
      <Menu.Item link as={Link} to="/serier">
        <Icon name="tv" />
        Serier
      </Menu.Item>
      <Menu.Item>
        <SearchBar></SearchBar>
      </Menu.Item>
      <Menu.Item position={"right"}>
        <Image
          src="https://images.ctfassets.net/qqmq4jsguzi3/6DYE8VjNPa2uaaqUswEog6/0db08e1e665fbf70440b12ce967bd395/friis.jpg"
          avatar
        />
        Friis
      </Menu.Item>
    </Menu>
    <Transition transitionOnMount>
      <div style={{ marginTop: "56px" }}>{children}</div>
    </Transition>
  </div>
);
