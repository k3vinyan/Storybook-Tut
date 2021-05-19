import logo from './logo.svg';
import './App.css';

import InboxScreen from './components/InboxScreen';

import './index.css';

function App() {
  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
}

export default App;
