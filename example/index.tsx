import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from 'fancy-react-ui-lib2';

const App = () => {
  return (
    <div>
      <Button onClick={console.log}>QWE</Button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
