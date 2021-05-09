import { PrimaryButton, Worker, Viewer } from '@react-pdf-viewer/core';
import * as React from 'react';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/default-layout/lib/styles/index.css';


const files = [
// Your files here...  
]

const App = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [index, setIndex] = React.useState(0);

  return (
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.js">
          <div
              style={{                    
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '1rem',
              }}
          >
              <PrimaryButton onClick={() => index > 0 && setIndex(index - 1)}>
                  Previous fie
              </PrimaryButton>

              <PrimaryButton onClick={() => index < files.length - 1 && setIndex(index + 1)}>
                  Next fie
              </PrimaryButton>
          </div>

          <div
              style={{
                  height: '720px',
                  width: '100%',
              }}
          >
              <Viewer
                  fileUrl={files[index]}
                  plugins={[
                      defaultLayoutPluginInstance,
                  ]}
              />
          </div>
      </Worker>
  );
};

export default App;
