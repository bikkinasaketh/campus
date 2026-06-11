import { useEffect, useState } from "react";

const statusColors = {
  Pending: "#facc15",
  "In Progress": "#38bdf8",
  Fixed: "#22c55e",
};

const AdminComplaintList = () => {
  const [complaints, setComplaints] = useState([]);

  const fetchComplaints = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/complaints");

      if (!res.ok) {
        throw new Error("Failed to fetch complaints");
      }

      const data = await res.json();
      setComplaints(data);
    } catch (error) {
      console.error("Error fetching complaints:", error);
    }
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/complaints/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status }),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to update status");
      }

      fetchComplaints();
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const renderLocation = (c) => {
    if (c.locationType === "hostel") {
      return `🏠 ${c.hostelType} Hostel | Block ${c.block} | Floor ${c.floor} | Room ${c.roomNo}`;
    }

    return `🏫 ${c.collegeBuilding} | Floor ${c.floor} | Room ${c.roomNo}`;
  };

  return (
    <div style={{ padding: "20px", background: "#f9fafb" }}>
      <h2
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <span
                style={{
                  fontWeight: "bold",
                  color: "#2563eb",
                }}
              >
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
              onChange={(e) =>
                updateStatus(c._id, e.target.value)
              }
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Fixed">Fixed</option>
            </select>
          </div>

          <h3
            style={{
              marginTop: "10px",
              fontSize: "18px",
            }}
          >
            {c.issueType?.toUpperCase()} Issue
          </h3>

          <p
            style={{
              color: "#374151",
              marginTop: "4px",
            }}
          >
            {renderLocation(c)}
          </p>

          <div style={{ marginTop: "12px" }}>
            <b>Problem Description:</b>
            <p style={{ color: "#4b5563" }}>
              {c.problemDescription}
            </p>
          </div>

          {c.image && (
            <img
              src={`http://localhost:5000/uploads/${c.image}`}
              alt="complaint"
              style={{
                width: "200px",
                marginTop: "10px",
                borderRadius: "6px",
              }}
            />
          )}

          <div
            style={{
              marginTop: "12px",
              fontSize: "13px",
              color: "#6b7280",
            }}
          >
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

      {complaints.length === 0 && (
        <p>No complaints available</p>
      )}
    </div>
  );
};

export default AdminComplaintList;