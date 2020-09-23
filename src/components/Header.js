import React from 'react';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import UpdateIcon from '@material-ui/icons/Update';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './header.css';

const Header = () => {
  return (
    <div className="main-header">
      <img
        className="image"
        src="https://de1f1l5l72ecp.cloudfront.net/awin/image/upload/v1513161384/awin-website/case-studies/image/rarnzohwzesaiwkbwngx.png"
        alt=""
      />
      <div className="search">
        <TextField
          fullWidth="true"
          id="outlined-basic"
          label="Search for anything"
          variant="outlined"
          type="string"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div className="icon">
        <FavoriteBorderOutlinedIcon fontSize="large" />
        <UpdateIcon fontSize="large" />
        <AccountCircleIcon fontSize="large" />
        <ShoppingCartIcon fontSize="large" />
      </div>
    </div>
  );
};
export default Header;
