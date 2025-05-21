import { useEffect, useState } from "react";
import CompanyForm from "./adminCompanyFrom";
import CompanyTable from "./adminCompanyTable";
import axios from "axios";
import AdminNavBar from "./adminNavBar";
import { BASE_URL } from "../constants";
export default function AdminPanelHealth() {
  const [companies, setCompanies] = useState([]);
  const [editData, setEditData] = useState(null);

   const fetchData = async () => {
    const res = await axios.get(`${BASE_URL}/getAllCompanies`);
    setCompanies(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAdd = async (data) => {
    await axios.post(`${BASE_URL}/insurance-addcompany`, data);
    fetchData();
  };

  const handleUpdate = async (data) => {
    await axios.put(`${BASE_URL}/insurance-editcompany/${data.id}`, data);
    fetchData();
  };

  const handleDelete = async (id) => {
    await axios.delete(`${BASE_URL}/insurance-deletecompany/${id}`);
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
