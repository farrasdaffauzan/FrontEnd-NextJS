"use client";
import { useState } from "react";

export default function deleteBooks() {
  const [modal, setModal] = useState(false);
  function handleChange() {
    setModal(!modal);
  }

  return (
    <div>
      <button className="btn" onClick={handleChange}>
        Delete
      </button>
      <input type="checkbox" checked={modal} onChange={handleChange} className="modal-toggle" />

      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Are You Sure to Delete?</h3>
          <form>
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
