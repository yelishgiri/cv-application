import React, { useState } from "react";
import GeneralInfo from "../src/components/GeneralInfo.jsx";
import Education from "../src/components/Education.jsx";
import Experience from "../src/components/Experience.jsx";
import "./App.css";


export default function CV() {
  const [generalInfo, setGeneralInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const [education, setEducation] = useState({
    uniName: "",
    uniDegree: "",
    uniLocation: "",
    uniStartDate: "",
    uniEndDate: "",
  });

  const [experience, setExperience] = useState({
    jobPosition: "",
    jobOrganization: "",
    jobLocation: "",
    jobStartDate: "",
    jobEndDate: "",
  });

  const handleGeneralInfoChange = (e) => {
    const { name, value } = e.target;
    setGeneralInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleEducationChange = (e) => {
    const { name, value } = e.target;
    setEducation((prev) => ({ ...prev, [name]: value }));
  };

  const handleExperienceChange = (e) => {
    const { name, value } = e.target;
    setExperience((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="cv-container">
      <div className="cv-form-section">
        <h2>Personal Details</h2>
        <form className="cv-form">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={generalInfo.firstName}
            onChange={handleGeneralInfoChange}
          />
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={generalInfo.lastName}
            onChange={handleGeneralInfoChange}
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={generalInfo.email}
            onChange={handleGeneralInfoChange}
          />
          <label>Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={generalInfo.phoneNumber}
            onChange={handleGeneralInfoChange}
          />
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={generalInfo.address}
            onChange={handleGeneralInfoChange}
          />
        </form>

        <h2>Education</h2>
        <form className="cv-form">
          <label>University</label>
          <input
            type="text"
            name="uniName"
            value={education.uniName}
            onChange={handleEducationChange}
          />
          <label>Degree</label>
          <input
            type="text"
            name="uniDegree"
            value={education.uniDegree}
            onChange={handleEducationChange}
          />
          <label>Location</label>
          <input
            type="text"
            name="uniLocation"
            value={education.uniLocation}
            onChange={handleEducationChange}
          />
          <label>Start Date</label>
          <input
            type="text"
            name="uniStartDate"
            value={education.uniStartDate}
            onChange={handleEducationChange}
          />
          <label>End Date</label>
          <input
            type="text"
            name="uniEndDate"
            value={education.uniEndDate}
            onChange={handleEducationChange}
          />
        </form>

        <h2>Experience</h2>
        <form className="cv-form">
          <label>Position</label>
          <input
            type="text"
            name="jobPosition"
            value={experience.jobPosition}
            onChange={handleExperienceChange}
          />
          <label>Organization</label>
          <input
            type="text"
            name="jobOrganization"
            value={experience.jobOrganization}
            onChange={handleExperienceChange}
          />
          <label>Location</label>
          <input
            type="text"
            name="jobLocation"
            value={experience.jobLocation}
            onChange={handleExperienceChange}
          />
          <label>Start Date</label>
          <input
            type="text"
            name="jobStartDate"
            value={experience.jobStartDate}
            onChange={handleExperienceChange}
          />
          <label>End Date</label>
          <input
            type="text"
            name="jobEndDate"
            value={experience.jobEndDate}
            onChange={handleExperienceChange}
          />
        </form>
      </div>

      <div className="cv-preview-section">
        <div className="cv-preview-header">
          <h1>
            {generalInfo.firstName} {generalInfo.lastName}
          </h1>
          <p>{generalInfo.email} | {generalInfo.phoneNumber}</p>
          <p>{generalInfo.address}</p>
        </div>

        <h2>Education</h2>
        <div className="cv-details">
          <div className="cv-item">
            <span>University:</span> {education.uniName}
          </div>
          <div className="cv-item">
            <span>Degree:</span> {education.uniDegree}
          </div>
          <div className="cv-item">
            <span>Location:</span> {education.uniLocation}
          </div>
          <div className="cv-item">
            <span>Dates:</span> {education.uniStartDate} - {education.uniEndDate}
          </div>
        </div>

        <h2>Experience</h2>
        <div className="cv-details">
          <div className="cv-item">
            <span>Position:</span> {experience.jobPosition}
          </div>
          <div className="cv-item">
            <span>Organization:</span> {experience.jobOrganization}
          </div>
          <div className="cv-item">
            <span>Location:</span> {experience.jobLocation}
          </div>
          <div className="cv-item">
            <span>Dates:</span> {experience.jobStartDate} - {experience.jobEndDate}
          </div>
        </div>
      </div>
    </div>
  );
}
