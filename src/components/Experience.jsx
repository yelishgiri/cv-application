import { useState } from "react";

export default function Experience() {
  return (
    <div>
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
