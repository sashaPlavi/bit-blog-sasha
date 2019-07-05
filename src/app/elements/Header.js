import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {

    return (

        <nav>
<div className="nav-wrapper">
  <h1 className="brand-logo">BIT BLOG</h1>
  <ul id="nav-mobile" className="right hide-on-med-and-down">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/authors">Authors</Link></li>
    <li><Link to="/about">About</Link></li>
  </ul>
</div>
</nav>
    )
}

export { Header }



// <nav className="navbarHeader">
//     <div className="header">
//         <div className="bitHead">
//             <h1>BIT BLOG</h1>
//         </div>
//         <div className="links">
//             <span><Link to="/">Home</Link></span>
//             <span><Link to="/authors">Authors</Link></span>
//             <span><Link to="/about">About</Link></span>
//         </div>
//     </div>
// </nav>