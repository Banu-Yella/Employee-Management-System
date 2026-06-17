import { useEffect, useState } from "react";

import AddTaxSlabModal from "../components/AddTaxSlabModal";

import { getAllTaxSlabs, deleteTaxSlab } from "../services/taxService";

function TaxSlabList() {
  const [taxSlabs, setTaxSlabs] = useState([]);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    loadTaxSlabs();
  }, []);

  const loadTaxSlabs = async () => {
    try {
      const response = await getAllTaxSlabs();

      setTaxSlabs(response.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Delete this tax slab?");

    if (!confirmDelete) return;

    try {
      await deleteTaxSlab(id);

      loadTaxSlabs();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container-fluid p-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Tax Slab Management</h2>

        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          Add Tax Slab
        </button>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <table className="table table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Slab</th>
                <th>Min Amount</th>
                <th>Max Amount</th>
                <th>Tax %</th>
                <th>Regime</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {taxSlabs.length > 0 ? (
                taxSlabs.map((slab) => (
                  <tr key={slab.taxid}>
                    <td>{slab.taxid}</td>

                    <td>{slab.slabName}</td>

                    <td>₹{slab.minAmount}</td>

                    <td>₹{slab.maxAmount}</td>

                    <td>{slab.percentage}%</td>

                    <td>{slab.taxregimeType}</td>

                    <td>{slab.active ? "Active" : "Inactive"}</td>

                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(slab.taxid)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center">
                    No Tax Slabs Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <AddTaxSlabModal
          onClose={() => setShowModal(false)}
          onSuccess={loadTaxSlabs}
        />
      )}
    </div>
  );
}

export default TaxSlabList;
