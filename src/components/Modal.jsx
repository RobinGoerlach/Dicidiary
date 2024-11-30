const Modal = () => {
  return (
    <>
    <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    
    <h3 className="font-bold text-lg">Sunshine, what's on your mind?</h3>
    <p className="py-4">Press ESC key or click on ✕ button to close</p>
  {/* IMPORT FOR DATA = a Picture */}
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      <input
  type="file"
  className="file-input file-input-bordered file-input-secondary w-full max-w-xs" />


{/*________________________________________________*/}

  {/* Title Input */}
  <div className="form-control">
    <label className="label">
      <span className="label-text">Title</span>
    </label>
    <input
      type="text"
      placeholder="Enter title"
      className="input input-bordered w-full max-w-xs"
      required
    />
  </div>

  {/* Date Input with Current Date */}
  <div className="form-control">
    <label className="label">
      <span className="label-text">Date</span>
    </label>
    <input
      type="date"
      defaultValue={new Date().toISOString().split("T")[0]} // Set current date
      className="input input-bordered w-full max-w-xs"
      required
    />
  </div>

  {/* Content Input */}
  <div className="form-control">
    <label className="label">
      <span className="label-text">Content</span>
    </label>
    <textarea
      placeholder="Enter content"
      className="textarea textarea-bordered w-full max-w-xs"
      required
    ></textarea>
  </div>
{/*________________________________________________*/}
  {/* Submit Button */}
  <div className="form-control mt-4">
              <button type="submit" className="btn btn-primary w-full max-w-xs">
                Submit
              </button>
            </div>

    </form>

  </div>
  
</dialog>
</>
  );
};

export default Modal;
