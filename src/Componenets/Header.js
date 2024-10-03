import "./Header.css";
import styles from "./Header.module.css";
function Header() {
  const mystyle = {
    color: "grey",
    backgroundColor: "aqua",
    fontSize: "20px",
  };
  return (
    <>
      {/* <h1 style={{color:"red"}} >Heading </h1>  */}
      {/* inline css */}
      <p style={mystyle}> This is p tag</p>
      <h1 className={styles.bigBlue}>Hello there</h1>
    </>
  );
}

export default Header;
