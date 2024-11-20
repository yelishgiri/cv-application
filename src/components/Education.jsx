function Education({ form, setForm }) {
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
        <label>University</label>
        <input
          type="text"
          name="uniName"
          value={form.uniName}
          onChange={handleChange}
        />
        <label>Degree</label>
        <input
          type="text"
          name="uniDegree"
          value={form.uniDegree}
          onChange={handleChange}
        />
        <label>Location</label>
        <input
          type="text"
          name="uniLocation"
          value={form.uniLocation}
          onChange={handleChange}
        />
        <label>Start Date</label>
        <input
          type="date"
          name="uniStartDate"
          value={form.uniStartDate}
          onChange={handleChange}
        />
        <label>End Date</label>
        <input
          type="date"
          name="uniEndDate"
          value={form.uniEndDate}
          onChange={handleChange}
        />
      </form>

      <div className="cv-details">
        <div className="cv-details-item">
          <span>University:</span> {form.uniName}
        </div>
        <div className="cv-details-item">
          <span>Degree:</span> {form.uniDegree}
        </div>
        <div className="cv-details-item">
          <span>Location:</span> {form.uniLocation}
        </div>
        <div className="cv-details-item">
          <span>Dates:</span> {form.uniStartDate} - {form.uniEndDate}
        </div>
      </div>
    </div>
  );
}

export default Education;
