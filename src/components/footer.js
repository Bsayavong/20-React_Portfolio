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
            <a href="https://github.com/Bsayavong">GITHUB</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/bryan-sayavong-8a652a196/">LINKEDIN</a>
          </li>
          <li>
            <a href="mailto:bksayavong@gmail.com">EMAIL</a>
          </li>
        </ul>
      </section>
    </footer>
  );
}
