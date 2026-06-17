import { useEffect, useState } from "react";

import AddTaxSlabModal from "../components/AddTaxSlabModal";

import {
  getAllTaxSlabs,
  saveTaxSlab,
  updateTaxSlab,
  deleteTaxSlab,
} from "../services/taxSlabService";

function TaxSlabs() {
  const [taxSlabs, setTaxSlabs] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const [selectedTaxSlab, setSelectedTaxSlab] = useState(null);

  useEffect(() => {
    loadTaxSlabs();
  }, []);

  const loadTaxSlabs = async () => {
    const response = await getAllTaxSlabs();

    setTaxSlabs(response.data || []);
  };

  const handleSave = async (data) => {
    try {
      if (selectedTaxSlab) {
        await updateTaxSlab(selectedTaxSlab.taxid, data);
      } else {
        await saveTaxSlab(data);
      }

      setShowModal(false);
      setSelectedTaxSlab(null);

      loadTaxSlabs();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this tax slab?")) {
      return;
    }

    await deleteTaxSlab(id);

    loadTaxSlabs();
  };

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between mb-3">
        <h2>Tax Slab Management</h2>

        <button
          className="btn btn-primary"
          onClick={() => {
            setSelectedTaxSlab(null);
            setShowModal(true);
          }}
        >
          Add Tax Slab
        </button>
      </div>

      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Slab</th>
            <th>Min</th>
            <th>Max</th>
            <th>Tax %</th>
            <th>Regime</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {taxSlabs.map((slab) => (
            <tr key={slab.taxid}>
              <td>{slab.taxid}</td>

              <td>{slab.slabName}</td>

              <td>{slab.minAmount}</td>

              <td>{slab.maxAmount}</td>

              <td>{slab.percentage}%</td>

              <td>{slab.taxregimeType}</td>

              <td>{slab.active ? "Active" : "Inactive"}</td>

              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => {
                    setSelectedTaxSlab(slab);
                    setShowModal(true);
                  }}
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(slab.taxid)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <AddTaxSlabModal
          onClose={() => setShowModal(false)}
          onSave={handleSave}
          editData={selectedTaxSlab}
        />
      )}
    </div>
  );
}

export default TaxSlabs;
