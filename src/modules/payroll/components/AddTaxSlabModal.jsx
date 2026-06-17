import { useState } from "react";

function AddTaxSlabModal({ onClose, onSave, editData }) {
  const [form, setForm] = useState(
    editData || {
      slabName: "",
      minAmount: "",
      maxAmount: "",
      percentage: "",
      taxregimeType: "NEW",
      active: true,
    },
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: name === "active" ? value === "true" : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <h3>{editData ? "Edit Tax Slab" : "Add Tax Slab"}</h3>

        <form onSubmit={handleSubmit}>
          <input
            className="form-control mb-2"
            name="slabName"
            placeholder="Slab Name"
            value={form.slabName}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            className="form-control mb-2"
            name="minAmount"
            placeholder="Minimum Amount"
            value={form.minAmount}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            className="form-control mb-2"
            name="maxAmount"
            placeholder="Maximum Amount"
            value={form.maxAmount}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            className="form-control mb-2"
            name="percentage"
            placeholder="Tax Percentage"
            value={form.percentage}
            onChange={handleChange}
            required
          />

          <select
            className="form-control mb-2"
            name="taxregimeType"
            value={form.taxregimeType}
            onChange={handleChange}
          >
            <option value="OLD">OLD</option>
            <option value="NEW">NEW</option>
          </select>

          <select
            className="form-control mb-3"
            name="active"
            value={form.active}
            onChange={handleChange}
          >
            <option value={true}>Active</option>

            <option value={false}>Inactive</option>
          </select>

          <button type="submit" className="btn btn-success me-2">
            Save
          </button>

          <button type="button" className="btn btn-secondary" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTaxSlabModal;
