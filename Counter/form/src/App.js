

function App() {
  return (
    <div>
      <form action={handleSubmit}>
        <div className="field" >
          <label htmlFor="">Name</label>
          <input type="text" value={name} />
        </div>
        <div className="field" >
          <label htmlFor="">Address</label>
          <input type="text" value={address} />
        </div>

        <div className="field" >
          <label htmlFor="">Phone</label>
          <input type="number" value={phone} />
        </div>
      </form>
    </div>
  );
}

export default App;
