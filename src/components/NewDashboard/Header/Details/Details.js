import React from "react";
import Cookies from "js-cookie";
import Icon from "../../../../icon/Icon";
import "./Details.scss";

const Details = ({ data }) => {
  return (
    <div className="details">
      <div className="header__userinfo">
        <div className="header__userinfo-icon">
          <Icon name="user" width="4rem" height="4rem" fill="#fff" />
        </div>
        <div className="header__userinfo-email">{data.email}</div>
        <div
          className={`header__userinfo-status ${data.status === "premium" ? "header__userinfo-status--premium" : null}`}
        >
          {data.status}
        </div>
      </div>
      <button className="header__logout" onClick={() => Cookies.remove("token")}>
        Log Out
      </button>
    </div>
  );
};

export default Details;
