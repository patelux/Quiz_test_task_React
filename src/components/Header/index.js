import * as React from 'react';
import logo from '../../images/logoDesktop 1x.png';
import shop_icon from '../../images/shop_icon.svg';
import community_icon from '../../images/community_icon.svg';
import login_icon from '../../images/login_icon.svg';
import help_icon from '../../images/help_icon.svg';
import shopping_cart_icon from '../../images/shopping_cart_icon.svg';

function Header() {

  return (
    <>
    <header className="header">
            <div className="container">
                <div className="logo-wrapper">
                    <a to="/" className="logo_link">
                        <img src={logo} alt="logo" className="logo_main"/>
                    </a>
                </div>
                <div className="search-container">
                    <input type="text" id="searchInput" className="search-input" placeholder="Search"/>
                </div>
                <nav className="nav-list_wrapper">
                    <ul className="nav_list">
                        <li className="nav_item">
                            <a to="/" className="nav_link">
                                <img src={shop_icon} alt="logo_shop" className="logo_item"/>
                                <div className="nav_link-description">
                                    <p>
                                        Shops and Services
                                    </p>
                                    <p className="nav_item-accent">
                                        Choose your store.
                                    </p>
                                </div>
                            </a>
                        </li>
                        <li className="nav_item">
                            <a to="/" className="nav_link">
                                <img src={community_icon} alt="logo_community" className="logo_item"/>
                                <div className="nav_link-description">
                                    <p>
                                        Community
                                    </p>
                                </div>
                            </a>
                        </li>
                        <li className="nav_item">
                            <a to="/" className="nav_link">
                                <img src={login_icon} alt="logo_login" className="logo_item lg"/>
                                <div className="nav_link-description">
                                    <p>
                                        Log in
                                    </p>
                                    <p className="nav_item-accent">
                                        for FREE delivery 🚚
                                    </p>
                                </div>

                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="icons-wrapper">
                    <button className="btn_link" type="button">
                        <img src={help_icon} alt="favorite" className="logo"/>
                    </button>
                    <button className="btn_link" type="button">
                        <img src={shopping_cart_icon} alt="shoping_cart" className="logo"/>
                    </button>
                </div>
            </div>
        </header>
    </>
  );
}
export default Header;