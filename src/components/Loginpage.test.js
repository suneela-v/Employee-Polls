import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
//import { store } from "./app/store";
import { createStore } from "redux";
import reducer from "../reducers";
import middleware from "../middleware";
import Loginpage from "./Loginpage";
import { MemoryRouter } from "react-router";
const store = createStore(reducer, middleware);
// import NewpollContainer from "./NewpollContainer";

describe("Loginpage", () => {
  it("will verify if a string matches a regex expression passed", () => {
    var component = render(
      <MemoryRouter>
        <Provider store={store}>
          <Loginpage />
        </Provider>
      </MemoryRouter>
    );

    var usernameSelect = component.getByTestId("username-select");
    fireEvent.change(usernameSelect, { target: { value: "mtsamis" } });

    var inputpwdId = component.getByTestId("input-pwd");
    fireEvent.change(inputpwdId, { target: { value: "xyz123" } });

    var submitButton = component.getByTestId("submit-button");
    fireEvent.click(submitButton);
    expect(component.getByTestId("username-select").textContent).toMatch(/ts/);
     });
});
describe("sanpshot", () => {
  it("will verify if a string matches a regex expression passed", () => {
    var component = render(
      <MemoryRouter>
        <Provider store={store}>
          <Loginpage />
        </Provider>
      </MemoryRouter>
    );
    expect(component).toMatchSnapshot();
  });
});
