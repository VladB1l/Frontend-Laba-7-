import { Helmet } from "react-helmet";
import { useState } from "react";
import "./index.css";
import Header from "./Comonents/Header/Header";
import City from "./Comonents/City/City";
import Steam from "./Comonents/Steam/Steam";


function App() {
  const [headerToggle, setHeader] = useState(true);
  const pages = [
    { title: "City", favicon: "./img/austria_icon.svg" },
    { title: "Steam", favicon: "./img/steam_icon.svg" },
  ];
  let page;
  {
    headerToggle ? (page = pages[0]) : (page = pages[1]);
  }

  const products = [
    {
      name: "Remnant 2",
      oldprice: "1299₴",
      newprice: "909₴",
      discount: "-30%",
      img: "./img/Remnant.jpg",
    },
    {
      name: "Sons of the Forest",
      oldprice: "600₴",
      newprice: "480₴",
      discount: "-20%",
      img: "./img/Sons_ofthe_Forest.jpg",
    },
    {
      name: "Raft",
      oldprice: "279₴",
      newprice: "186₴",
      discount: "-33%",
      img: "./img/Raft.jpg",
    },
    {
      name: "Battle Bit Remastered",
      oldprice: "410₴",
      newprice: "328₴",
      discount: "-20%",
      img: "./img/BattleBit.jpg",
    },
    {
      name: "BattleField 2042",
      oldprice: "1499₴",
      newprice: "240₴",
      discount: "-84%",
      img: "./img/BattleField.jpg",
    },
    {
      name: "EA Sports FC 24",
      oldprice: "1699₴",
      newprice: "849₴",
      discount: "-50%",
      img: "./img/Fc24.jpg",
    },
  ];

  const bg = {
    backgroundColor: headerToggle ? "white" : "#1b2838",
  };


  return (
    <div style={bg} className="App">
      <Helmet>
        <title>Laba 7 | {page.title}</title>
        <link rel="icon" href={page.favicon} />
      </Helmet>
      <Header  headerToggle={headerToggle} setHeader={setHeader} />
      {headerToggle ? <City /> : <Steam products={products} />}
    </div>
  );
}

export default App;
