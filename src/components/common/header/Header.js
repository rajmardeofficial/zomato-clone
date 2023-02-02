import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="max-width header">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="zomato logo"
        className="header-logo"
      />
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <i className="fi fi-rr-marker absolute-center location-icon"></i>
              <div>Bangalore</div>
            </div>
            <i className="fi fi-rr-caret-down absolute-center"></i>
          </div>
          <div className="location-search-seperator"></div>
          <div className="header-searchBar">
            <i className="fi fi-rr-search absolute-center search-icon"></i>
            <input
              type="text"
              className="search-input"
              placeholder="Search for restaurant, cuisine or a dish"
            />
          </div>
        </div>
        <div className="profile-wrapper">
          <img
            src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairBigHair&accessoriesType=Round&hairColor=PastelPink&facialHairType=BeardLight&facialHairColor=Brown&clotheType=GraphicShirt&clotheColor=Blue01&graphicType=Diamond&eyeType=Wink&eyebrowType=UpDown&mouthType=Concerned&skinColor=Light"
            alt=""
            className="header-profile-image"
          />
          <span className="header-username">Aryan</span>
          <i className="fi fi-rr-angle-down absolute-center profile-opt-icon"></i>
        </div>
      </div>
    </div>
  );
}

export default Header;
