import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import "./home.css";

import Carousel from "react-bootstrap/Carousel";

function Home() {
  return (
    <div>
      <div className="home-page">
        <nav className="nav-bar">
          <FontAwesomeIcon icon={faUser} className="profile-icon" />{" "}
          <FontAwesomeIcon icon={faBars} className="menu" />
        </nav>
        <div>
          <p className="greeting">Hi! Tushar</p>
          <div className="card"></div>
          <div className="card card2">
            <span>New</span>
          </div>
          <p className="bottom-line">What do you want to learn today Tushar?</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
