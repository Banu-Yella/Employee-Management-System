import { useState } from "react";
import { saveTaxSlab } from "../services/taxService";

function AddTaxSlabModal({ onClose, onSuccess }) {
  const [taxSlab, setTaxSlab] = useState({
    slabName: "",
    minAmount: "",
    maxAmount: "",
    percentage: "",
    taxregimeType: "NEW",
    active: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTaxSlab({
      ...taxSlab,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await saveTaxSlab(taxSlab);

      onSuccess();
      onClose();
    } catch (error) {
      console.error(error);
      alert("Failed to save tax slab");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <div className="modal-header">
          <h4>Add Tax Slab</h4>

          <button className="btn-close" onClick={onClose}>
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            className="form-control mb-3"
            placeholder="Slab Name"
            name="slabName"
            value={taxSlab.slabName}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            className="form-control mb-3"
            placeholder="Minimum Amount"
            name="minAmount"
            value={taxSlab.minAmount}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            className="form-control mb-3"
            placeholder="Maximum Amount"
            name="maxAmount"
            value={taxSlab.maxAmount}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            className="form-control mb-3"
            placeholder="Tax Percentage"
            name="percentage"
            value={taxSlab.percentage}
            onChange={handleChange}
            required
          />

          <select
            className="form-control mb-3"
            name="taxregimeType"
            value={taxSlab.taxregimeType}
            onChange={handleChange}
          >
            <option value="OLD">OLD</option>
            <option value="NEW">NEW</option>
          </select>

          <button type="submit" className="btn btn-success w-100">
            Save Tax Slab
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTaxSlabModal;
