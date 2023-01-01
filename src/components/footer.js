import React from "react";
import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={`${styles.footer} bg-light`}>
      <section className={`container ${styles.section}`}>
        <div>
          <p>Copyright © {new Date().getFullYear()} B. Sayavong</p>
        </div>
        <ul className={`${styles.sociallinks}`}>
          <li>
            <a href="/">GITHUB</a>
          </li>
          <li>
            <a href="/">LINKEDIN</a>
          </li>
          <li>
            <a href="/">EMAIL</a>
          </li>
        </ul>
      </section>
    </footer>
  );
}
