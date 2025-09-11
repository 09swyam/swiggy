import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import { ThemeProvider } from "./utils/ThemeContext.jsx";
import { Provider } from "react-redux";
import store from "./utils/appStore.js";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <div>
          <Header />
          <Outlet />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
