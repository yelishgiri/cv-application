function Experience({ form, setForm }) {
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
        <label>Position</label>
        <input
          type="text"
          name="jobPosition"
          value={form.jobPosition}
          onChange={handleChange}
        />
        <label>Organization</label>
        <input
          type="text"
          name="jobOrganization"
          value={form.jobOrganization}
          onChange={handleChange}
        />
        <label>Location</label>
        <input
          type="text"
          name="jobLocation"
          value={form.jobLocation}
          onChange={handleChange}
        />
        <label>Start Date</label>
        <input
          type="date"
          name="jobStartDate"
          value={form.jobStartDate}
          onChange={handleChange}
        />
        <label>End Date</label>
        <input
          type="date"
          name="jobEndDate"
          value={form.jobEndDate}
          onChange={handleChange}
        />
      </form>

      <div className="cv-details">
        <div className="cv-details-item">
          <span>Position:</span> {form.jobPosition}
        </div>
        <div className="cv-details-item">
          <span>Organization:</span> {form.jobOrganization}
        </div>
        <div className="cv-details-item">
          <span>Location:</span> {form.jobLocation}
        </div>
        <div className="cv-details-item">
          <span>Dates:</span> {form.jobStartDate} - {form.jobEndDate}
        </div>
      </div>
    </div>
  );
}

export default Experience;
