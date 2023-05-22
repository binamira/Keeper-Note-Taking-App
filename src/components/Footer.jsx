import React from "react";


//using the getFullYear from the object Date so we can access the current year
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
