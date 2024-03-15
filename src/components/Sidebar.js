import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import lang from "../utils/languageConstants";
import icons from "../utils/icons";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const langKey = useSelector((store) => store.config.lang);

  const videoTypes = ["shorts", "videos", "live"];
  const subscriptions = ["music", "sports", "gaming", "movies"];

  return (
    isMenuOpen && (
      <div className="p-5 shadow-lg w-48 min-w-44">
        <ul>
          <li>
            <Link to="/" className="font-bold">
              {lang[langKey]["home"]}
            </Link>
          </li>
          {videoTypes.map((item) => (
            <li
              key={item}
              className="cursor-pointer px-2 py-1 hover:border-black hover:bg-gray-200 rounded-md"
            >
              {icons[item]} {lang[langKey][item] || item}
            </li>
          ))}
        </ul>
        <h1 className="font-bold pt-5">{lang[langKey]["subscriptons"]}</h1>
        <ul>
          {subscriptions.map((item, ind) => (
            <li
              key={item + ind}
              className="cursor-pointer px-2 py-1 hover:border-black hover:bg-gray-200 rounded-md"
            >
              {icons[item]} {lang[langKey][item] || item}
            </li>
          ))}
        </ul>
        <h1 className="font-bold pt-5">{lang[langKey]["watch later"]}</h1>
        <ul>
          {subscriptions.map((item, ind) => (
            <li
              key={item + ind}
              className="cursor-pointer px-2 py-1 hover:border-black hover:bg-gray-200 rounded-md"
            >
              {icons[item]} {lang[langKey][item] || item}
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default Sidebar;
