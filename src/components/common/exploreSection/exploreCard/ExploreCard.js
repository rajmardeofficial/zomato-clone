import React from "react";
import "./exploreCard.css";
function ExploreCard({ rest }) {
  const name = rest?.info?.name ?? "";
  const coverImg = rest?.info?.image?.url;
  const deliveryTime = rest?.order?.deliveryTime;
  const rating = rest?.info?.rating?.rating_text;
  const approxPrice = rest?.info?.cfo?.text;
  const offers = rest?.bulkOffers ?? [];
  const cuisines = rest?.info?.cuisine?.map((item) => item.name).slice(0, 3);
  const bottomContainers = rest?.bottomContainers;
  const goldOff = rest?.gold?.text;
  const proOff = offers.length > 1 ? offers[0].text : null;
  const discount =
    offers.length > 1
      ? offers[1].text
      : offers.length === 1
      ? offers[0].text
      : null;

  return (
    <div className="explore-card cur-pointer">
      <div className="explore-card-cover">
        <img src={coverImg} alt={name} className="explore-card-img" />
        <div className="delivery-time">{deliveryTime}</div>
        {proOff && <div className="pro-off">{proOff}</div>}
        {goldOff && <div className="gold-off absolute-center">{goldOff}</div>}
        {discount && <div className="discount absolute-center">{discount}</div>}
      </div>
      <div className="res-row">
        <div className="res-name">{name}</div>
        {rating && (
          <div className="res-rating absolute-center">
            {rating}
            <i className="fi fi-rr-star absolute-center"></i>
          </div>
        )}
      </div>
      <div className="res-row">
        {cuisines.length && (
          <div className="res-cuisine">
            {cuisines.map((item, i) => {
              return (
                <span key={i} className="res-cuisine-tag">
                  {item}
                  {i !== cuisines.length - 1 && ", "}
                </span>
              );
            })}
          </div>
        )}
        {approxPrice && <div className="res-price">{approxPrice}</div>}
      </div>
      {bottomContainers.length > 0 && (
        <div>
          <div className="card-seperator">
            <div className="explore-bottom">
              <img
                src={bottomContainers[0]?.image?.url}
                alt={bottomContainers[0]?.text}
                style={{ height: "18px" }}
              />
              <div className="res-bottom-text">{bottomContainers[0]?.text}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ExploreCard;
