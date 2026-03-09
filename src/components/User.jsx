import styles from "./User.module.css";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function User() {
  const { user, logout } = useAuth();
  const Navigate = useNavigate();

  function handleLogOut() {
    logout();
    Navigate("/");
  }

  return (
    <div className={styles.user}>
      <img src={user.avatar} alt={user.name} />
      <span>Welcome, {user.name}</span>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
}

export default User;

/*
CHALLENGE



5) Handle logout button by calling `logout()` and navigating back to `/`
*/
