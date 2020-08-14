import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStatevalue } from "./StateProvider";
import { auth } from "./firebase";

function App() {
  const [{ user }, dispatch] = useStatevalue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user logged out

        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      //cleanup
      unsubscribe();
    };
  }, []);

  console.log("USER IS >>>>>", user);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header></Header>
            <Checkout></Checkout>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header></Header>
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
