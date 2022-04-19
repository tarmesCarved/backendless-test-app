import logo from './logo.svg';
import './App.css';
import Backendless from 'backendless';
import CRUDRookie from './Components/CRUDRookie';
import UserRookie from './Components/UserRookie';
import DataMiner from './Components/DataMiner';
import Serverless from './Components/Serverless';

function App() {

  // Backendless.initApp("https://grownmountain.backendless.app");

  Backendless.initApp("0BAB5C7A-A853-EAFC-FFED-1D38AC0A6A00", "AA49650D-9602-4ADE-BACA-53C77071ED8A");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CRUDRookie />
        <UserRookie />
        <DataMiner />
        <Serverless />
      </header>
    </div>
  );
}

export default App;
