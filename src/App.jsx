import React, { useState } from 'react';
import MainLayout from './components/Layout/Layout';
import Request from './components/Workspace/Request/RequestPanel';
import Response from './components/Workspace/Response/ResponsePanel';

const App = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <MainLayout>
      <Request setResponse={setResponse} setLoading={setLoading} />
      <Response response={response} loading={loading} />
    </MainLayout>
  );
};

export default App;
