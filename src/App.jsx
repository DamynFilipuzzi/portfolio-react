import { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="content">
                <div className="card">
                    <h1>Welcome!</h1>
                    <p>This site is currently under construction.</p>
                    <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                </div>
            </div>
        </>
    );
}

export default App;
