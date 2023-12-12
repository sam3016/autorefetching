import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '../components/app';

window.loadApp = (json) => {
  const payload = JSON.parse(json);

  // Provide default value if data is empty
  for(var key in payload) {
    if(payload["data"] === "") {
      payload["data"] = "Hello World"
    }
  }
  if (payload.data) {
    const container = document.getElementById('root');
    const root = createRoot(container); // createRoot(container!) if you use TypeScript
    root.render(<App props={payload}/>);
  }
}
