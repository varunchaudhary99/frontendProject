import { BiEditAlt } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";

export default function CompanyTable({ companies, onEdit, onDelete }) {
  return (
    <table className="company-table">
      <thead>
        <tr>
          <th>Company</th>
          <th>Garages</th>
          <th>Claims Settled</th>
          <th>Zero Dep</th>
          <th>Price (INR)</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {companies.map((c) => (
          <tr key={c.id}>
            <td>{c.name}</td>
            <td>{c.cashlessGarages}</td>
            <td>{c.claimsSettled}</td>
            <td>{c.zeroDepClaims}</td>
            <td>{c.startingPriceINR}</td>
            <td>
              <BiEditAlt className="icon" onClick={() => onEdit(c)} />
              <BsTrash className="icon" onClick={() => onDelete(c.id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
