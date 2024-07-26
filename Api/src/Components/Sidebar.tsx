import React from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{ width: 240 }}
    >
      <IconButton onClick={onClose} style={{ marginLeft: 'auto', marginRight: 16 }}>
        <CloseIcon />
      </IconButton>
      <Divider />
      <List>
        <ListItem button component={Link} to="/" onClick={onClose}>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/news" onClick={onClose}>
          <ListItemText primary="News" />
        </ListItem>
        <ListItem button component={Link} to="/stocks" onClick={onClose}>
          <ListItemText primary="Stocks" />
        </ListItem>
        <ListItem button component={Link} to="/f-o" onClick={onClose}>
          <ListItemText primary="F&O" />
        </ListItem>
        <ListItem button component={Link} to="/mutual-funds" onClick={onClose}>
          <ListItemText primary="Mutual Funds" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
