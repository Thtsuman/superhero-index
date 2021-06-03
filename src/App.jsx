import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loader from "./views/Loader/Loader";
import ThemeObjForStyledComponent from "./assets/theme";
import { Provider } from "react-redux";
import Store from "./redux/store";
import { SkeletonTheme } from 'react-loading-skeleton'
import Mainpage from "./views/Mainpage/Mainpage";
import AppWrapper from "./components/AppWrapper/AppWrapper";
// route components
const Homepage = React.lazy(() => import("./views/Heropage/Heropage"));

const App = () => {
  return (
    <ThemeProvider theme={ThemeObjForStyledComponent}>
      <SkeletonTheme color="#ffffff05" highlightColor="#444">
        <Provider store={Store}>
          <AppWrapper>
            <Router>
              <React.Suspense fallback={<Loader />}>
                <Switch>
                  <Route path="/" exact component={Mainpage} />
                  <Route path="/hero" exact component={Homepage} />
                </Switch>
              </React.Suspense>
            </Router>
          </AppWrapper>
        </Provider>
      </SkeletonTheme>
    </ThemeProvider>
  );
};

export default App;
