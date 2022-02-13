import React, { useState } from "react";
import "./NavbarPublic.css";
import mainLogo from "./Logomain.png";
import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Dangki from "../login/Dangki";
import Login from "../login/login";
import ActionType from "../../stores/action";
import { Button, Row, Col } from "react-bootstrap";
import {useNavigate} from "react-router-dom"
import { toast } from "react-toastify";
const NavbarPublic = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const islogin = useSelector((state) => state.auth.isLogin);
  const role = useSelector((state)=> state.auth.role)
  const handleLogin = () => {
    dispatch({ type: ActionType.SHOW_LOGIN });
  };
  console.log("islogin", islogin);
  const handleRegister = () => {
    dispatch({ type: ActionType.SHOW_REGISTER });
  };
 const handleAdmin= () => {
   if (role === "admin"){
     navigate("/dashbroad")
     
   } else {
     toast.warning("You can get link admin")
   }
};
  const handleLogout = () => {
    console.log("logout ok")
    dispatch({
      type: ActionType.CHECK_LOGOUT
    })
  };
  return (
    <div className="navbar">
      <div className="Nav1">
        <img src={mainLogo} alt="Post" className="img_1"></img>
      </div>

      <div className="Nav2">
        <ul className="Ul1">
          <li className="Li1">
            <Link className="linkOne" to="/about">
              About
            </Link>
          </li>
          <li className="Li1">
            <Link className="linkOne" to="/trynow">
              Try now
            </Link>
          </li>
          <li className="Li1">
            <Link className="linkOne" to="/help">
              help
            </Link>
          </li>
        </ul>
      </div>

      <div className="Nav3">
        <input placeholder="Start your search"></input>
        <button className="btn_form1">
          <SearchOutlined
            style={{ fontSize: "26px", color: "#08c", padding: "2px" }}
          />
        </button>
      </div>

      <div className="Nav4">
        <ul className="Ul2">
          <li className="Li2">Tiếng Việt</li>
          <li className="Li2">
            <div className="linkOne" onClick={handleAdmin}>
              Dashbroad
            </div>
          </li>

          <Row className="gx-2">
            <Col>
              <button onClick={handleRegister}>Register</button>
            </Col>
            <Col>
              {islogin ? (
                <Button style={{ width: "8rem", lineHeight: "inherit" }} onClick = {handleLogout}>
                  Đăng Xuất
                </Button>
              ) : (
                <button onClick={handleLogin}>Login</button>
              )}
            </Col>
          </Row>
        </ul>
      </div>
      <Dangki />
      <Login />
    </div>
  );
};

export default NavbarPublic;
