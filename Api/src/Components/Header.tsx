import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; // Import the dropdown icon
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [tagsAnchorEl, setTagsAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const tagsOpen = Boolean(tagsAnchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleTagsMenu = (event: React.MouseEvent<HTMLElement>) => {
    setTagsAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setTagsAnchorEl(null);
  };

  const handleLogout = () => {
    // localStorage.removeItem('authToken');
    // localStorage.removeItem('firstName');
    // localStorage.removeItem('lastName');
    // localStorage.removeItem('profilePicture');
    navigate('/');
  };

  const firstName = localStorage.getItem('firstName') || '';
  const lastName = localStorage.getItem('lastName') || '';
  const profilePicture = localStorage.getItem('profilePicture');

  return (
    <AppBar position="static">
      <Toolbar>
        {isMobile && (
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenu}>
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
        </Typography>
        {!isMobile && (
          <div style={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
            <Link to="/" style={{ margin: '0 10px', textDecoration: 'none', color: 'inherit' }}>All Notes</Link>
            <Link to="/news" style={{ margin: '0 10px', textDecoration: 'none', color: 'inherit' }}>Reminder</Link>
            <Typography
              aria-controls="tags-menu"
              aria-haspopup="true"
              onClick={handleTagsMenu}
              style={{ margin: '0 10px', display: 'flex', alignItems: 'center', cursor: 'pointer' }}
            >
              Tags
              <ExpandMoreIcon style={{ marginLeft: 4 }} />
            </Typography>
            <Link to="/f-o" style={{ margin: '0 10px', textDecoration: 'none', color: 'inherit' }}>Archive</Link>
          </div>
        )}
        {profilePicture ? (
          <img
            src={profilePicture}
            alt="Profile"
            style={{ width: 40, height: 40, borderRadius: '50%', marginLeft: 'auto' }}
          />
        ) : (
          <AccountCircleIcon
            style={{ width: 40, height: 40, marginLeft: 'auto' }}
          />
        )}
        <Typography variant="body1" style={{ marginLeft: '10px', marginRight: '20px' }}>
          {firstName} {lastName}
        </Typography>
        {!isMobile && (
          <Typography
            onClick={handleLogout}
            style={{ cursor: 'pointer', marginLeft: '10px', color: 'inherit' }}
          >
            Logout
          </Typography>
        )}
      </Toolbar>
      {isMobile && (
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={handleClose}><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>All Notes</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link to="/news" style={{ textDecoration: 'none', color: 'inherit' }}>Reminder</Link></MenuItem>
          <MenuItem onClick={handleTagsMenu}>  <ExpandMoreIcon style={{ marginLeft: 4 }} /> Tags</MenuItem>
          <MenuItem onClick={handleClose}><Link to="/f-o" style={{ textDecoration: 'none', color: 'inherit' }}>Archive</Link></MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem> {/* Added Logout to the mobile menu */}
        </Menu>
      )}
      <Menu
        id="tags-menu"
        anchorEl={tagsAnchorEl}
        open={tagsOpen}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Travel</MenuItem>
        <MenuItem onClick={handleClose}>Password</MenuItem>
        <MenuItem onClick={handleClose}>Works</MenuItem>
        <MenuItem onClick={handleClose}>Recipes</MenuItem>
        <MenuItem onClick={handleClose}>Add Tag +</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Header;
