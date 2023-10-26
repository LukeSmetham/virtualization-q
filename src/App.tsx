import VirtualizedList from "./components/VirtualizedList";

import data from "./data.json";
import type { Dataset } from "./types";

const DATASETS = data as Dataset[];

function App() {
  return (
    <>
      <h4>Virtualized List</h4>
      <div id="list" style={{ maxWidth: "90%", width: "100%", height: 640 }}>
        <VirtualizedList items={DATASETS} />
      </div>
    </>
  );
}

export default App;
