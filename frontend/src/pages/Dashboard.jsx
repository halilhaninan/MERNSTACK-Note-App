import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import NotForm from "../Components/NotForm";
import { notlarGetir, reset } from "../features/data/dataSlice";
import Spinner from "../Components/Spinner";
import Not from "../Components/Not";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { kullanici } = useSelector((state) => state.auth);
  const { notlar, isYukleniyor, isHata, isBasari, mesaj } = useSelector(
    (state) => state.notlar
  );

  useEffect(() => {
    if (isHata) {
      console.log(mesaj);
    }

    if (!kullanici) {
      navigate("/login");
      console.log("halilhan");
    }
    dispatch(notlarGetir());
    return () => {
      dispatch(reset());
    };
  }, [kullanici, navigate, isHata, mesaj, dispatch]);

  if (isYukleniyor) {
    <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>Merhaba {kullanici && kullanici.kullaniciAd}</h1>
        <p>add note</p>
      </section>
      <NotForm />
      <section className="content">
        {notlar.length > 0 ? (
          <div className="notlar">
            {notlar.map((not) => (
              <Not key={not._id} not={not} />
            ))}
          </div>
        ) : (
          <h3>henuz not yerletisrmediniz</h3>
        )}
      </section>
    </>
  );
}

export default Dashboard;
