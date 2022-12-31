import React from "react";
import "../styles/nav.css";

export default function Nav({ handlePageChange }) {
  //window scroll height
  const [scrollHeight, setScrollHeight] = React.useState(0);

  //window scroll height
  React.useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollHeight(position);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollHeight]);

  console.log(scrollHeight);

  return (
    <header className="p-4 bg-light position-fixed z-3 header">
      <nav className="container-sm d-flex justify-content-between">
        <h3 className="fw-bold logo">Hi, I am Bryan Sayavong</h3>
        <ul className="d-flex gap-3 fw-bold list-unstyled mainmenu">
          <li>
            <a
              href="#about"
              className="text-decoration-none"
              style={{
                color: scrollHeight <= 400 ? "#08bdba" : "#777777",
              }}
            >
              About me
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="text-decoration-none color#777777"
              style={{
                color:
                  scrollHeight > 401 && scrollHeight < 1700
                    ? "#08bdba"
                    : "#777777",
              }}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-decoration-none"
              style={{
                color:
                  scrollHeight >= 1701 && scrollHeight < 2100
                    ? "#08bdba"
                    : "#777777",
              }}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#resume"
              className="text-decoration-none"
              style={{
                color: scrollHeight >= 2101 ? "#08bdba" : "#777777",
              }}
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
