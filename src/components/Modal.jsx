import { useState } from 'react';

const Modal = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');

  const handleAddEntry = () => {
    const newEntry = {
      id: Date.now(),
      title,
      date,
      imageUrl,
      content,
    };

    const existingEntries =
      JSON.parse(localStorage.getItem('diaryEntries')) || [];

    existingEntries.push(newEntry);

    localStorage.setItem('diaryEntries', JSON.stringify(existingEntries));
    window.location.reload();
  };



  return (
    <>
      <button
        className='btn'
        onClick={() => document.getElementById('my_modal_3').showModal()}
      >
        Add Entry
      </button>
      <dialog id='my_modal_3' className='modal'>
        <div className='modal-box'>
    
    <h3 className="font-bold text-lg">Sunshine, what's on your mind?</h3>
    <p className="py-4">Press ESC key or click on ✕ button to close</p>
  {/* IMPORT FOR DATA = only possible to upload Picture = type="file" accept="image" */}
    <form onSubmit={handleAddEntry} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>



      {/* LINK FOR IMAGE */}

    <div className="form-control">
  <label className="label">
    <span className="label-text">Image</span>
  </label>
  <input
    type="text"
    placeholder="Insert Image Link"
    className="input input-bordered w-full max-w-xs border-pink-500 bg-pink-400 text-black focus:border-pink-400 focus:bg-pink-200"  // Changed from 'file-input' to 'input'
    onChange={(event) => {
      setImageUrl(event.target.value);
    }}
  />
</div>



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
      onChange={(event) => {
        setTitle(event.target.value);
      }}
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
      onChange={(event) => {
        setDate(event.target.value);
      }}
    />
  </div>

  
{/*________________________________________________*/}
  
  

{/* Content Input */}
<div className='form-control'>
              <label className='label'>
                <span className='label-text'>Content</span>
              </label>
              <textarea
                placeholder='Enter content'
                className='textarea textarea-bordered w-full max-w-xs'
                required
                onChange={(event) => {
                  setContent(event.target.value);
                }}
              ></textarea>
            </div>
            {/*________________________________________________*/}
            {/* Submit Button */}
            <div className='form-control mt-4'>
              <button type='submit' className='btn btn-primary w-full max-w-xs'>
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
