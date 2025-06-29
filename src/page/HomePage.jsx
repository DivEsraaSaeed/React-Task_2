import { useState } from "react";
import { Link } from "react-router-dom";
import UserCard from "../components/UserCard";
import useUserStore from "../store/users";

const HomePage = () => {
  const [params, setParams] = useState([{ key: "name", value: "" }]);
  const { getUser, user, hasErrors } = useUserStore();

  const handleParamChange = (index, field, value) => {
    const newParams = [...params];
    newParams[index][field] = value;
    setParams(newParams);

    let searchObj = {};
    newParams.forEach((p) => {
      if (p.value.trim()) {
        searchObj[p.key] = p.value.trim();
      }
    });

    if (Object.keys(searchObj).length > 0) {
      getUser(searchObj);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto", fontFamily: "Arial, sans-serif" }}>
      <Link to={"/users"} style={{ textDecoration: "none", color: "gray", }}>
        View All Users
      </Link>
      <h2 style={{ margin: "1rem 0" }}>Search for a User</h2>

      {params.map((param, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            gap: "0.5rem",
            marginBottom: "1rem",
            alignItems: "center",
          }}
        >
          <select
            value={param.key}
            onChange={(e) => handleParamChange(index, "key", e.target.value)}
            style={{
              padding: "0.4rem",
              borderRadius: "4px",
              border: "1px solid #ccc",
              flex: "1",
            }}
          >
            <option value="name">Name</option>
            <option value="email">Email</option>
            <option value="id">ID</option>
            <option value="phone">Phone</option>
          </select>
          <input
            type="search"
            value={param.value}
            onChange={(e) => handleParamChange(index, "value", e.target.value)}
            placeholder={`Search by ${param.key}`}
            style={{
              padding: "0.4rem",
              borderRadius: "4px",
              border: "1px solid #ccc",
              flex: "2",
            }}
          />
        </div>
      ))}

      <button
        onClick={() => setParams((prev) => [...prev, { key: "name", value: "" }])}
        style={{
          padding: "0.5rem 1rem",
          borderRadius: "4px",
          backgroundColor: "blue",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          marginBottom: "1rem",
        }}
      >
        Add More Params
      </button>

      <UserCard {...user} />
      {hasErrors && <p style={{ color: "red" }}>{hasErrors.message}</p>}
    </div>
  );
};

export default HomePage;
