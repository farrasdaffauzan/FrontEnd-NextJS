"use client";
import { useState } from "react";

export default function addBooks() {
  const [modal, setModal] = useState(false);
  function handleChange() {
    setModal(!modal);
  }

  return (
    <div className="grid justify-items-end">
      <button className="btn" onClick={handleChange}>
        Add
      </button>
      <input type="checkbox" checked={modal} onChange={handleChange} className="modal-toggle" />

      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add New Books</h3>
          <form>
            <div className="form-control">
              <label className="label font-bold">Name</label>
              <input type="text" className="input w-full input-bordered" placeholder="Books Name" />
            </div>
            <div className="form-control">
              <label className="label font-bold">Description</label>
              <input type="text" className="input w-full input-bordered" placeholder="Books Name" />
            </div>
            <div className="form-control">
              <label className="label font-bold">Image URL</label>
              <input type="text" className="input w-full input-bordered" placeholder="Books Name" />
            </div>
            <div className="form-control">
              <label className="label font-bold">Release</label>
              <input type="text" className="input w-full input-bordered" placeholder="Books Name" />
            </div>
            <div className="form-control">
              <label className="label font-bold">Price</label>
              <input type="text" className="input w-full input-bordered" placeholder="Books Name" />
            </div>
            <div className="form-control">
              <label className="label font-bold">Total Page</label>
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
