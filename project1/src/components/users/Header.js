import React  from "react";
import { Link } from "react-router-dom";

const Header = () => {  
  
 
  
  
  

    return(
        <>  
        <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
  
</nav>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <Link class="navbar-brand" to="/logo">VEERA</Link>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link" to="/home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link"to="/about">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link"to="/contact">Contact</Link>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>



        </>

        
    );   
};
export default Header;