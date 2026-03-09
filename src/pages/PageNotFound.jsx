import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <main style={styles.container}>
      <div style={styles.content}>
        <span style={styles.mapIcon} role="img" aria-label="lost map">
          🗺️
        </span>
        <h1 style={styles.code}>404</h1>
        <h2 style={styles.title}>You seem lost...</h2>
        <p style={styles.text}>
          The page you’re looking for has drifted off the map or hasn't been
          discovered yet. Maybe it was removed, or the URL is just wrong.
        </p>

        <Link to="/" style={styles.btn}>
          &larr; Take Me Home
        </Link>
      </div>
    </main>
  );
}

const styles = {
  container: {
    height: "100vh",
    backgroundColor: "var(--color-dark--1)",
    color: "var(--color-light--2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "3rem",
    textAlign: "center",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "60rem",
  },
  mapIcon: {
    fontSize: "8rem",
    marginBottom: "1rem",
    opacity: 0.8,
  },
  code: {
    fontSize: "10rem",
    fontWeight: 800,
    lineHeight: 1,
    color: "var(--color-brand--1)",
    marginBottom: "1rem",
    fontFamily: "inherit",
  },
  title: {
    fontSize: "4rem",
    fontWeight: 700,
    marginBottom: "2rem",
    color: "var(--color-light--1)",
  },
  text: {
    fontSize: "1.8rem",
    lineHeight: 1.8,
    marginBottom: "4rem",
    color: "var(--color-light--2)",
  },
  btn: {
    display: "inline-block",
    padding: "1.2rem 3rem",
    fontSize: "1.6rem",
    fontWeight: 700,
    textTransform: "uppercase",
    textDecoration: "none",
    borderRadius: "7px",
    backgroundColor: "var(--color-brand--2)",
    color: "var(--color-dark--1)",
    cursor: "pointer",
  },
};
