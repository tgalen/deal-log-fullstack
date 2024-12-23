import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import Mail from "@mui/icons-material/Mail";
import Notifications from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import Person2Icon from "@mui/icons-material/Person2";
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate } from "react-router-dom";
import MoreHorizSharpIcon from "@mui/icons-material/MoreHorizSharp";

export const Navbar = ({ loggedInLockedInUser, setLoggedInLockedInUser }) => {
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("lockedInUser");
    setLoggedInLockedInUser(null);
    setNavMenuOpen(false);
    navigate("/");
  };

  //   const handleTodoLink = () => {
  //     setNavMenuOpen(false);
  //     navigate("/");
  //   };

  const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    justifyContent: "center",
    gap: "30px",
    display: "flex",
    // [theme.breakpoints.up("sm")]: {
    //  display: "flex",
    // },
  }));

  //   const UserBox = styled(Box)(({ theme }) => ({
  //     display: "flex",
  //     alignItems: "center",
  //     gap: "10px",
  //     display: "none",
  //     // [theme.breakpoints.up("sm")]: {
  //     // display: "none",
  //     //},
  //   }));

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    background: "linear-gradient(45deg, #7434af 0%, #a639d2 100%)",
    borderBottom: "2px solid",
    borderImage: "linear-gradient(45deg, #7434af, #ffffff) 1",
  });
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          <Link href="/" color="inherit" underline="none">
            LOCKED IN <LockIcon />
          </Link>
        </Typography>
        <Link href="/" color="inherit">
          <FactCheckIcon sx={{ display: { xs: "block", sm: "none" } }} />
        </Link>

        {loggedInLockedInUser ? (
          <Icons>
            <Badge badgeContent={4} color="error">
              <Mail color="white" />
            </Badge>
            <Badge badgeContent={4} color="error">
              <Notifications color="white" />
            </Badge>
            <Avatar
              onClick={(e) => setNavMenuOpen(true)}
              sx={{ width: 25, height: 25 }}
            />
          </Icons>
        ) : (
          <Icons>
            <Person2Icon />
            <Link color="inherit" href="/login" underline="none">
              Login
            </Link>
          </Icons>
        )}
        {/* {loggedInLockedInUser ? (
          <UserBox onClick={(e) => setNavMenuOpen(true)}>
            <MoreHorizSharpIcon />
          </UserBox>
        ) : (
          <UserBox>
            <Person2Icon />
            <Link href="/login" color="inherit" underline="none">
              Login
            </Link>
          </UserBox>
        )} */}
      </StyledToolbar>
      <Menu
        id="positioned-menu"
        aria-labelledby="positioned-button"
        open={navMenuOpen}
        onClose={(e) => setNavMenuOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {/* <MenuItem>Profile</MenuItem>
    <MenuItem>My account</MenuItem> */}
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};
