import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
//import { store } from "./app/store";
import { createStore } from "redux";
import reducer from "../reducers";
import middleware from "../middleware";
import Nav from "./Nav";
import { MemoryRouter } from "react-router";
const store = createStore(reducer, middleware);
// import NewpollContainer from "./NewpollContainer";

describe("Nav", () => {
  it("will check its in document or not in Nav", () => {
    var component = render(
      <MemoryRouter>
        <Provider store={store}>
          <Nav />
        </Provider>
      </MemoryRouter>
    );
    
    expect(component.getByTestId("home-id")).toBeInTheDocument();
   
  });
});
