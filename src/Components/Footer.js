import { Block, GitHub, LocalActivity } from "@material-ui/icons";
import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer_box">
      <div className="menu">
        <div className="team_name">
          <h2>Team Name</h2>
          <p>아는게 없조</p>
        </div>
        <div className="gisu">
          <h2>기수</h2>
          <p>BEB_01기</p>
        </div>
        <div className="team_member">
          <h2>Team Member</h2>
          <p>유호진, 안창남, 김대익</p>
        </div>
      </div>

      <div className="information">
        Block Chain Project_1
        <a
          href="https://github.com/codestates/BEB1stProject-05"
          target="_blank"
        >
          <button>
            <GitHub fontSize="large" />
          </button>
        </a>
        <a
          href="https://github.com/codestates/BEB1stProject-05"
          target="_blank"
        >
          <button>
            <LocalActivity fontSize="large" />
          </button>
        </a>
      </div>
    </div>
  );
}

export default Footer;
