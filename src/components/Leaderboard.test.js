import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
//import { store } from "./app/store";
import { createStore } from "redux";
import reducer from "../reducers";
import middleware from "../middleware";
import Leaderboard from "./Leaderboard";
import { MemoryRouter } from "react-router";
const store = createStore(reducer, middleware);
// import NewpollContainer from "./NewpollContainer";

describe("Leaderboard", () => {
  it("will check its in document or not in Leaderboard", () => {
    var component = render(
      <MemoryRouter>
        <Provider store={store}>
          <Leaderboard />
        </Provider>
      </MemoryRouter>
    );
    //expect(component).toMatchSnapshot();
    expect(component.getByTestId("name-header")).toBeInTheDocument();
    expect(component.getByTestId("answered-header")).toBeInTheDocument();
    expect(component.getByTestId("created-header")).toBeInTheDocument();

    //expect(screen.getByText("Name")).toBeInTheDocument();
  });
});
