import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { useState } from 'react';

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    window.mobileAgent.postMessage("Kamlesh Sangani");
  }

  return (
    <button onClick={handleClick}>
      Get Mobile Agent {count}
    </button>
  );
}

let App = function MyApp() {
  return (
    <div>
      <h1>Flutter React MiniApp</h1>
      <MyButton />
    </div>
  );
}

export default App;
