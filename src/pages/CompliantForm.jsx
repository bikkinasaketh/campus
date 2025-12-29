import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Complaint = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  const initialState = {
    userId,
    fullName: "",
    email: "",
    phoneNumber: "",
    locationType: "",
    hostelType: "",
    block: "",
    floor: "",
    roomNo: "",
    collegeBuilding: "",
    issueType: "",
    problemDescription: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false); // 🔥 prevent double submit

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    // 🔥 INSTANT POPUP (button click ventane)
    toast.info("⏳ Submitting complaint...", {
      autoClose: 1000,
    });

    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) =>
        data.append(key, formData[key])
      );
      if (image) data.append("image", image);

      const res = await fetch("https://backend-4-6aiu.onrender.com/api/complaints", {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        setFormData(initialState);
        setImage(null);

        // 🔁 Redirect after toast close
        setTimeout(() => {
          navigate("/my-complaints");
        }, 1000);
      } else {
        toast.error("❌ Failed to submit complaint", {
          autoClose: 1000,
        });
        setLoading(false);
      }
    } catch (error) {
      toast.error("❌ Server error. Try again.", {
        autoClose: 1000,
      });
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar
        pauseOnHover={false}
      />

      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.heading}>Submit Complaint</h2>

        <input
          style={styles.input}
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <input
          style={styles.input}
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          style={styles.input}
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />

        <select
          style={styles.input}
          name="locationType"
          value={formData.locationType}
          onChange={handleChange}
          required
        >
          <option value="">Select Location</option>
          <option value="hostel">Hostel</option>
          <option value="college">College</option>
        </select>

        {/* HOSTEL */}
        {formData.locationType === "hostel" && (
          <>
            <select
              style={styles.input}
              name="hostelType"
              value={formData.hostelType}
              onChange={handleChange}
              required
            >
              <option value="">Hostel Type</option>
              <option value="boys">Boys Hostel</option>
              <option value="girls">Girls Hostel</option>
            </select>

            <select
              style={styles.input}
              name="block"
              value={formData.block}
              onChange={handleChange}
              required
            >
              <option value="">Select Block</option>
              {["A","B","C","D","E","F","G","H"].map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>

            <select
              style={styles.input}
              name="floor"
              value={formData.floor}
              onChange={handleChange}
              required
            >
              <option value="">Select Floor</option>
              {[1,2,3,4,5].map((f) => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>

            <input
              style={styles.input}
              type="number"
              name="roomNo"
              placeholder="Room Number"
              value={formData.roomNo}
              onChange={handleChange}
              required
            />
          </>
        )}

        {/* COLLEGE */}
        {formData.locationType === "college" && (
          <>
            <select
              style={styles.input}
              name="collegeBuilding"
              value={formData.collegeBuilding}
              onChange={handleChange}
              required
            >
              <option value="">Select Building</option>
              <option value="RTB">RTB</option>
              <option value="Visvesvaraya Bhavan">Visvesvaraya Bhavan</option>
              <option value="Cotton Bhavan">Cotton Bhavan</option>
              <option value="James Watt">James Watt</option>
              <option value="Bill Gates">Bill Gates</option>
              <option value="Ramanujan">Ramanujan</option>
              <option value="CV Raman">CV Raman</option>
            </select>

            <select
              style={styles.input}
              name="floor"
              value={formData.floor}
              onChange={handleChange}
              required
            >
              <option value="">Select Floor</option>
              {[1,2,3,4,5].map((f) => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>

            <input
              style={styles.input}
              type="number"
              name="roomNo"
              placeholder="Room Number"
              value={formData.roomNo}
              onChange={handleChange}
              required
            />
          </>
        )}

        <select
          style={styles.input}
          name="issueType"
          value={formData.issueType}
          onChange={handleChange}
          required
        >
          <option value="">Issue Type</option>
          <option value="fan">Fan</option>
          <option value="light">Light</option>
          <option value="water">Water</option>
          <option value="electricity">Electricity</option>
        </select>

        <textarea
          style={{ ...styles.input, height: "80px" }}
          name="problemDescription"
          placeholder="Problem Description"
          value={formData.problemDescription}
          onChange={handleChange}
          required
        />

        <input
          style={styles.input}
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button style={styles.button} type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit Complaint"}
        </button>
      </form>
    </div>
  );
};

export default Complaint;

/* ===== STYLES ===== */
const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f3f4f6",
  },
  form: {
    width: "420px",
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "15px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};





// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";

// const Complaint = () => {
//   const navigate = useNavigate();
//   const userId = localStorage.getItem("userId");

//   const [formData, setFormData] = useState({
//     userId,
//     fullName: "",
//     phoneNumber: "",
//     role: "",
//     locationType: "", // hostel / college
//     hostelType: "",   // boys / girls
//     block: "",
//     floor: "",
//     roomNo: "",
//     collegeBuilding: "",
//     issueType: "",
//     priorityLevel: "",
//     problemDescription: "",
//   });

//   const [image, setImage] = useState(null);

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = new FormData();
//     Object.keys(formData).forEach((k) => data.append(k, formData[k]));
//     if (image) data.append("image", image);

//     const res = await fetch("http://localhost:5000/api/complaints", {
//       method: "POST",
//       body: data,
//     });

//     if (res.ok) {
//       toast.success("Complaint submitted");
//       setTimeout(() => navigate(""), 800);
//     } else {
//       toast.error("Failed");
//     }
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gray-100">
//       <ToastContainer />
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded shadow grid grid-cols-2 gap-4 w-full max-w-4xl"
//       >
//         <h2 className="col-span-2 text-xl font-bold text-center">
//           Submit Complaint
//         </h2>

//         {/* Basic Details */}
//         <input name="fullName" placeholder="Full Name" onChange={handleChange} required />
//         <input name="phoneNumber" placeholder="Phone Number" onChange={handleChange} required />

//         <select name="role" onChange={handleChange} required>
//           <option value="">Role</option>
//           <option value="student">Student</option>
//           <option value="faculty">Faculty</option>
//         </select>

//         <select name="issueType" onChange={handleChange} required>
//           <option value="">Issue Type</option>
//           <option value="fan">Fan</option>
//           <option value="light">Light</option>
//           <option value="water">Water</option>
//           <option value="electricity">Electricity</option>
//         </select>

//         {/* Location Type */}
//         <select
//           name="locationType"
//           onChange={handleChange}
//           required
//           className="col-span-2"
//         >
//           <option value="">Location Type</option>
//           <option value="hostel">Hostel</option>
//           <option value="college">College</option>
//         </select>

//         {/* HOSTEL SECTION */}
//         {formData.locationType === "hostel" && (
//           <>
//             <select name="hostelType" onChange={handleChange} required>
//               <option value="">Hostel Type</option>
//               <option value="boys">Boys Hostel</option>
//               <option value="girls">Girls Hostel</option>
//             </select>

//             <input name="block" placeholder="Block (A/B/C)" onChange={handleChange} required />

//             <select name="floor" onChange={handleChange} required>
//               <option value="">Floor</option>
//               <option value="1">1</option>
//               <option value="2">2</option>
//               <option value="3">3</option>
//               <option value="4">4</option>
//               <option value="5">5</option>
//             </select>

//             <input name="roomNo" placeholder="Room No" onChange={handleChange} required />
//           </>
//         )}

//         {/* COLLEGE SECTION */}
//         {formData.locationType === "college" && (
//           <>
//             <select
//               name="collegeBuilding"
//               onChange={handleChange}
//               required
//               className="col-span-2"
//             >
//               <option value="">Select Building</option>
//               <option value="RTB">RTB</option>
//               <option value="Visvesvaraya">Visvesvaraya Bhavan</option>
//               <option value="Cotton">Cotton Bhavan</option>
//               <option value="James Watt">James Watt</option>
//               <option value="Bill Gates">Bill Gates</option>
//               <option value="Ramanujan">Ramanujan</option>
//               <option value="CV Raman">CV Raman</option>
//               <option value="KL Rao">KL Rao Bhavan</option>
//               <option value="Polytechnic">Polytechnic</option>
//               <option value="Pharmacy">Pharmacy</option>
//               <option value="Business School">Business School</option>
//             </select>

//             <select name="floor" onChange={handleChange} required>
//               <option value="">Floor</option>
//               <option value="1">1</option>
//               <option value="2">2</option>
//               <option value="3">3</option>
//               <option value="4">4</option>
//               <option value="5">5</option>
//             </select>
//           </>
//         )}

//         {/* Priority */}
//         <select name="priorityLevel" onChange={handleChange} required>
//           <option value="">Priority</option>
//           <option value="low">Low</option>
//           <option value="medium">Medium</option>
//           <option value="high">High</option>
//         </select>

//         {/* Description */}
//         <textarea
//           name="problemDescription"
//           placeholder="Problem Description"
//           className="col-span-2"
//           onChange={handleChange}
//           required
//         />

//         {/* Image */}
//         <input type="file" onChange={(e) => setImage(e.target.files[0])} />

//         <button className="col-span-2 bg-blue-600 text-white p-2 rounded">
//           Submit Complaint
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Complaint;
