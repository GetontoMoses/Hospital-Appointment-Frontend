import React, { useState, useEffect } from "react";
import axios from "axios";

export default function GetDept() {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/department/")
      .then((response) => {
        setOptions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching options:", error);
      });
  }, []);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <form>
      <select id="foreignkey" value={selectedOption} onChange={handleChange}>
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.DepartmentName}
          </option>
        ))}
      </select>
    </form>
  );
}
