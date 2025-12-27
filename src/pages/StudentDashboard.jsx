import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const handleSubmitComplaint = () => {
    navigate("/complaint"); // ✅ ROUTE PATH ONLY
  };

  const handleViewComplaints = () => {
    navigate("/my-complaints");
  };

  return (
    <div className="min-h-screen bg-green-100">
      <nav className="bg-green-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-bold">CampusFix - Student</h1>
        <button
          onClick={handleLogout}
          className="bg-white text-green-600 px-4 py-2 rounded hover:bg-gray-100 font-semibold"
        >
          Logout
        </button>
      </nav>

      <div className="flex items-center justify-center h-[80vh]">
        <div className="bg-white p-10 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-bold mb-4">
            🎓 Welcome to Student Dashboard
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={handleSubmitComplaint}
              className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
            >
              Submit Complaint
            </button>

            <button
              onClick={handleViewComplaints}
              className="bg-purple-600 text-white py-3 rounded hover:bg-purple-700"
            >
              View Complaints
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
