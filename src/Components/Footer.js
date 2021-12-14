import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlogger, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer_box">
      <div className="tag_box">
        <div className="team_name">
          <h4>팀명</h4>
          <span>아는게 없조</span>
        </div>
        <div className="abc">
          <h4>기수</h4>
          <span>BEB_01기</span>
        </div>
        <div className="team_member">
          <h4>팀 멤버</h4>
          <span>유호진, 김대익, 안창남</span>
        </div>
      </div>

      <div className="Block_chain">
        Block Chain Project_1
        <span>
          <a
            href="https://github.com/codestates/BEB1stProject-05"
            target="_blank"
          >
            <button>
              <FontAwesomeIcon icon={faGithub} className="github" />
            </button>
          </a>
          <a
            href="https://velog.io/@jjimgo/BlockChainProject-1-NFT-거래-웹사이트"
            target="_blank"
          >
            <button className="button_blogger">
              <FontAwesomeIcon icon={faBlogger} className="blogger" />
            </button>
          </a>
        </span>
      </div>
    </div>
  );
}

// https://github.com/codestates/BEB1stProject-05

export default Footer;
