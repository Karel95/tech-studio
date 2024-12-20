import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

const UserMenu = () => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0}}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, border: 'none' }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={handleCloseUserMenu} component={Link} to="/">
          <Typography sx={{ textAlign: "center" }}>Home</Typography>
        </MenuItem>
        <MenuItem onClick={handleCloseUserMenu} component={Link} to="/checkout">
          <Typography sx={{ textAlign: "center" }}>Checkout</Typography>
        </MenuItem>
        <MenuItem onClick={handleCloseUserMenu} component={Link} to="/dashboard">
          <Typography sx={{ textAlign: "center" }}>Dashboard</Typography>
        </MenuItem>
        <MenuItem onClick={handleCloseUserMenu} component={Link} to="/blog">
          <Typography sx={{ textAlign: "center" }}>Blog</Typography>
        </MenuItem>
        <MenuItem onClick={handleCloseUserMenu} component={Link} to="/profile">
          <Typography sx={{ textAlign: "center" }}>Profile</Typography>
        </MenuItem>
        <MenuItem onClick={handleCloseUserMenu} component={Link} to="/login">
          <Typography sx={{ textAlign: "center" }}>Login</Typography>
        </MenuItem>
        <MenuItem onClick={handleCloseUserMenu} component={Link} to="/register">
          <Typography sx={{ textAlign: "center" }}>Register</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default UserMenu;
