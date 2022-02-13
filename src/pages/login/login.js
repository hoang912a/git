import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import loginService from "../../services/loginService.js";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ActionTypes from "../../stores/action";
function Login() {
  const show = useSelector((state) => state.auth.showLogin);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const dataImport = {
    username: data.username,
    password: data.password,
  };
  function submitRegister(e) {
    e.preventDefault();
    // axios.post(URL,data)
    loginService.Login(data).then((res) => {
      if (res.data.errorCode === 0) {
        toast.success("đăng nhập  thành công");
        dispatch({
          type: ActionTypes.CHECK_LOGIN,
          role: res.data.role,
          token: res.data.token
        });
        //   if(res.role==='user') navigate('/')
        //   else navigate('/dabroad')
      } else {
        toast.warning("Đăng Nhập Thất Bại");
      }
    });
  }
  const handleClose = () => {
    dispatch({
      type: ActionTypes.HIDDEN_LOGIN,
    });
  };
  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  return (
    <>
      <Modal size="lg" show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <input
              className="form-control"
              id="username"
              onChange={(e) => handle(e)}
              value={data.username}
              placeholder="User name"
              required
            />
            <input
              className="form-control mt-2"
              id="password"
              onChange={(e) => handle(e)}
              value={data.password}
              placeholder="Password"
              required
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Hủy
          </Button>
          <Button variant="primary" onClick={(e) => submitRegister(e)}>
            Đăng Nhập
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Login;
