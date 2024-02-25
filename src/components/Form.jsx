import { useState } from "react";

function Form() {
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
  return (
    <div>
      <div className="personal-details-form">
        <form>
          <label>
            Full Name:
            <input
              type="text"
              value={fullName}
              onChange={handleFullNameChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
            ></input>
          </label>
          <label>
            Phone Number:
            <input
              type="text"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            ></input>
          </label>
          <label>
            Address:
            <input
              type="text"
              value={address}
              onChange={handleAddressChange}
            ></input>
          </label>
        </form>
      </div>
    </div>
  );
}
export default function CV({ fullName }) {
  return <div> I am {fullName}</div>;
}
