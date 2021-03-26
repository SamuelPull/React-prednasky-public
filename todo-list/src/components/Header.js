import React from 'react';
import Typography from '@material-ui/core/Typography';
import './Header.css';

const Header = (props) => {
  if (props.isVisible) {
   return (
   <div className="header">
     <Typography className="appName" variant="h6" component="h2" gutterBottom>
          {props.appName}
      </Typography>
      <h1 className="title">{props.title}</h1>
      <h3 className="subtitle">{props.subtitle}</h3>
   </div>);
  } else return '';
}

export { Header }