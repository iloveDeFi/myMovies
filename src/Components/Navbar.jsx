import React from 'react';
import {Nav} from 'react-native';


export default function Cat() {
    return (
        <Nav
        fill
      >
        <NavItem>
          <NavLink
            active
            href="/home"
          >
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/Moviz">
            Movies
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            disabled
            href="/About"
          >
            About
          </NavLink>
        </NavItem>
      </Nav>
    );
  }

