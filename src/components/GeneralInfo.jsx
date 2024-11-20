import { useState } from "react";
import "../styles/generalInfo.css";

export default function GeneralInfo() {
  const [form, setForm ] = useState({
    firstName : "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });


  function handleFirstNameChange(e){
    setForm({
      ...form,
      firstName: e.target.value,
  });
  }

  function handleLastNameChange(e){
    setForm({
      ...form,
      lastName: e.target.value,
  });
  }
  function handleEmailChange(e){
    setForm({
      ...form,
      email: e.target.value,
  });
  }
  function handlePhoneNumberChange(e){
    setForm({
      ...form,
      phoneNumber: e.target.value,
  });
  }
  function handleAddressChange(e){
    setForm({
      ...form,
      address: e.target.value,
  });
  }


  function onFormSubmission(event) {
    event.preventDefault();
    setSubmit(true);
  }

  return (
    <>
    <div className="personal-details-container">
      <div className="personal-details-form">
        <h2>Personal Details</h2>
        <form onSubmit={onFormSubmission}>
          <label>
            First Name
            <input
              type="text"
              value={form.firstName}
              onChange={handleFirstNameChange}
            />
          </label>
          <label>
            Last Name
            <input
              type="text"
              value={form.lastName}
              onChange={handleLastNameChange}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              value={form.email}
              onChange={handleEmailChange}
            ></input>
          </label>
          <label>
            Phone Number
            <input
              type="text"
              value={form.phoneNumber}
              onChange={handlePhoneNumberChange}
            ></input>
          </label>
          <label>
            Address
            <input
              type="text"
              value={form.address}
              onChange={handleAddressChange}
            ></input>
          </label>
        </form>
      </div>
      <div className="personal-details-display">
        <PrintPersonalDetails
          firstName={form.firstName}
          lastName={form.lastName}
          email={form.email}
          phoneNumber={form.phoneNumber}
          address={form.address}
        />
      </div>
    </div>
  </>
  );
}

function PrintPersonalDetails({ firstName,lastName, email, phoneNumber, address }) {
  return (
    <>
      <div className="personal-details-name">{firstName} {lastName}</div>
      <div className="personal-details-bottom">
        {email} {phoneNumber} {address}
      </div>
    </>
  );
}
