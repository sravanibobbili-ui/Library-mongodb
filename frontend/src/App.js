import logo from './logo.svg';
import './App.css';
import Register from './Components/Register.js';
// import Connect from './backend/server.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <server/> */}
       <Register/>
      </header>
    </div>
  );
}

export default App;
