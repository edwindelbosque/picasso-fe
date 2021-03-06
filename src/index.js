import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { loadState, saveState } from './localStorage';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, loadState(), composeWithDevTools());

store.subscribe(() => {
	saveState({
		userId: store.getState().userId,
		username: store.getState().username,
		catalogs: store.getState().catalogs,
		palettes: store.getState().palettes,
		isMenuOpen: store.getState().isMenuOpen
	});
});

ReactDOM.render(
	<Router>
		<Provider store={store}>
			<App />
		</Provider>
	</Router>,
	document.getElementById('root')
);
serviceWorker.unregister();
