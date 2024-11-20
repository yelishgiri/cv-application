function GeneralInfo({ form, setForm }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <div>
      <form className="cv-form">
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
        />
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <label>Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          value={form.phoneNumber}
          onChange={handleChange}
        />
        <label>Address</label>
        <input
          type="text"
          name="address"
          value={form.address}
          onChange={handleChange}
        />
      </form>

      <div className="cv-details">
        <div className="cv-details-item">
          <span>Name:</span> {form.firstName} {form.lastName}
        </div>
        <div className="cv-details-item">
          <span>Email:</span> {form.email}
        </div>
        <div className="cv-details-item">
          <span>Phone:</span> {form.phoneNumber}
        </div>
        <div className="cv-details-item">
          <span>Address:</span> {form.address}
        </div>
      </div>
    </div>
  );
}

export default GeneralInfo;
