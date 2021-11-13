
import "./App.css";
import React, { useState, useEffect } from "react";
import logo from "./twitter.png";
import sifter from "./sito.png";
import siftin from "./logo4.png";
const App = () => {
  const [data, setData] = useState([]);
  const [checkedBTC, setCheckedBTC] = React.useState([false,'BTC']);
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
  useEffect(() => {
  
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

}, []);
  const onChangeBTC = () => {
    setCheckedBTC([!checkedBTC[0], "BTC"]);
  };
  const onChangeETH = () => {
    setCheckedETH([!checkedETH[0], "ETH"]);
  };
  const onChangeXRP = () => {
    setCheckedXRP([!checkedXRP[0], "XRP"]);
  };
  const onChangeDOT = () => {
    setCheckedDOT([!checkedDOT[0], "DOT"]);
  };
  const onChangeADA = () => {
    setCheckedADA([!checkedADA[0],"ADA"]);
  };
  const onChangeBNB = () => {
    setCheckedBNB([!checkedBNB[0], "BNB"]);
  };
  const onChangeXLM = () => {
    setCheckedXLM([!checkedXLM[0], "XLM"]);
  };
  const onChangeUNI = () => {
    setCheckedUNI([!checkedUNI[0], "UNI"]);
  };
  const onChangeTRX = () => {
    setCheckedTRX([!checkedTRX[0], "TRX"]);
  };
  const onChangeDOGE = () => {
    setCheckedDOGE([!checkedDOGE[0], "DOGE"]);
  };


  return (
    <div className="main--conteiner">
      <div>
        <header className="main--conteiner">
          <img className="logo1" src={siftin} />
        </header>
        <div className="inputcheckbox">
          <label>
            <input
              type="checkbox"
              checked={checkedBTC[0]}
              onChange={onChangeBTC}
            />
            BTC
          </label>
          <label>
            <input
              type="checkbox"
              checked={checkedETH[0]}
              onChange={onChangeETH}
            />
            ETH
          </label>
          <label>
            <input
              type="checkbox"
              checked={checkedXRP[0]}
              onChange={onChangeXRP}
            />
            XRP
          </label>
          <label>
            <input
              type="checkbox"
              checked={checkedDOT[0]}
              onChange={onChangeDOT}
            />
            DOT
          </label>
          <label>
            <input
              type="checkbox"
              checked={checkedADA[0]}
              onChange={onChangeADA}
            />
            ADA
          </label>
          <label>
            <input
              type="checkbox"
              checked={checkedBNB[0]}
              onChange={onChangeBNB}
            />
            BNB
          </label>
          <label>
            <input
              type="checkbox"
              checked={checkedDOGE[0]}
              onChange={onChangeDOGE}
            />
            DOGE
          </label>
          <label>
            <input
              type="checkbox"
              checked={checkedXLM[0]}
              onChange={onChangeXLM}
            />
            XLM
          </label>
          <label>
            <input
              type="checkbox"
              checked={checkedUNI[0]}
              onChange={onChangeUNI}
            />
            UNI
          </label>
          <label>
            <input
              type="checkbox"
              checked={checkedTRX[0]}
              onChange={onChangeTRX}
            />
            TRX
          </label>
        </div>
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
                <div className="conteiner1">
                  <img className="logo" src={logo} />
                  <p className="main--top" key={d.id}>
                    Twitter
                  </p>
                  <p> {d.date.slice(11, 16)}</p>
                </div>
                <div className="conteiner">
                  <p className="border">
                    {d.sources}
                    {": "}
                    {d.content.search("https:")
                      ? d.content.slice(0,d.content.search("https://"))
                      : d.content}
                  </p>
                  <p className="main--top">{d.indices}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default App;
