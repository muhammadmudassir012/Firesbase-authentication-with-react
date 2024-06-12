import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Breadcrumb, Layout, Menu, theme } from "antd";
const { Header, Content, Footer } = Layout;
// const items = [{
//     label: 'Home',
//     key: '/Home'
// },
// {
//     label: 'About',
//     key: '/About'
// },
// {
//     label: 'Contact',
//     key: '/Contact'
// }
// ]

const AppNavbar = ({ children }) => {
  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Link to={"/home"}>
          <h3 style={{ color: "white," }}>Home</h3>
        </Link>
        <Link to={"/signup"}>
          <h3 style={{ color: "white,", margin: "60px" }}>About</h3>
        </Link>
        <Link to={"/login"}>
          <h3 style={{ color: "white," }}>Profile</h3>
        </Link>
      </Header>
      <div>{children}</div>
    </Layout>
  );
};
export default AppNavbar;
