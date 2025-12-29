import { useEffect, useState } from "react";

const API_BASE = "https://backend-7-b3c2.onrender.com";

const statusColors = {
  Pending: "#facc15",
  "In Progress": "#38bdf8",
  Fixed: "#22c55e",
};

const AdminComplaintList = () => {
  const [complaints, setComplaints] = useState([]);

  const fetchComplaints = async () => {
    const res = await fetch(`${API_BASE}/api/complaints`);
    const data = await res.json();
    setComplaints(data);
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  const updateStatus = async (id, status) => {
    await fetch(`${API_BASE}/api/complaints/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });

    fetchComplaints();
  };

  const renderLocation = (c) => {
    if (c.locationType === "hostel") {
      return `🏠 ${c.hostelType} Hostel | Block ${c.block} | Floor ${c.floor} | Room ${c.roomNo}`;
    }
    return `🏫 ${c.collegeBuilding} | Floor ${c.floor} | Room ${c.roomNo}`;
  };

  return (
    <div style={{ padding: "20px", background: "#f9fafb" }}>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
        📋 Admin Complaint Panel
      </h2>

      {complaints.map((c, index) => (
        <div
          key={c._id}
          style={{
            background: "#fff",
            borderLeft: `6px solid ${statusColors[c.status]}`,
            padding: "20px",
            marginBottom: "20px",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          {/* TOP BAR */}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <span style={{ fontWeight: "bold", color: "#2563eb" }}>
                CFX-{index + 1}
              </span>
              <span
                style={{
                  marginLeft: "10px",
                  padding: "4px 10px",
                  borderRadius: "12px",
                  background: statusColors[c.status],
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {c.status}
              </span>
            </div>

            <select
              value={c.status}
              onChange={(e) => updateStatus(c._id, e.target.value)}
            >
              <option>Pending</option>
              <option>In Progress</option>
              <option>Fixed</option>
            </select>
          </div>

          <h3 style={{ marginTop: "10px", fontSize: "18px" }}>
            {c.issueType.toUpperCase()} Issue
          </h3>

          <p style={{ color: "#374151", marginTop: "4px" }}>
            {renderLocation(c)}
          </p>

          <div style={{ marginTop: "12px" }}>
            <b>Problem Description:</b>
            <p style={{ color: "#4b5563" }}>{c.problemDescription}</p>
          </div>

          {/* IMAGE */}
          {c.image && (
            <img
              src={`${API_BASE}/uploads/${c.image}`}
              alt="complaint"
              style={{
                width: "200px",
                marginTop: "10px",
                borderRadius: "6px",
              }}
            />
          )}

          <div style={{ marginTop: "12px", fontSize: "13px", color: "#6b7280" }}>
            <p>
              <b>Reported:</b>{" "}
              {new Date(c.createdAt).toLocaleString()}
            </p>
            <p>
              <b>Last Update:</b>{" "}
              {new Date(c.updatedAt).toLocaleString()}
            </p>
          </div>
        </div>
      ))}

      {complaints.length === 0 && <p>No complaints available</p>}
    </div>
  );
};

export default AdminComplaintList;
