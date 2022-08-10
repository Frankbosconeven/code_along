import React from "react";
import NavItem from "./NavItem";
function NavBar(){
    return (
        <nav className="flex justify-between py-3 px-20 shadow-md">
            <h3 className="font-bold">Sabtec in</h3>
            <ul className="flex gap-5">
                <NavItem menu="Home"></NavItem>
                <NavItem menu="Farm"></NavItem>
                <NavItem menu="Products"></NavItem>
                <NavItem menu="Services"></NavItem>
                <NavItem menu="About"></NavItem>
                <NavItem menu="Contacts"></NavItem>
            </ul>
        </nav>
    );
}

export default NavBar;