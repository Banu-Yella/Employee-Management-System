import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SettingsPage() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: "Admin User",
    email: "admin@ems.com",
    phone: "+91 98765 43210",
    role: "System Administrator",
  });
  const [savedMessage, setSavedMessage] = useState("");

  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem("adminProfile") || "null");
    const loggedInUser = JSON.parse(localStorage.getItem("user") || "null");

    if (storedProfile) {
      setProfile(storedProfile);
    } else if (loggedInUser) {
      setProfile({
        name: loggedInUser.username || "Admin User",
        email: loggedInUser.email || "admin@ems.com",
        phone: loggedInUser.phone || "+91 98765 43210",
        role: loggedInUser.role || "System Administrator",
      });
    }
  }, []);

  const handleChange = (e) => {
    setProfile((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = () => {
    localStorage.setItem("adminProfile", JSON.stringify(profile));
    setSavedMessage("Admin profile updated successfully.");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <div className="module-hero-card">
        <div>
          <p className="module-eyebrow">Settings</p>
          <h1>⚙️ Settings & Admin Profile</h1>
          <p className="module-subtitle">Manage admin preferences, personal details, and account actions.</p>
        </div>
        <button className="btn btn-outline-primary" onClick={() => navigate("/admin")}>Back to Dashboard</button>
      </div>

      <div className="dashboard-row">
        <div className="dashboard-card module-panel-card">
          <h3>Admin Details</h3>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input className="form-control" name="name" value={profile.name} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input className="form-control" name="email" value={profile.email} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input className="form-control" name="phone" value={profile.phone} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Role</label>
            <input className="form-control" name="role" value={profile.role} onChange={handleChange} />
          </div>
          <button className="btn btn-success" onClick={handleSave}>Save Profile</button>
          {savedMessage && <p className="text-success mt-2">{savedMessage}</p>}
        </div>

        <div className="dashboard-card module-panel-card">
          <h3>Preferences & Security</h3>
          <ul>
            <li>🔔 Enable email notifications</li>
            <li>🌓 Dark mode support</li>
            <li>🔐 Two-step verification</li>
            <li>📊 Weekly admin reports</li>
          </ul>
          <div className="mt-3">
            <button className="btn btn-primary me-2">Update Preferences</button>
            <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
