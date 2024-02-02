"use client";
import { useState } from "react";

export default function updateBooks() {
  const [modal, setModal] = useState(false);
  function handleChange() {
    setModal(!modal);
  }

  return (
    <div>
      <button className="btn" onClick={handleChange}>
        Update
      </button>
      <input type="checkbox" checked={modal} onChange={handleChange} className="modal-toggle" />

      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Update Books</h3>
          <form>
            <div className="form-control">
              <label className="label font-bold">Name</label>
              <input type="text" className="input w-full input-bordered" placeholder="Books Name" />
            </div>

            <div className="modal-action">
              <button className="btn" type="button" onClick={handleChange}>
                close
              </button>
              <button className="btn" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
