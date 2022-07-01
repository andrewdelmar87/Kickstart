import React from "react";
import { Menu, menu } from "semantic-ui-react";
import {Link} from "../routes";

const Header = () => {
  return (
    <Menu secondary style={{marginTop: '10px'}}>
      <Link route="/">
        <a className="item" style={{fontWeight: "bold"}}>Kickstart</a>
      </Link>

      <Menu.Menu position="right">
      <Link route="/">
        <a className="item" style={{fontWeight: "bold"}}>Campaigns</a>
      </Link>
      <Link route="/campaigns/new">
        <a className="item" style={{fontWeight: "bold"}}>+</a>
      </Link>
      </Menu.Menu>
    </Menu>
  );
};

export default Header;