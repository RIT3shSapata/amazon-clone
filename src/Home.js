import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/AugART/GW/Hero/ShopNow/fst/unrec/PC_Hero_-_Unrec_experimentEnglish_Shop_now1500X600._CB408299558_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="1231"
          title={`ASUS ROG Zephyrus G14, 14" FHD 120Hz, Ryzen 5 4600HS, GTX 1650Ti 4GB GDDR6 Graphics, Gaming Laptop (8GB/1TB SSD/MS Office 2019/Windows 10/Eclipse Gray/Without Anime Matrix/1.6 Kg), GA401II-HE169TS`}
          price={97620}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81i1XE-J04L._SY450_.jpg"
        />
        <Product
          id="1232"
          title="The Lean Startup: How constant Innovation Creates Radically Successful Businesses"
          price={615}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="1233"
          title={`Sony WH-1000XM3 Industry Leading Wireless Noise Cancelling Headphones`}
          price={19990}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61D4Z3yKPAL._SL1500_.jpg"
        />
        <Product
          id="1234"
          title={`OnePlus 8 (Onyx Black 8GB RAM+128GB Storage)`}
          price={44999}
          rating={5}
          image="https://m.media-amazon.com/images/I/61UeA7TUrkL._AC_UY218_.jpg"
        />
        <Product
          id="1235"
          title="Lifebuoy Antibacterial Germ Kill Spray (No Gas) "
          price={135}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51-2ILFH01L._SL1000_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="1236"
          title="LG 164 cm (65 inches) 4K Ultra HD Smart NanoCell TV 65SM9000PTA (Black) (2019 Model)"
          price={164999}
          rating={5}
          image="https://m.media-amazon.com/images/I/81P4jFG8XBL._AC_UY218_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
