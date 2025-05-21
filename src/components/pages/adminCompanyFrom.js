import { useState, useEffect } from "react";

export default function CompanyForm({ onSubmit, initialData, clearEdit }) {
  const [form, setForm] = useState({
    name: "",
    cashlessGarages: "",
    claimsSettled: "",
    zeroDepClaims: "",
    startingPriceINR: ""
  });

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ name: "", cashlessGarages: "", claimsSettled: "", zeroDepClaims: "", startingPriceINR: "" });
    clearEdit?.();
  };

  return (
    <form onSubmit={handleSubmit} className="company-form">
      <input name="name" value={form.name} onChange={handleChange} placeholder="Company Name" required />
      <input name="cashlessGarages" value={form.cashlessGarages} onChange={handleChange} placeholder="Cashless Garages" required />
      <input name="claimsSettled" value={form.claimsSettled} onChange={handleChange} placeholder="Claims Settled" required />
      <input name="zeroDepClaims" value={form.zeroDepClaims} onChange={handleChange} placeholder="Zero Dep Claims" required />
      <input name="startingPriceINR" value={form.startingPriceINR} onChange={handleChange} placeholder="Starting Price (INR)" required />
      <button type="submit">{initialData ? "Update" : "Add"} Company</button>
    </form>
  );
}
