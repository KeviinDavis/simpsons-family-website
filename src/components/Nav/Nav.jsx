import './Nav.css'
import MenuItem from './MenuItem.jsx';


export default function Nav(props) {
    return(
        <nav className="nav-bar">
            <div className="upper-nav">
                <div className="logo-nav"></div>
                <div className="right-upper-nav-wrapper">
                    <div className="link-socialmedia">
                        <i className="fa fa-facebook"></i>
                        <i className="fa fa-twitter"></i>
                        <i className="fa fa-linkedin"></i>
                        <i className="fa fa-youtube-play"></i>
                        <i className="fa fa-instagram"></i>
                    </div>
                    <div>
                        <p>CALL US! <strong>555-8707</strong></p>
                    </div>
                    <div className="right-upper-nav">
                        <ul className="cover-contact-about">
                            <li className="trigger"><a href="/#">VISIT SPRINGFIELD!</a></li>
                            <li className="trigger"><a href="/#">MENU ITEM</a>
                                <ul className="submenu">
                                    <li><a href="/#">Link 1</a></li>
                                    <li><a href="/#">Link 2</a></li>
                                </ul>
                            </li>
                        </ul>
                        <button className="btn-donate">DONATE</button>
                    </div>
                </div>
            </div>

<div className="lower-nav">
    <ul className="lower-nav-ul">
        <MenuItem title="Menu Item 1" links={["Link 1", "Link 2"]} />
        <MenuItem title="Menu Item 2" links={["Link 3", "Link 4"]} />
        <MenuItem title="Menu Item 3" links={["Link 5", "Link 6"]} />
        <MenuItem title="Menu Item 4" links={["Link 7", "Link 8"]} />
        <MenuItem title="Menu Item 5" links={["Link 9", "Link 10"]} />
        <MenuItem title="Menu Item 6" links={["Link 11", "Link 12"]} />
        <i className="fa fa-search"></i>
    </ul>
</div>
</nav>
    );
}