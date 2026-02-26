import Header from "./components/Header.jsx";
import Score  from "./components/Score.jsx";
import {HTML_RESULTS} from "./data.js";
import { JAVA_RESULTS } from "./data.js";
import { PYTHON_RESULTS } from "./data.js";
import { ENGLISH_RESULTS } from "./data.js";

function App() {
  return (
    <>
      <Header batchName="OTDGOTDG"/>

      <main className="scores-container">
        <Score courseName="HTML" results={HTML_RESULTS}/>
        <Score courseName="JAVA" results={JAVA_RESULTS}/>
        <Score courseName="PYTHON" results={PYTHON_RESULTS}/>
        <Score courseName="ENGLISH" results={ENGLISH_RESULTS}/>
        
      </main>

    </>
  );
}

export default App;
