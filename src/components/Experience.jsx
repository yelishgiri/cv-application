import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { IconContext } from "react-icons";

export default function Experience() {
  return (
    <div className="experience-detail">
      <IconContext.Provider value={{ size: "1em" }}>
        <div className="experience-component">
          <div className="experience-header">Experience</div>
          <div>
            <button type="button">
              <IoMdAddCircle />
            </button>
          </div>
        </div>
      </IconContext.Provider>
      <form>
        <label>
          Company Name
          <input type="text" />
        </label>
        <label>
          Position
          <input type="text" />
        </label>
        <label>
          Location
          <input type="text" />
        </label>
        <label>
          Start Date
          <input type="date" />
        </label>
        <label>
          End Date
          <input type="date" />
        </label>
        <label>
          Description
          <input type="text" />
        </label>
      </form>
    </div>
  );
}
