import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    resolved: 0,
  });

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    fetch("https://backend-4-6aiu.onrender.com/api/complaints/stats")
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch(() => console.log("Failed to load stats"));
  }, []);

  return (
    <div className="min-h-screen bg-red-100">
      {/* Navbar */}
      <nav className="bg-red-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-bold">CampusFix - Admin Panel</h1>
        <button
          onClick={handleLogout}
          className="bg-white text-red-600 px-4 py-2 rounded hover:bg-gray-100 font-semibold"
        >
          Logout
        </button>
      </nav>

      {/* Main Content */}
      <div className="flex items-center justify-center h-[80vh]">
        <div className="bg-white p-10 rounded-lg shadow-lg text-center w-full max-w-4xl">
          <h2 className="text-3xl font-bold mb-4">
            👨‍💼 Welcome to Admin Dashboard
          </h2>
          <p className="text-gray-600 mb-8">
            Manage student complaints and system activities
          </p>

          {/* Admin Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <button
              onClick={() => navigate("/admin-complaints")}
              className="bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition"
            >
              View All Complaints
            </button>

            <button
              onClick={() => navigate("/admin-complaints")}
              className="bg-green-600 text-white py-4 rounded-lg hover:bg-green-700 transition"
            >
              Update Complaint Status
            </button>

            <button className="bg-purple-600 text-white py-4 rounded-lg hover:bg-purple-700 transition">
              Manage Students
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="bg-red-100 p-6 rounded-lg shadow">
              <h3 className="text-lg font-bold text-red-600">
                Total Complaints
              </h3>
              <p className="text-2xl font-semibold mt-2">
                {stats.total}
              </p>
            </div>

            <div className="bg-yellow-100 p-6 rounded-lg shadow">
              <h3 className="text-lg font-bold text-yellow-600">
                Pending
              </h3>
              <p className="text-2xl font-semibold mt-2">
                {stats.pending}
              </p>
            </div>

            <div className="bg-green-100 p-6 rounded-lg shadow">
              <h3 className="text-lg font-bold text-green-600">
                Resolved
              </h3>
              <p className="text-2xl font-semibold mt-2">
                {stats.resolved}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
