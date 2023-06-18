import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../actions/cartActions";
import "../css/Checkout.css";

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    payment: "",
  });
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Perform order placement logic using formData
      // Example: sendOrder(formData);
      dispatch(clearCart());
      alert("Order placed successfully!");
      setFormData({
        name: "",
        address: "",
        payment: "",
      });
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (formData.name.trim() === "") {
      errors.name = "Name is required";
    }
    if (formData.address.trim() === "") {
      errors.address = "Address is required";
    }
    if (formData.payment.trim() === "") {
      errors.payment = "Payment is required";
    }
    return errors;
  };

  return (
    <div className="checkout-form">
      <h1 className="checkout-title">Checkout</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? "input-error" : ""}
        />
        {errors.name && <div className="error">{errors.name}</div>}
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className={errors.address ? "input-error" : ""}
        />
        {errors.address && <div className="error">{errors.address}</div>}
        <input
          type="text"
          name="payment"
          placeholder="Payment"
          value={formData.payment}
          onChange={handleChange}
          className={errors.payment ? "input-error" : ""}
        />
        {errors.payment && <div className="error">{errors.payment}</div>}
        <button type="submit" className="place-order-btn">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
