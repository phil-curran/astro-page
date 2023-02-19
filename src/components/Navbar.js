import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./styles/navbar.css";

export default class Navbar extends Component {
  state = { activeItem: "Sun and Moon Times" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Segment inverted>
        <Menu className="menu" inverted pointing secondary fluid widths={3}>
          <div className="ui container">
            <Menu.Item
              as={Link}
              to="/"
              name="Sun and Moon Times"
              active={activeItem === "Sun and Moon Times"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={Link}
              to="/hours"
              name="Planetary Hours"
              active={activeItem === "Planetary Hours"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={Link}
              to="/ephemeris"
              name="Planetary Ephemeris"
              active={activeItem === "Planetary Ephemeris"}
              onClick={this.handleItemClick}
            />
          </div>
        </Menu>
      </Segment>
    );
  }
}
