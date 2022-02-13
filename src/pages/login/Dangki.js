import React, { useState,useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import Register from "./register";
import registerServices from "../../services/registerService";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";

// import { Appcontext } from "../../stores/reducer/aprovider";
import ActionTypes from "../../stores/action";
import "./Dangki.css";
function Dangki() {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.auth.showRegister);


  // const {name}= useContext(Appcontext);
  const handleClose = (value) => {
    dispatch({
      type: ActionTypes.HIDDEN_REGISTER,

    });
  };
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    roles: "",
  });

  const dataImport = {
    username: data.username,
    email: data.email,
    password: data.password,
    roles: data.roles,
  };

  function submitRegister(e) {
    e.preventDefault();
    registerServices
      .register(data)
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          toast.success("dang ki thanh cong");
          // console.log(res)
          handleClose();
        }
      })
      .catch((err) => {
        if (err.response.status === 400) {
          // console.log(err.response.data.message)
          toast.warning(err.response.data.message);
        } else if (err.response.status === 500) {
          // console.log(err.response.data.message)
          toast.warning(err.response.data.message);
        } else {
          toast.warning(err);
        }
      });
  }

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  return (
    <>
      <Modal size="lg" show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <input
              className="login username"
              id="username"
              onChange={(e) => handle(e)}
              value={data.username}
              placeholder="User name"
              required
            />
            <br />
            <input
              className="login email"
              id="email"
              onChange={(e) => handle(e)}
              value={data.email}
              placeholder="Email"
              required
            />
            <br />
            <input
              className="login password"
              id="password"
              onChange={(e) => handle(e)}
              value={data.password}
              placeholder="Password"
              required
            />
            <br />

            <button className="login_submit" onClick={(e) => submitRegister(e)}>
              Tiếp
            </button>
            <p className="loginText three">Hoặc</p>
            <div className="button">
              <button>
                <i class="fa fa-facebook" aria-hidden="true"></i>Tiếp tục với
                Facebook
              </button>
              <button>
                <i class="fa fa-google" aria-hidden="true"></i>Tiếp tục với
                Google
              </button>
              <button>
                <i class="fa fa-envelope-o" aria-hidden="true"></i>Tiếp tục bằng
                Email
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Dangki;
