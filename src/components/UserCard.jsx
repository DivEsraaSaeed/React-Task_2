import { Link } from "react-router-dom";

const userCard = ({ name, id, phone, email }) => {
  return (

      <div
        style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "1rem",
        margin: "1rem auto",
        width: "200px",
        boxShadow: "0 2px 6px rgba(195, 56, 139, 0.1)0.1)",
        backgroundColor: "#f9f9f9",
        }}
      >
        <p>{name}</p>
        <p>{phone}</p>
        <p>{email}</p>
      {id ? <Link to={`/users/${id}`}>show more details</Link> : null}
      </div>

  );
};
export default userCard;
