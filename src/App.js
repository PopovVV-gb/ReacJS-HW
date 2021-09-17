import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import { persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { CircularProgress } from '@material-ui/core';
import {Routes} from './components/routes/routes'

function App(props) {
  
  return (
    <Provider store = {store}>
        <PersistGate persistor={persistor} loading={<CircularProgress />}>
            <Routes />
        </PersistGate>
    </Provider> 
  );
}

export const LOCAL_USER_ID = 0

export default App;