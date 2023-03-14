import { useState } from 'react';

export default function MyApp() {
  const [resultText, setResultText] = useState('Waiting for rsult...');

    function handleMobileAgentClick() {
      setResultText('New text');
    }
    
    window.abBaaSGetMobileAgentCallBack = (response) => {
        console.log(response);
        setResultText(response);
    };
        
    return (
      <center>
        <div>
          <h1>React MiniApp</h1>
            
            <button onClick={() => window.BaaSJSBridge.abBaaSGetMobileAgent("dfadf")}>                 Get Mobile Agent
            </button>
            <br></br>
            <br></br>
            <br></br>
            
            <button onClick={() => window.BaaSJSBridge.abBaaSFetchAuthCode("dfadf")}>                 Get Auth Code
            </button>
            <br></br>
            <br></br>
            <br></br>
            
            <button onClick={() => window.BaaSJSBridge.abBaaSSelectCameraPhoto("dfadf")}>                 Select Camera Photo
            </button>
            <br></br>
            <br></br>
            <br></br>
            
            <button onClick={() => window.BaaSJSBridge.abBaaSSelectGalleryPhoto("dfadf")}>                 Select Gallery Photo
            </button>
            <br></br>
            <br></br>
            <br></br>
            
            <button onClick={() => window.BaaSJSBridge.abBaaSCloseScreen("dfadf")}>                 Verify Identity
            </button>
            <br></br>
            <br></br>
            <br></br>
            
          <p>{resultText}</p>
        </div>
      </center>
    );
}

