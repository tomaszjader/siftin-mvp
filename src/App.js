import "./App.css";
import Ticker from "react-ticker";
import React, { useState, useEffect } from "react";
import logo from "./twitter.png";
import sifter from "./sito.png";
import sifterWhite from "./sito-white.png";
import siftinWhite from "./logo4-white.png";
import siftin from "./logo4.png";
import Sun from "./sun-warm.svg";
import Moon from "./moon-black.svg"
import Icon from "@mdi/react";
import { mdiAccount } from "@mdi/js";
import { mdiThumbUp } from "@mdi/js";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


//import { MDBSwitch } from "mdbreact";

import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Button,
  Form,
} from "react-bootstrap";
const NavBars = ({ onChangeBTC, checkedBTC, checkedETH }) => {
  return <div></div>;
};

const App = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState(() => {
    const saved = localStorage.getItem("name");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [cryptoNavbar, setCryptoNavbar] = useState(false);
 
  const [cryptoData, setCryptoData] = useState([]);
  const [checkedBTC, setCheckedBTC] = React.useState([false, "BTC"]);
  const [checkedETH, setCheckedETH] = React.useState([false, "ETH"]);
  const [checkedXRP, setCheckedXRP] = React.useState([false, "XRP"]);
  const [checkedDOT, setCheckedDOT] = React.useState([false, "DOT"]);
  const [checkedADA, setCheckedADA] = React.useState([false, "ADA"]);
  const [checkedBNB, setCheckedBNB] = React.useState([false, "BNB"]);
  const [checkedDOGE, setCheckedDOGE] = React.useState([false, "DOGE"]);
  const [checkedXLM, setCheckedXLM] = React.useState([false, "XLM"]);
  const [checkedUNI, setCheckedUNI] = React.useState([false, "UNI"]);
  const [checkedTRX, setCheckedTRX] = React.useState([false, "TRX"]);
  const style = {
    color: "white",
  };
  const [darkMode, setDarkMode] = useState(true);
  const [interval, setinterval] = useState(1);
  const [intervalNotification, setIntervalNotification] = useState(1);
  const [cryptoLength, setCryptoLength] = useState(0);
  useEffect(() => {
   
document.body.style.backgroundColor = darkMode ? "#212529" : "#f8f9fa";
    const req = new XMLHttpRequest();
    req.open("GET", "https://siftin.herokuapp.com/categories", true);
    req.send();

    req.onload = () => {
      if (req.status === 200) {
        const myresponseText = JSON.parse(req.responseText);
        console.log(myresponseText);

        setData(myresponseText);
        setCryptoLength(myresponseText.length);
        console.log(`Length: ${cryptoLength}`);
      }
    };
    fetch("https://siftin.herokuapp.com/crypto")
      .then((response) => response.json())
      .then((d) => {
        console.log(d);
        setCryptoData(d);
      });
    
    
    
  }, []);
  useEffect(() => {
    setInterval(loadCrypto, intervalNotification * 60000);
  }, []);
  const loadCrypto = () => {
 
  
  
    
    
    fetch("https://siftin.herokuapp.com/categories")
      .then((response) => response.json())
      .then((d) => {
         
        console.log(d);
        setData(d);
       
        
        if (cryptoLength < d.length&&cryptoLength) {
          console.log(`cryptoLength ${cryptoLength}  ${d.length}`);
        
          

          for (let i = d.length - (d.length-cryptoLength); i < d.length-2; i++) {
            var img = "/twitter.png";
            var text = d[i].content;
            console.log(d.id);
            var notification = new Notification(
              d[i].sources + " " + d[i].indices + " " + d.date,
              {
                body: text,
                icon: img,
              }
            );
          }
        }
setCryptoLength(d.length);


      });
    fetch("https://siftin.herokuapp.com/crypto")
      .then((response) => response.json())
      .then((d) => {
        console.log(d);
        setCryptoData(d);
      });
    
    
  };

  useEffect(() => {
    if (localStorage.getItem("darkMode")) {
      if (localStorage.getItem("darkMode") == "dark") {
        setDarkMode(false);
      } else {
        setDarkMode(true);
      }
      
    }
    
    const temparray = [
      checkedBTC,
      checkedETH,
      checkedXRP,
      checkedDOT,
      checkedADA,
      checkedBNB,
      checkedDOGE,
      checkedXLM,
      checkedUNI,
      checkedTRX,
    ];
    for (let t of temparray) {
      if (JSON.parse(localStorage.getItem(t[1]))) {
        //console.log(localStorage.getItem(t[1]) === true);
        if ("BTC" === t[1]) {
          setCheckedBTC([localStorage.getItem(t[1]), "BTC"]);
        } else if ("UNI" === t[1]) {
          setCheckedUNI([localStorage.getItem(t[1]), "UNI"]);
        } else if ("ETH" === t[1]) {
          setCheckedETH([localStorage.getItem(t[1]), "ETH"]);
        } else if ("TRX" === t[1]) {
          setCheckedTRX([localStorage.getItem(t[1]), "TRX"]);
        } else if ("XRP" === t[1]) {
          setCheckedXRP([localStorage.getItem(t[1]), "XRP"]);
        } else if ("DOT" === t[1]) {
          setCheckedDOT([localStorage.getItem(t[1]), "DOT"]);
        } else if ("ADA" === t[1]) {
          setCheckedADA([localStorage.getItem(t[1]), "ADA"]);
        } else if ("BNB" === t[1]) {
          setCheckedBNB([localStorage.getItem(t[1]), "BNB"]);
        } else if ("DOGE" === t[1]) {
          setCheckedDOGE([localStorage.getItem(t[1]), "DOGE"]);
        } else if ("XLM" === t[1]) {
          setCheckedXLM([localStorage.getItem(t[1]), "XLM"]);
        }
      }
    }
  }, []);
  const onClickUp = (id,rating) =>{
    console.log("up");
    fetch(
      `https://siftin.herokuapp.com/rating?rating_id=${id}&rating=${rating}`,
      {
        method: "POST",
      }
    );
  } 

  const togleCryptoNavbar = () => {
    setCryptoNavbar(!cryptoNavbar);
  }
  const onChangeInterval = (e) => {
    console.log(e.target.value);
    console.log(e.target.type);
    setinterval(e.target.value);
  };
  const onChangeIntervalNotification = () => {
    interval
      ? setIntervalNotification(interval) : setIntervalNotification(60);
    console.log(intervalNotification);
  };
  const onChangeBTC = () => {
    setCheckedBTC([!checkedBTC[0], "BTC"]);
    localStorage.setItem(checkedBTC[1], !checkedBTC[0]);
  };
  const onChangeETH = () => {
    setCheckedETH([!checkedETH[0], "ETH"]);
    localStorage.setItem(checkedETH[1], !checkedETH[0]);
  };
  const onChangeXRP = () => {
    setCheckedXRP([!checkedXRP[0], "XRP"]);
    localStorage.setItem(checkedXRP[1], !checkedXRP[0]);
  };
  const onChangeDOT = () => {
    setCheckedDOT([!checkedDOT[0], "DOT"]);
    localStorage.setItem(checkedDOT[1], !checkedDOT[0]);
  };
  const onChangeADA = () => {
    setCheckedADA([!checkedADA[0], "ADA"]);
    localStorage.setItem(checkedADA[1], !checkedADA[0]);
  };
  const onChangeBNB = () => {
    setCheckedBNB([!checkedBNB[0], "BNB"]);
    localStorage.setItem(checkedBNB[1], !checkedBNB[0]);
  };
  const onChangeXLM = () => {
    setCheckedXLM([!checkedXLM[0], "XLM"]);
    localStorage.setItem(checkedXLM[1], !checkedXLM[0]);
  };
  const onChangeUNI = () => {
    setCheckedUNI([!checkedUNI[0], "UNI"]);
    localStorage.setItem(checkedUNI[1], !checkedUNI[0]);
  };
  const onChangeTRX = () => {
    setCheckedTRX([!checkedTRX[0], "TRX"]);
    localStorage.setItem(checkedTRX[1], !checkedTRX[0]);
  };
  const onChangeDOGE = () => {
    setCheckedDOGE([!checkedDOGE[0], "DOGE"]);
    localStorage.setItem(checkedDOGE[1], !checkedDOGE[0]);
  };
  const onChangeDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.style.backgroundColor = darkMode ? "white":"#212529";
    localStorage.setItem("darkMode", darkMode ? "dark" : "white");
    
  };
  return (
    <Router>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant={darkMode ? "dark" : "light"}
        className={darkMode ? "navbarclass" : "light-navbarclass"}
      >
        <Container>
          <Navbar.Brand href="#home">
            {" "}
            <Link to="/">
              <img
                className="logo-sifter"
                src={darkMode ? siftinWhite : siftin}
              />
              <img
                className="logo-sifter"
                src={darkMode ? sifterWhite : sifter}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" sticky>
            <Nav className="justify-content-end">
              <NavDropdown
                title="crypto"
                id="collasible-nav-dropdown"
                expanded="expanded"
                show={cryptoNavbar}
                onToggle={togleCryptoNavbar}
                autoClose={false}
              >
                <NavDropdown.Item href="#action/3.1" onClick={onChangeBTC}>
                  <label>
                    <input type="checkbox" checked={checkedBTC[0]} />
                    BTC
                  </label>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" onClick={onChangeETH}>
                  <label>
                    <input type="checkbox" checked={checkedETH[0]} />
                    ETH
                  </label>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" onClick={onChangeXRP}>
                  <label>
                    <input type="checkbox" checked={checkedXRP[0]} />
                    XRP
                  </label>
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4" onClick={onChangeDOT}>
                  <label>
                    <input type="checkbox" checked={checkedDOT[0]} />
                    DOT
                  </label>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5" onClick={onChangeADA}>
                  <label>
                    <input type="checkbox" checked={checkedADA[0]} />
                    ADA
                    {"    "}
                  </label>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6" onClick={onChangeBNB}>
                  <label>
                    <input type="checkbox" checked={checkedBNB[0]} />
                    BNB
                  </label>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.7" onClick={onChangeDOGE}>
                  <label>
                    <input type="checkbox" checked={checkedDOGE[0]} />
                    DOGE
                  </label>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.8" onClick={onChangeXLM}>
                  <label>
                    <input type="checkbox" checked={checkedXLM[0]} />
                    XLM
                  </label>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.9" onClick={onChangeUNI}>
                  <label>
                    <input type="checkbox" checked={checkedUNI[0]} />
                    UNI
                  </label>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.10" onClick={onChangeTRX}>
                  <label>
                    <input type="checkbox" checked={checkedTRX[0]} />
                    TRX
                  </label>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="stock exchange" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">WIG20</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">FTSE 100</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Nasdaq Composite
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4">
                  SSE Composite Index
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">DAX</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="forex" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">USD</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">GBP</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">EURO</NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4">CHF</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">PLN</NavDropdown.Item>
              </NavDropdown>

              <Navbar.Brand href="#home"></Navbar.Brand>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div className="main--conteiner" onClick={onChangeDarkMode}>
          <img
            src={darkMode ? Sun : Moon}
            className={darkMode ? "svg-white" : "svg-black"}
          ></img>
        </div>
        <NavDropdown
          className="justify-content-end  margines"
          title={
            <Icon
              path={mdiAccount}
              title="User Profile"
              size={1}
              horizontal
              vertical
              rotate={180}
              color={darkMode ? "white" : "black"}
            />
          }
          id="collasible-nav-dropdown"
        >
          <NavDropdown.Item href="#action/3.1">Portfolio</NavDropdown.Item>

          <NavDropdown.Item href="#action/3.3">Currency: USD</NavDropdown.Item>

          <Link to="/settings">
            <NavDropdown.Item href="#action/3.4">Settings</NavDropdown.Item>
          </Link>
          <Link to="/myaccount">
            <NavDropdown.Item href="#action/3.5">My account</NavDropdown.Item>
          </Link>
          <NavDropdown.Item href="#action/3.6">Log out</NavDropdown.Item>
        </NavDropdown>
      </Navbar>

      <Switch>
        <Route exact path="/">
          <div className={darkMode ? "dark-mode" : "light-mode"}>
            <div>
              <header className="main--conteiner">
                <img className="logo1" src={darkMode ? siftinWhite : siftin} />
              </header>
              <Ticker speed={10}>
                {() => (
                  <div className="crypto">
                    {cryptoData
                      .filter((d) => {
                        const temparray = [
                          checkedBTC,
                          checkedETH,
                          checkedXRP,
                          checkedDOT,
                          checkedADA,
                          checkedBNB,
                          checkedDOGE,
                          checkedXLM,
                          checkedUNI,
                          checkedTRX,
                        ];
                        let i = 0;
                        for (let t of temparray) {
                          if (t[0]) {
                            if (d.indices.includes(t[1])) {
                              return d;
                            }
                          }
                        }
                        return null;
                      })
                      .filter(
                        (v, i, a) => a.findIndex((t) => t.name === v.name) === i
                      )
                      .map((d) => {
                        return (
                          <div className="crypto-blox">
                            <p>
                              {d.indices}{" "}
                              {d.price.slice(
                                0,
                                d.price.indexOf(".") + 4 || d.price.length
                              )}
                            </p>
                          </div>
                        );
                      })}
                  </div>
                )}
              </Ticker>
              <div className="inputcheckbox"></div>
              {data
                .filter((d) => {
                  const temparray = [
                    checkedBTC,
                    checkedETH,
                    checkedXRP,
                    checkedDOT,
                    checkedADA,
                    checkedBNB,
                    checkedDOGE,
                    checkedXLM,
                    checkedUNI,
                    checkedTRX,
                  ];
                  let i = 0;
                  for (let t of temparray) {
                    if (t[0]) {
                      if (d.indices.includes(t[1])) {
                        return d;
                      }
                    }
                  }
                  return null;
                })

                .filter(
                  (v, i, a) => a.findIndex((t) => t.content === v.content) === i
                )
                .slice()
                .sort((a, b) => {
                  return Date.parse(b.date) - Date.parse(a.date);
                })
                .map((d, index) => {
                  return (
                    <div className="finale-conteiner">
                      <a href={d.twitter_link} target="_blank">
                        <div className="conteiner1">
                          <img className="logo" src={logo} />
                          <p className="main--top" key={d.id}>
                            Twitter
                          </p>
                          <p className="margines-gorny">
                            {" "}
                            {d.date.slice(11, 16)}
                          </p>
                        </div>
                        <div className="conteiner2">
                          <p className="border1">
                            <span className="bold">{d.sources}</span>
                            {": "}
                            {d.content.search("https://")
                              ? d.content.slice(0, d.content.search("https://"))
                              : d.content}
                          </p>
                          <p className="main--top">{d.indices}</p>
                        </div>
                      </a>
                      <Icon
                        path={mdiThumbUp}
                        title="User Profile"
                        size={1}
                        horizontal
                        vertical
                        rotate={180}
                        color={darkMode ? "white" : "black"}
                        onClick={() => onClickUp(d.id, 1)}
                      />
                      <Icon
                        path={mdiThumbUp}
                        title="User Profile"
                        size={1}
                        horizontal
                        vertical
                        rotate={0}
                        color={darkMode ? "white" : "black"}
                        onClick={() => onClickUp(d.id, 0)}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </Route>
        <Route path="/settings">
          <Settings
            interval={interval}
            onChangeInterval={onChangeInterval}
            onChangeIntervalNotification={onChangeIntervalNotification}
            darkMode={darkMode}
          ></Settings>
        </Route>
        <Route path="/myaccount">
          <MyAccound darkMode={darkMode}></MyAccound>
        </Route>
      </Switch>
    </Router>
  );
};
const Settings = ({interval,onChangeInterval,onChangeIntervalNotification, darkMode}) => {
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div>Settings</div>
      <label className="crypto-blox1">
        Set the notification interval
        <input
          type="number"
          step={1}
          min={0}
          max={60}
          value={interval}
          onChange={onChangeInterval}
        ></input>
        (min)
        <Button onClick={onChangeIntervalNotification}>Set</Button>
      </label>
    </div>
  );
};
const MyAccound = ({ darkMode }) => {
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="crypto-blox1">
        <p>My plan</p>
        <p>Premium</p>
        <p>My card</p>
        <p>1234567890</p>
      </div>
    </div>
  );
};

export default App;
