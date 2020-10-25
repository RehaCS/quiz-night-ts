import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {

    document.addEventListener('DOMContentLoaded', () => {
        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
      
        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {
      
          // Add a click event on each of them
          $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {
      
              // Get the target from the "data-target" attribute
              const target = el.dataset.target;
              const $target = document.getElementById(target);
      
              // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
              el.classList.toggle('is-active');
              $target.classList.toggle('is-active');  
            });
          });
        }
      
      });

    return (
        <div>
            
            <nav className="navbar is-light" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="logo" />
                    </a>
                    
                    {/* eslint-disable-next-line */}
                    <a role="button" className="navbar-burger burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>

                </div>

                <div className="navbar-menu" id="navMenu">
                    <div className="navbar-start ">
                        <p className="navbar-item">Home</p>
                        <Link className="navbar-item" to="/host">Host</Link>
                        <Link className="navbar-item" to="/user">User</Link>
                        
                    </div>
                </div>
            </nav>
        </div>
    );
}

