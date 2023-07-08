import React from "react";
import { FaEnvelope } from "react-icons/fa";

const TopBarDashboard = () => {
  return (
    <>
      <div className="p-4 bg-light">
        <div className="continer-fluid d-flex">
          <form class="d-flex" role="search">
            <input
              class="form-control text-black "
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-danger" type="submit">
              Search
            </button>
          </form>

          <span className="px-3">
            <FaEnvelope />
          </span>
          <span>smarttogater@gmail.com</span>
        </div>
      </div>
    </>
  );
};

export default TopBarDashboard;
