import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { notOlustur } from "../features/data/dataSlice";

function NotForm() {
  const [baslik, setBaslik] = useState("");
  const [aciklama, setAciklama] = useState("");
  const [oncelik, setOncelik] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(baslik, aciklama, oncelik);
    dispatch(notOlustur({ baslik, aciklama, oncelik }));
    setBaslik("");
    setAciklama("");
    setOncelik(1);
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="baslik">Not baslik</label>
          <input
            type="text"
            id="baslik"
            name="baslik"
            value={baslik}
            onChange={(e) => setBaslik(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="aciklama">Not aciklama</label>
          <input
            type="text"
            id="aciklama"
            name="aciklama"
            value={aciklama}
            onChange={(e) => setAciklama(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="oncelik">Not oncelik</label>
          <select onChange={(e) => setOncelik(e.target.value)} value={oncelik}>
            <option value="1">Az oncelikli</option>
            <option value="2">oncelikli</option>
            <option value="3">Cok oncelikli</option>
          </select>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-block btn-add">
            Not ekle
          </button>
        </div>
      </form>
    </section>
  );
}

export default NotForm;
