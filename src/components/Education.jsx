import { useState } from "react";

export default function Education() {
  const [universityName, setUniversityName] = useState("");
  const [degreeName, setDegreeName] = useState("");
  const [uniLocation, setUniLocation] = useState("");
  const [uniStartDate, setUniStartDate] = useState("");
  const [uniEndDate, setUniEndDate] = useState("");

  function handleUniversityChange(e) {
    setUniversityName(e.target.value);
  }

  function handleDegreeChange(e) {
    setDegreeName(e.target.value);
  }

  function handleUniLocatioChange(e) {
    setUniLocation(e.target.value);
  }

  function handleUniStartDate(e) {
    setUniStartDate(e.target.value);
  }

  function handleUniEndDate(e) {
    setUniEndDate(e.target.value);
  }
  return (
    // A Form For The Education Field
    // Things to fix how to make it appear as many times as the user wants
    // Then have a button to save it and display it so gotta have a display value
    // But also have to store previous version so that it actually stays it the memory
    <div>
      <label>
        University
        <input
          type="text"
          id="universityName"
          name="universityName"
          value={universityName}
          onChange={handleUniversityChange}
        />
      </label>
      <label>
        Degree
        <input
          type="text"
          id="degreeName"
          name="degreeName"
          value={degreeName}
          onChange={handleDegreeChange}
        />
      </label>
      <label>
        Location
        <input
          type="text"
          id="uniLocation"
          name="uniLocation"
          value={uniLocation}
          onChange={handleUniLocatioChange}
        />
      </label>
      <label>
        Start Date
        <input
          type="date"
          id="uniStartDate"
          name="uniStartDate"
          value={uniStartDate}
          onChange={handleUniStartDate}
        />
      </label>
      <label>
        End Date
        <input
          type="date"
          id="uniEndDate"
          name="uniEndDate"
          value={uniEndDate}
          onChange={handleUniEndDate}
        />
      </label>
    </div>
  );
}
