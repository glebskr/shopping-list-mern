import React from "react";

import ShoppingList from "./components/ShoppingList";
import AppNavbar from "./components/AppNavbar";
import ItemModal from "./components/ItemModal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "reactstrap";
import { Provider } from "react-redux";
import store from "./store";
import {loadUser} from './actions/authActions'



class App extends React.Component  {

  componentDidMount() {
    
    store.dispatch(loadUser());
  }

  render() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Container>
          <ItemModal />
          <ShoppingList />
        </Container>
      </div>
    </Provider>
  );
};
}

export default App;
