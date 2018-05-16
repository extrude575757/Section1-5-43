import React from 'react';

const Header = (props) => {
    return (
        <div className="header"> 
          <h1 className="header_title">{props.title}</h1>
          {props.subTitle && <h2>{props.subTitle}</h2> }
          <h3>{props.quote}</h3>
        </div>
      );
};

Header.defaultProps = {
    title: '!Indecision App'
};

export default Header;