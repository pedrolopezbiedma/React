import { BrowserRouter, Switch, Route } from "react-router-dom";

// components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// Sign up
// Check if there is an error, if there is, mostramos el error debajo del boton
// Create un metodo signup que reciba un email y un password
// Mostrar por consola el usuario registrado

// Logout
// Handle the log out, log success when this happens. Log when there is an error.

// Log in
// Follow same logic for the sign up but with log in
// Show in the console the logged user

// Download the context and use it as expected ( Review how it works and change it when is needed ( there are changes needed ) )

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/signup">
						<Signup />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
