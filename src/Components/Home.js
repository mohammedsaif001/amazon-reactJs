import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="Amazon Background"
          className="home__image"
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses  (Paperback, Eric Ries)"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY409_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="KenWood kMix Stand Mixer for Banking, Stylish Kitchen Mizer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR2hixsoLE6Rh9b_UrhwPJs5geTM8Gf-FaNoQy4fS1u7nuyLuaoQ-6mugpD7OTtRmfy-_nG9CqQYsCo2eoN7SviqQr-1QVEf9NX2_isOJ1g&usqp=CAE"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Apple Watch Series 5 GPS + Cellular - 40mm Space Grey Aluminium Case with Black Sport Bandr"
            price={198.99}
            rating={3}
            image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTJ-6NZnmTcVU2IgzdYTC8ou1OnxtpwbO_rDTqpcr9r4_osFAZL9vnMeq0USMpsr8Jypk4ZLWujnjAvEObjUQq4pkBbPjuSPX0mNGeQf-Qci2tCtGubHglq3w&usqp=CAE"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd Generation) | Smark Speaker with Alexa , Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS81AYPIPgOga4MCN8F4XwCEKIDfkHItzaB35tohmI6m7l3ySGt7r-K8yT6onhsNQeEGujvrLaSEYmArtB6tT2kKWyxWCMob4GvZXQTA9C_ipjtPuKpZM26fQ&usqp=CAE"
          />
          <Product
            id="3254354345"
            title="New Apple ipad Pro (12.9-Inch, Wifi, 128GB) - Silver(4th Gen)"
            price={598.99}
            rating={4}
            image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR16MrO2DML-EJFtnzFEpSjEt3Z-zOre_vyxjCdXpyqfN8isshzgjAuKsngzx398V2ZqyWmu2nQCB95ziWeCQFel7Oug05NHF5N117OSV0VqAdgMhuVeBfTiA&usqp=CAE"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Dual WQHD 5120 x 1440, 120Hz, HDMI, Displayport, USB"
            price={198.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/81rus0UFhsL.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
