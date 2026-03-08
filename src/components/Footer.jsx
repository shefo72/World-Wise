import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; Copyright {new Date().getFullYear()} by{" "}
        <a href="https://www.linkedin.com/in/ahmed-sherif-eg/" target="_blank">
          Ahmed Sherif
        </a>
      </p>
    </footer>
  );
}

export default Footer;
