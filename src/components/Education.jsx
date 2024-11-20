import { useState } from "react";
import "../styles/education.css";


function PrintEducationDetails({
  universityName,
  degreeName,
  uniLocation,
  uniStartDate,
  uniEndDate,
}) {
  return (
    <>
      <div className="display-university-details">
        <div className="uni-name">{universityName}</div>
        <div className="degree-name">{degreeName}</div>
        <div className="uni-location-name">{uniLocation}</div>
        <div className="uni-dates">
          {uniStartDate} - {uniEndDate}
        </div>
      </div>
    </>
  );
}




export default function Education() {
  const [form, setForm] = useState({
    uniName: "",
    uniDegree: "",
    uniLocation: "",
    uniStartDate: "",
    uniEndDate: "",
  });

  function handleUniversityChange(e) {
    setForm({
      ...form,
      uniName: e.target.value,
    });
  }

  function handleDegreeChange(e) {
    setForm({
      ...form,
      uniDegree: e.target.value,
    });
  }

  function handleUniLocationChange(e) {
    setForm({
      ...form,
      uniLocation: e.target.value,
    });
  }

  function handleUniStartDate(e) {
    setForm({
      ...form,
      uniStartDate: e.target.value,
    });
  }

  function handleUniEndDate(e) {
    setForm({
      ...form,
      uniEndDate: e.target.value,
    });
  }

  return (
    <div className="university-details-container">
      <div className="form-container">
        <form>
          <label>
            University
            <input
              type="text"
              id="universityName"
              name="universityName"
              value={form.uniName}
              onChange={handleUniversityChange}
            />
          </label>
          <label>
            Degree
            <input
              type="text"
              id="degreeName"
              name="degreeName"
              value={form.uniDegree}
              onChange={handleDegreeChange}
            />
          </label>
          <label>
            Location
            <input
              type="text"
              id="uniLocation"
              name="uniLocation"
              value={form.uniLocation}
              onChange={handleUniLocationChange}
            />
          </label>
          <label>
            Start Date
            <input
              type="date"
              id="uniStartDate"
              name="uniStartDate"
              value={form.uniStartDate}
              onChange={handleUniStartDate}
            />
          </label>
          <label>
            End Date
            <input
              type="date"
              id="uniEndDate"
              name="uniEndDate"
              value={form.uniEndDate}
              onChange={handleUniEndDate}
            />
          </label>
        </form>
      </div>

      <div className="display-education-container">
        <PrintEducationDetails
          universityName={form.uniName}
          degreeName={form.uniDegree}
          uniLocation={form.uniLocation}
          uniStartDate={form.uniStartDate}
          uniEndDate={form.uniEndDate}
        />
      </div>
    </div>
  );
}
