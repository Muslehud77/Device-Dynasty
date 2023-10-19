import * as React from "react";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuButton as BaseMenuButton } from "@mui/base/MenuButton";
import { MenuItem as BaseMenuItem, menuItemClasses } from "@mui/base/MenuItem";
import { styled } from "@mui/system";
import { useContext } from "react";
import { AuthContext } from "../ContextProvider/AuthContext";
import userImg from '../Assets/user.png'

 
let isDark = null

export default function User() {
   const { dark , user ,logout,name} = useContext(AuthContext);
   isDark = dark
 

  return (
    <div className="relative z-50">
      <Dropdown>
        <MenuButton>
          <div className="avatar border-2">
            <div className="w-24 rounded-full">
              <img src={user?.photoURL ? user.photoURL : userImg} />
            </div>
          </div>
        </MenuButton>
        <Menu slots={{ listbox: Listbox }}>
          <MenuItem className="capitalize">
            {user.displayName ? user.displayName : name}
          </MenuItem>
          <MenuItem className="hover:cursor-pointer" onClick={logout}>
            Logout
          </MenuItem>
        </Menu>
      </Dropdown>
    </div>
  );
}

const blue = {
  50: "#F0F7FF",
  100: "#DAECFF",
  200: "#99CCF3",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const Listbox = styled("ul")(
  () => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 200px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: ${isDark ? grey[900] : "#fff"};
  border: 1px solid ${isDark ? grey[700] : grey[200]};
  color: ${isDark ? grey[300] : grey[900]};
  box-shadow: 0px 2px 16px ${
    isDark ? grey[900] : grey[200]
  };
  z-index: 1;
  `
);

const MenuItem = styled(BaseMenuItem)(
  () => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;
  user-select: none;
position : relative;
z-index: 50;
  &:last-of-type {
    border-bottom: none;
  }

  &.${menuItemClasses.focusVisible} {
    position : relative;
z-index: 50;
    outline: 3px solid ${isDark ? blue[600] : blue[200]};
    background-color: ${isDark ? grey[800] : grey[100]};
    color: ${isDark ? grey[300] : grey[900]};
  }

  &.${menuItemClasses.disabled} {
    color: ${isDark ? grey[700] : grey[400]};
  }

  &:hover:not(.${menuItemClasses.disabled}) {
    background-color: ${isDark ? grey[800] : grey[100]};
    color: ${isDark ? grey[300] : grey[900]};
  }
  `
);

const MenuButton = styled(BaseMenuButton)(
  () => `
 
 
  `
);
