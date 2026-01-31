import CounterReduxParent from "./components/redux/CounterGlobalReduxParent";
import LocalCounter from "./components/localstate/CounterState";
import ParentCounter from "./components/contextapi/CounterParent";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>State Management (Experiment 4)</h1>

      <div style={{ backgroundColor: "#fce4ec", padding: "10px" }}>
        <LocalCounter cno="Counter 1" />
        <LocalCounter cno="Counter 2" />
      </div>

      <div style={{ backgroundColor: "#f1f8e9", padding: "10px" }}>
        <ParentCounter cno="Counter 1" />
        <ParentCounter cno="Counter 2" />
      </div>

      <div style={{ backgroundColor: "#e0f2f1", padding: "10px" }}>
        <CounterReduxParent cno="Counter 1" />
        <CounterReduxParent cno="Counter 2" />
      </div>
    </div>
  );
}

export default App;