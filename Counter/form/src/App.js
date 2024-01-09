import React from 'react';
import useFormStore from "./useFormStore";


function App() {
  const { name, address, phone, setName, setAddress, setPhone } = useFormStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting form:", { name, address, phone });
  };
  return (
    <div>
      <form action={handleSubmit}>
        <div className="field" >
          <label htmlFor="">Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="field" >
          <label htmlFor="">Address</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>

        <div className="field" >
          <label htmlFor="">Phone</label>
          <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <button type='submit' >Submit</button>
      </form>
    </div>
  );
}

export default App;
