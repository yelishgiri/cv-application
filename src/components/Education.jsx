import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { IoMdAddCircle } from "react-icons/io";
import { IconContext } from "react-icons";
import "../styles/education.css";

function EducationAfterSubmission() {
  // Function to remove education from profile
  function removeEducation(e) {
    let i = universitiesInfo.findIndex(
      (uniObject) => e.target.id === uniObject.id
    );
    universitiesInfo.splice(i, 1);
    console.log(universitiesInfo);
  }

  //Function to edit Education and --- Second Part Constantly Update it
  function editEducation(e) {
    let i = universitiesInfo.findIndex(
      (uniObject) => () => e.target.id === uniObject.id
    );
  }

  // A Form For The Education Field
  // Things to fix how to make it appear as many times as the user wants
  // Then have a button to save it and display it so gotta have a display value
  // But also have to store previous version so that it actually stays it the memory
}
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
  const universitiesInfo = [];
  const [universityName, setUniversityName] = useState("");
  const [degreeName, setDegreeName] = useState("");
  const [uniLocation, setUniLocation] = useState("");
  const [uniStartDate, setUniStartDate] = useState("");
  const [uniEndDate, setUniEndDate] = useState("");
  const [toggleForm, setToggleForm] = useState(false);
  let booleanForEducation = false;

  if (universitiesInfo.length > 0) {
    booleanForEducation = true;
  }

  function handleUniversityChange(e) {
    setUniversityName(e.target.value);
  }

  function handleDegreeChange(e) {
    setDegreeName(e.target.value);
  }

  function handleUniLocationChange(e) {
    setUniLocation(e.target.value);
  }

  function handleUniStartDate(e) {
    setUniStartDate(e.target.value);
  }

  function handleUniEndDate(e) {
    setUniEndDate(e.target.value);
  }

  function handleEditing() {
    setEditing(true);
  }
  function changeToggleForm() {
    setToggleForm(true);
  }

  function onSubmission(e) {
    e.preventDefault();
    universitiesInfo.push({
      universityName: universityName,
      degreeName: degreeName,
      uniLocation: uniLocation,
      uniStartDate: uniStartDate,
      uniEndDate: uniEndDate,
      id: uuidv4(),
    });
    setToggleForm(false);

    console.log(universitiesInfo);
  }

  return (
    <>
      <div className="university-details">
        <IconContext.Provider value={{ size: "2em" }}>
          <div className="education-component">
            <div className="eudcation-header">Education</div>
            <div>
              <button type="button" onClick={changeToggleForm}>
                <IoMdAddCircle />
              </button>
            </div>
          </div>
        </IconContext.Provider>
        <div className="print-education">
          {booleanForEducation && (
            <PrintEducationDetails universityName={universitiesInfo.name} />
          )}
        </div>
      </div>
      {toggleForm && (
        <form onSubmit={onSubmission}>
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
              onChange={handleUniLocationChange}
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
          <button type="submit">Submit</button>
        </form>
      )}
    </>
  );
}

// sub goal render the education content on to the page like a editable thing in its won sub zone maybe add a state to display it but for now just add the component for it.

// on edit provide a new form and replace that new forms value by identifying info and stuff with the previous value by copying with the rest operator
