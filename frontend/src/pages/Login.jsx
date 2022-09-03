import React, { useState, useEffect } from "react";

import { FaUserCheck } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";
import Spinner from "../Components/Spinner";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { kullanici, isHata, isBasari, isYukleniyor, mesaj } = useSelector(
    (state) => state.auth
  );

  const [formData, setFormData] = useState({
    email: "",
    parola: "",
  });

  const { email, parola } = formData;

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);

    const userData = { email, parola };
    dispatch(login(userData));
  };

  useEffect(() => {
    if (isHata) {
      toast.error(mesaj);
    }
    if (isBasari || kullanici) {
      navigate("/");
    }
  }, [kullanici, isHata, isBasari, mesaj, navigate, dispatch, isYukleniyor]);

  if (isYukleniyor) {
    <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>
          <FaUserCheck /> Login
        </h1>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="email"
              classname="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="email"
              onChange={onChange}></input>
          </div>
          <div className="form-group">
            <input
              type="password"
              classname="form-control"
              id="parola"
              name="parola"
              value={parola}
              placeholder="password"
              onChange={onChange}></input>
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Login
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;
