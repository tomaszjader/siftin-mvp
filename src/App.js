import "./App.css";
import React, { useState, useEffect } from "react";
import logo from "./twitter.png";
import sifter from "./sito.png";
import siftin from "./logo4.png";

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
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    var img = "/twitter.png";
    var text = 'HEY! Your task "'  + '" is now overdue.';
    var notification = new Notification("To do list", {
      body: text,
      icon: img,
    });
    const req = new XMLHttpRequest();
    req.open("GET", "https://siftin.herokuapp.com/categories", true);
    req.send();

    req.onload = () => {
      if (req.status === 200) {
        const myresponseText = JSON.parse(req.responseText);
        console.log(myresponseText);

        setData(myresponseText);
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
    setInterval(loadCrypto, 60000);
  }, []);
  const  loadCrypto = () => {
    fetch("https://siftin.herokuapp.com/categories")
      .then((response) => response.json())
      .then((d) => {
        console.log(d);
        setData(d);
      });
  };

  useEffect(() => {
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

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg={darkMode ? "dark" : "light"}
        variant={darkMode ? "dark" : "light"}
      >
        <Container>
          <Navbar.Brand href="#home">
            {" "}
            <img className="logo-sifter" src={sifter} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="crypto" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  {" "}
                  <label>
                    <input
                      type="checkbox"
                      checked={checkedBTC[0]}
                      onChange={onChangeBTC}
                    />
                    BTC
                  </label>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <label>
                    <input
                      type="checkbox"
                      checked={checkedETH[0]}
                      onChange={onChangeETH}
                    />
                    ETH
                  </label>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  <label>
                    <input
                      type="checkbox"
                      checked={checkedXRP[0]}
                      onChange={onChangeXRP}
                    />
                    XRP
                  </label>
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4">
                  <label>
                    <input
                      type="checkbox"
                      checked={checkedDOT[0]}
                      onChange={onChangeDOT}
                    />
                    DOT
                  </label>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">
                  <label>
                    <input
                      type="checkbox"
                      checked={checkedADA[0]}
                      onChange={onChangeADA}
                    />
                    ADA
                  </label>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">
                  <label>
                    <input
                      type="checkbox"
                      checked={checkedBNB[0]}
                      onChange={onChangeBNB}
                    />
                    BNB
                  </label>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.7">
                  <label>
                    <input
                      type="checkbox"
                      checked={checkedDOGE[0]}
                      onChange={onChangeDOGE}
                    />
                    DOGE
                  </label>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.8">
                  <label>
                    <input
                      type="checkbox"
                      checked={checkedXLM[0]}
                      onChange={onChangeXLM}
                    />
                    XLM
                  </label>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.9">
                  <label>
                    <input
                      type="checkbox"
                      checked={checkedUNI[0]}
                      onChange={onChangeUNI}
                    />
                    UNI
                  </label>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.10">
                  <label>
                    <input
                      type="checkbox"
                      checked={checkedTRX[0]}
                      onChange={onChangeTRX}
                    />
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
              <NavDropdown
                title="user"
                id="collasible-nav-dropdown"
                
              >
                <NavDropdown.Item href="#action/3.1">
                  Portfolio
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Dark mode
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Currency: USD
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4">Settings</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">
                  My account
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">Log out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div>
        <header className="main--conteiner">
          <img className="logo1" src={siftin} />
        </header>
        <div className="crypto">
          {cryptoData.map((d) => {
            return (
              <div className="crypto-blox">
                <p>{d.name}</p>
                <p>
                  {d.price.slice(0, d.price.indexOf(".") + 3 || d.price.lenght)}
                </p>
              </div>
            );
          })}
        </div>
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
          .sort((a, b) => b.id - a.id)
          .filter(
            (v, i, a) => a.findIndex((t) => t.content === v.content) === i
          )
          .map((d, index) => {
            return (
              <div className="finale-conteiner">
                <a href={d.twitter_link} target="_blank">
                  <div className="conteiner1">
                    <img className="logo" src={logo} />
                    <p className="main--top" key={d.id}>
                      Twitter
                    </p>
                    <p> {d.date.slice(11, 16)}</p>
                  </div>
                  <div className="conteiner">
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
              </div>
            );
          })}
      </div>
    </div>
  );
};
const Navbars = () => {
  return <div></div>;
};

export default App;
