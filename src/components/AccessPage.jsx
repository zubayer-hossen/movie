import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SECRET_CODE = "zubu2025";

const AccessPage = ({ onAccess }) => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code === SECRET_CODE) {
      onAccess();
      navigate("/movie");
    } else {
      setError("Incorrect code. Try again!");
    }
  };

  return (
    <div className="min-h-screen bg-yellow-100 flex flex-col items-center justify-center text-center">
      <h2 className="text-3xl font-bold mb-6">🔐 Enter Secret Code</h2>
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter your code here"
          className="px-4 py-2 border-2 border-yellow-500 rounded-md"
        />
        {error && <p className="text-red-500 font-semibold">{error}</p>}
        <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">Unlock Movie</button>
      </form>
    </div>
  );
};

export default AccessPage;
