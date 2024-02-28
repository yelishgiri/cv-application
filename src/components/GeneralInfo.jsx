import { useState } from "react";
import "../styles/generalInfo.css";

export default function GeneralInfo() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  function handleFullNameChange(e) {
    setFullName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePhoneNumberChange(e) {
    setPhoneNumber(e.target.value);
  }

  function handleAddressChange(e) {
    setAddress(e.target.value);
  }

  function onFormSubmission(event) {
    event.preventDefault();
    setSubmit(true);
  }

  return (
    <>
      <div>
        <div className="personal-details-form">
          Personal Details
          <form onSubmit={onFormSubmission}>
            <label>
              Full Name
              <input
                type="text"
                value={fullName}
                onChange={handleFullNameChange}
              />
            </label>
            <label>
              Email
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
              ></input>
            </label>
            <label>
              Phone Number
              <input
                type="text"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              ></input>
            </label>
            <label>
              Address
              <input
                type="text"
                value={address}
                onChange={handleAddressChange}
              ></input>
            </label>
            <button type="submit" onClick={onFormSubmission}>
              Submit
            </button>
          </form>
        </div>
        <PrintPersonalDetails
          fullName={fullName}
          email={email}
          phoneNumber={phoneNumber}
          address={address}
        />
      </div>
    </>
  );
}

function PrintPersonalDetails({ fullName, email, phoneNumber, address }) {
  return (
    <>
      <div className="personal-details-name">{fullName}</div>
      <div className="personal-details-bottom">
        {email} {phoneNumber}
        {address}
      </div>
    </>
  );
}
