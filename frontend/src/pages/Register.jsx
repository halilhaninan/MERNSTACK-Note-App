import React, { useState } from "react";
import { useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../features/auth/authSlice";
import Spinner from "../Components/Spinner";

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { kullanici, isHata, isBasari, isYukleniyor, mesaj } = useSelector(
    (state) => state.auth
  );

  const [formData, setFormData] = useState({
    kullaniciAd: "",
    email: "",
    parola: "",
    parolaKontrol: "",
  });

  const { kullaniciAd, email, parola, parolaKontrol } = formData;

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);

    if (parola !== parolaKontrol) {
      toast.error("parolalar eslesmedi");
    } else {
      const userData = {
        kullaniciAd,
        email,
        parola,
      };
      dispatch(register(userData));
    }
  };

  useEffect(() => {
    if (isHata) {
      toast.error(mesaj);
    }
    if (isBasari || kullanici) {
      navigate("/");
    }
    dispatch(reset());
  }, [kullanici, isHata, isBasari, mesaj, navigate, dispatch]);

  if (isYukleniyor) {
    <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              classname="form-control"
              id="kullaniciAd"
              name="kullaniciAd"
              value={kullaniciAd}
              placeholder="user name"
              onChange={onChange}></input>
          </div>
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
            <input
              type="password"
              classname="form-control"
              id="parolaKontrol"
              name="parolaKontrol"
              value={parolaKontrol}
              placeholder="verify password"
              onChange={onChange}></input>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Register
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Register;
