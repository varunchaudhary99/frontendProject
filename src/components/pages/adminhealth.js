import { useEffect, useState } from "react";
import CompanyForm from "./adminCompanyFrom";
import CompanyTable from "./adminCompanyTable";
import axios from "axios";
import AdminNavBar from "./adminNavBar";
import { BASE_URL } from "../constants";
export default function AdminPanelHealth() {
  const [companies, setCompanies] = useState([]);
  const [editData, setEditData] = useState(null);

const token = localStorage.getItem("admin_token");

  const fetchData = async () => {
    const res = await fetch("http://localhost:5000/api/getAllCompanies", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.ok) {
      const data = await res.json();
      setCompanies(data);
    } else {
      console.error("Failed to fetch companies");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAdd = async (data) => {
    const res = await fetch("http://localhost:5000/api/insurance-addcompany", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      fetchData();
    } else {
      console.error("Failed to add company");
    }
  };

  const handleUpdate = async (data) => {
    const res = await fetch(`http://localhost:5000/api/insurance-editcompany/${data._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      fetchData();
    } else {
      console.error("Failed to update company");
    }
  };
const handleDelete = async (id) => {
  console.log("Deleting company with ID:", id); // should log the ObjectID
  await axios.delete(`http://localhost:5000/api/insurance-deletecompany/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  fetchData();
};
  

  return (
    <div className="admin-wrapper">
        <AdminNavBar></AdminNavBar>  
      <CompanyForm onSubmit={editData ? handleUpdate : handleAdd} initialData={editData} clearEdit={() => setEditData(null)} />
      <CompanyTable companies={companies} onEdit={setEditData} onDelete={handleDelete} />
    </div>
  );
}
