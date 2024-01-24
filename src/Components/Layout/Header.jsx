import logo from "../../images/react.png";
const MainHeader = () => {
  return (
    <div
      className="pl-2 py-2"
      style={{ backgroundColor: "black", borderBottom: "1px solid #777" }}>
      <img
        src={logo}
        alt=""
        style={{ height: "35px", verticalAlign: "top" }}></img>
      <span className="h2 pt-4 m-2 text-white-50">Contact Management</span>
    </div>
  );
};
const Header = () => {
  return (
    <div>
      <MainHeader />
    </div>
  );
};
export default Header;
