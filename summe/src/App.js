import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Main from "./page/main/Main";
import ViewGraph from "./page/view graph/ViewGraph";
import SignIn from "./page/sign/SignIn";
import SignUp from "./page/sign/SignUp";
import EmptyPage from "./page/empty/EmptyPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/viewgraph" element={<ViewGraph />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<EmptyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
