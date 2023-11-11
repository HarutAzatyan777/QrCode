
import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import CopyToClipboard from 'react-copy-to-clipboard';
import './App.css'; 

const QRCodeGenerator = () => {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);

  const handleTextChange = (e) => {
    setText(e.target.value);
    setCopied(false);
  };

  const handleCopy = () => {
    setCopied(true);
  };

  return (
    <div className="container">
      <h2>Dynamic QR Code Generator</h2>
      <input type="text" value={text} onChange={handleTextChange} placeholder="Enter text" />
      <div className="button-container">
        <CopyToClipboard text={text} onCopy={handleCopy}>
          <button>{copied ? 'Copied!' : 'Copy to Clipboard'}</button>
        </CopyToClipboard>
      </div>
      <div className="qr-code-container">
        <QRCode value={text} size={200} />
        {copied && <p className="copied-message">Text copied!</p>}
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <QRCodeGenerator />
    </div>
  );
}

export default App;
