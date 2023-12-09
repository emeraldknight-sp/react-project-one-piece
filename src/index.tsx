import React from "react";
import ReactDOM from "react-dom/client";
import { Metric } from "web-vitals";
import { reportWebVitals } from "./reportWebVitals";
import { GlobalStyle } from "./styles/globals";
import { App } from "./App";

const rootElement = document.getElementById("root");
const handleWebVitals = (metric: Metric) => {
	console.log(metric);
};

if (rootElement) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<React.StrictMode>
			<GlobalStyle />
			<App />
		</React.StrictMode>,
	);
} else {
	console.error("Element 'root' not found in the DOM.");
}

reportWebVitals(handleWebVitals);
