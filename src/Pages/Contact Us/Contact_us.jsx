import React, { useState } from "react";
import styles from "./Styling/Contact_us.module.css";

const Contact_us = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Web Development",
    about: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <h2 className={styles.heading}>Request a Service</h2>

      <label className={styles.label}>Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className={styles.input}
        required
      />

      <label className={styles.label}>Work Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className={styles.input}
        required
      />

      <label className={styles.label}>Phone Number</label>
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        className={styles.input}
        required
      />

      <label className={styles.label}>Service</label>
      <select
        name="service"
        value={formData.service}
        onChange={handleChange}
        className={styles.select}
      >
        <option>Web Development</option>
        <option>App Development</option>
        <option>Blockchain</option>
      </select>

      <label className={styles.label}>Tell Us About Yourself (Optional)</label>
      <textarea
        name="about"
        value={formData.about}
        onChange={handleChange}
        className={styles.textarea}
        rows="3"
      ></textarea>

      <button type="submit" className={styles.button}>
        Send Request
      </button>
    </form>
  );
};

export default Contact_us;
