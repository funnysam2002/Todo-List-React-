import SecondComponent from "./components/secondComponent";
import "bulma/css/bulma.min.css";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      <div className="app-container">
        <h1 style={{ fontSize: "40px" }}>TODO APPLICATION</h1>
        <SecondComponent />
      </div>
    </div>
  );
}

export default App;
