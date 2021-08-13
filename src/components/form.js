import React, { useState, useEffect } from "react";
import CustomizedHook from "./CustomizedHook";

function Form({ event, setEvent }) {
  const [formData, setFormData] = useState({});
  useEffect(() => {
    setFormData(event);
  }, [event]);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <h4 align="left">{event.title}</h4>
      <p className="text-muted m-3" align="left">
        Creé le{" "}
        {event.creationDate !== undefined
          ? event.creationDate.substring(0, 10)
          : null}{" "}
        à{" "}
        {event.creationDate !== undefined
          ? event.creationDate.substring(11, 16)
          : null}{" "}
        par {event.createdBy}
      </p>
      <form>
        <div className="mb-3">
          <label htmlFor="titre" className="form-label">
            Titre
          </label>
          <input
            type="text"
            className="form-control"
            id="titre"
            placeholder="Enter title"
            value={formData.title}
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descrition" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            name="description"
            value={formData.description}
          ></textarea>
        </div>
        <div className="row">
          <div className="col">
            <input
              type="date"
              className="form-control"
              placeholder="Enter Date"
              aria-label="Date"
              name="date"
              value={
                formData.creationDate !== undefined
                  ? formData.creationDate.substring(0, 10)
                  : null
              }
            />
          </div>
          <div className="col">
            <input
              type="time"
              className="form-control"
              placeholder="Enter Time"
              aria-label="Last name"
              name="time"
              value={
                formData.creationDate !== undefined
                  ? event.creationDate.substring(11, 16)
                  : null
              }
            />
          </div>
        </div>
        <div classNameName="mb-3">
          <label htmlFor="statut" className="form-label">
            Nom du statut
          </label>
          <select
            id="statut"
            className="form-select"
            aria-label="Default select example"
            name="statut"
            onChange={handleChange}
          >
            <option selected>{event.statusName}</option>
            <option value="1">Open</option>
            <option value="2">Closed</option>
            <option value="3">InProgress</option>
          </select>
        </div>
        <div classNameName="mb-3">
          <label htmlFor="employé" className="form-label">
            Employé Indiqué
          </label>
          <select
            id="employé"
            className="form-select"
            aria-label="Default select example"
          >
            <option selected>
              {" "}
              {event.creationDate !== undefined
                ? event.involvedEmployee.firstname
                : null}
              {event.creationDate !== undefined
                ? event.involvedEmployee.lastname
                : null}{" "}
              {event.creationDate !== undefined
                ? `(${event.involvedEmployee.id})`
                : null}
            </option>
            <option value="1">Amara Ivens (8139)</option>
            <option value="2">Adelle Thornburg (1868)</option>
          </select>
        </div>
        <label htmlFor="descrition" className="form-label">
          Témoins
        </label>
        <CustomizedHook />
      </form>
      <button onClick={() => setEvent(formData)}>Submit</button>
    </div>
  );
}
export default Form;
