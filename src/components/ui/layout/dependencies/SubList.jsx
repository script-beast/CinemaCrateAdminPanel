import React from "react";
import { FaFolderOpen, FaFolder } from "react-icons/fa";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const SubList = ({ link = {} }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <NavLink to={link.link} onClick={(e) => e.preventDefault()}>
        {({ isActive }) => (
          <ListItemButton
            variant="sidebarLink"
            onClick={() => setOpen(!open)}
            sx={{ pl: 1 }}
            selected={isActive}
          >
            <ListItemIcon sx={{ minWidth: "25px", color: "inherit" }}>
              <link.icon />
            </ListItemIcon>
            <ListItemText primary={link.name} />
            {open ? <FaFolderOpen /> : <FaFolder />}
          </ListItemButton>
        )}
      </NavLink>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List disablePadding>
          {link.links.map((subItem, subIndex) => (
            <NavLink to={subItem.link} key={subIndex}>
              {({ isActive }) => {
                return (
                  <ListItemButton
                    variant="sidebarLink"
                    sx={{ pl: 3 }}
                    selected={isActive}
                  >
                    {subItem.icon && (
                      <ListItemIcon sx={{ minWidth: "25px", color: "inherit" }}>
                        <subItem.icon />
                      </ListItemIcon>
                    )}
                    <ListItemText primary={subItem.name} />
                  </ListItemButton>
                );
              }}
            </NavLink>
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default SubList;
