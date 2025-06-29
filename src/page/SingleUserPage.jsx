import { useEffect } from "react";
import useUserStore from "../store/users";
import { useParams } from "react-router";

const SingleUserPage = () => {
  let { id } = useParams();
  const { user, getUser, isLoading, hasErrors } = useUserStore();

  useEffect(() => {
    getUser({ id: parseInt(id) });
  }, [id]);

  if (isLoading) return <p style={{ textAlign: "center" }}>Loading...</p>;
  if (hasErrors) {
    console.error(hasErrors);
    return <p style={{ color: "red", textAlign: "center" }}>Something went wrong</p>;
  }

  return (
    <div
      style={{
        Width: "500px",
        margin: "2rem auto",
        padding: "1.5rem",
        border: "1px solid #ccc",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>User Details</h2>
      <p><strong>Name:</strong> {user?.name}</p>
      <p><strong>Company:</strong> {user?.company?.name}</p>
      <p><strong>Phone:</strong> {user?.phone}</p>
      <p><strong>Website:</strong> {user?.website}</p>
    </div>
  );
};

export default SingleUserPage;
