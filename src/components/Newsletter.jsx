import React, { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import Button from "./Button";
import axios from "axios";

const Newsletter = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Створюємо FormData об'єкт для відправки даних
    const formDataToSend = new FormData();
    formDataToSend.append("first_name", formData.first_name);
    formDataToSend.append("last_name", formData.last_name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("_wpcf7_unit_tag", "d7fb565");

    const apiUrl =
      "http://local.loc/wp-json/contact-form-7/v1/contact-forms/12/feedback";

    axios
      .post(apiUrl, formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });

    setFormData({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
    });
  };

  return (
    <section className="newsletter container">
      <SectionTitle text="Ready for Next NFT Drop?" />
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <div className="newsletter-inputs">
          <input
            className="newsletter-input"
            type="text"
            name="first_name"
            placeholder="First Name"
            required
            aria-label="First Name"
            value={formData.first_name}
            onChange={handleChange}
          />
          <input
            className="newsletter-input"
            type="text"
            name="last_name"
            placeholder="Last Name"
            required
            aria-label="Last Name"
            value={formData.last_name}
            onChange={handleChange}
          />
          <input
            className="newsletter-input"
            type="email"
            name="email"
            placeholder="info@gmail.com"
            required
            aria-label="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            className="newsletter-input"
            type="tel"
            name="phone"
            placeholder="Phone number"
            aria-label="Phone Number"
            title="Phone number format: 123-456-7890"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <Button text="Subscribe" type="submit" big yellow />
      </form>
    </section>
  );
};

export default Newsletter;
