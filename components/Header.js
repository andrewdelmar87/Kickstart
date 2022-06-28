import React from "react";
import { Menu, menu } from "semantic-ui-react";

const Header = () => {
  return (
    <Menu style={{ marginTop: '10px' }}>
      <Menu.Item>Kickstart</Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item>Campaigns</Menu.Item>
        <Menu.Item>+</Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

export default Header;