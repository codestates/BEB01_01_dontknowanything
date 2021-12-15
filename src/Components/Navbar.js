import React, { useState } from "react";
import "./Navbar.css";
import {
  AccountBalanceWallet,
  AccountCircle,
  Brush,
  DirectionsBoat,
  Dns,
  Grain,
  Pets,
  Public,
  RecentActors,
  Search,
  SportsSoccer,
  Update,
  ViewHeadlineSharp,
} from "@material-ui/icons";

import { Route, Switch,Link } from "react-router-dom";
import ConnectWallet from "./ConnectWallet";
import NftList from "./NftList";
import Homepage from "./Homepage";

function Navbar({ SetLight, light, connectWallet }) {
  const [active, setDropdown] = useState(false);
  const hoverDropDown = () => {
    setDropdown(!active);
  };

  const change = () => {
    SetLight(!light);
  };

  return (
    <header className="App-header">
      <div className="navBar">
        <div className="siteName">
          <DirectionsBoat /> OpenSea
        </div>
        <div className="searchBoxDiv">
          <Search fontSize="large" style={{paddingTop: "10px"}} />
          <input
            className="searchBox"
            type="text"
            placeholder="  Search items, collections, and accounts"
          ></input>
        </div>
        <span className="dropdown" onClick={hoverDropDown}>
          <button type="button" className="dropdown-toggle">
            My NFT
          </button>
          {active && (
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link to="MyNFT">
                  <button type="button" value="1" className="dropdown-option">
                    <Grain /> All NFTs
                  </button>
                </Link>
              </li>
              <li className="dropdown-item">
                <button type="button" value="2" className="dropdown-option">
                  <Update /> New
                </button>
              </li>
              <li className="dropdown-item">
                <button type="button" value="3" className="dropdown-option">
                  <Brush /> Art
                </button>
              </li>
              <li className="dropdown-item">
                <button type="button" value="4" className="dropdown-option">
                  <ViewHeadlineSharp /> Music
                </button>
              </li>
              <li className="dropdown-item">
                <button type="button" value="5" className="dropdown-option">
                  <Dns /> Domain Names
                </button>
              </li>
              <li className="dropdown-item">
                <button type="button" value="6" className="dropdown-option">
                  <Public /> Virtual Worlds
                </button>
              </li>
              <li class="dropdown-item">
                <button type="button" value="6" className="dropdown-option">
                  <RecentActors /> Trading Cards
                </button>
              </li>
              <li className="dropdown-item">
                <button type="button" value="6" className="dropdown-option">
                  <Pets /> Collectibles
                </button>
              </li>
              <li className="dropdown-item">
                <button type="button" value="6" className="dropdown-option">
                  <SportsSoccer /> Sports
                </button>
              </li>
              <li className="dropdown-item">
                <button type="button" value="6" className="dropdown-option">
                  <AccountBalanceWallet /> Utility
                </button>
              </li>
            </ul>
          )}
        </span>
        <button type="button" className="navButton">
          구현중
        </button>
        <button type="button" className="navButton">
          구현중
        </button>
        {/*토글 버튼 */}
        <>
          <input
            className="react-switch-checkbox"
            id={`react-switch-new`}
            type="checkbox"
            onClick={change}
          />
          <label className="react-switch-label" htmlFor={`react-switch-new`}>
            <span className={`react-switch-button`} />
          </label>
        </>
        <button type="button" className="navIcon">
          <AccountCircle fontSize="large" />
        </button>
        <ConnectWallet className="navIcon" connectWallet={connectWallet}/>
      </div>
      <Switch>
        <Route path="/MyNFT">
          <NftList />
        </Route>
      </Switch>
    </header>
  );
}

export default Navbar;
