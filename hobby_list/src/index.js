import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import { store } from './store/index'
import App from "./App";

import "bulma/css/bulma.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
