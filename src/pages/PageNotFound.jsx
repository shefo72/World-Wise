import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div style={styles.container}>
      <h1 style={styles.emoji}>404</h1>
      <h2 style={styles.title}>Page Not Found</h2>
      <p style={styles.text}>
        Oops! The page you’re looking for doesn’t exist. Maybe it was removed or
        the URL is wrong.
      </p>
      <Link to="/" className="cta">
        Go Back Home
      </Link>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
    color: "#333",
    textAlign: "center",
    padding: "0 20px",
  },
  emoji: {
    fontSize: "6rem",
    marginBottom: "10px",
  },
  title: {
    fontSize: "4rem",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  text: {
    fontSize: "1.9rem",
    marginBottom: "25px",
    maxWidth: "500px",
  },
  button: {
    padding: "12px 25px",
    backgroundColor: "#0070f3",
    color: "#fff",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
  },
};
