import React from "react";
import NavItem from "./NavItem";

const links = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Products",
    to: "/products",
  },
  {
    label: "Task Manager",
    to: "/task-manager",
  },
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];

function NavBar() {
  return (
    <nav className="flex justify-between py-5 px-20 shadow-md">
      <h3 className="font-bold ">QUAKES COMPUTER HUB</h3>
      <ul className="flex gap-5">
        {links.map((link, index) => (
          <NavItem key={index} label={link.label} to={link.to} />
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;