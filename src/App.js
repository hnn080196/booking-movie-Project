import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { Provider } from "react-redux";
import Routes from "Routes";
import store from "store/configStore";
import theme from "theme/theme";
import "typeface-montserrat";
function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
