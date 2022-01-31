// import "./App.scss";
import {Route, Routes} from "react-router-dom";
import {AllMeets} from "./pages/AllMeets";
import {NewMeet} from "./pages/NewMeet";
import {FavoritesMeets} from "./pages/FavoritesMeets";
import {NotFoundPage} from "./pages/NotFoundPage";
import {Layout} from "./components/layout/Layout";

function App() {
  return (
    <Layout>
        <Routes>
            <Route exact path={"/"} element={<AllMeets />} />
            <Route path={"/new-meet"} element={<NewMeet />} />
            <Route path={"/favorites"} element={<FavoritesMeets />} />
            <Route path={"*"} element={<NotFoundPage />} />
        </Routes>
    </Layout>
  );
}

export default App;
