import Header from "./Component/Header.jsx";
import Title from "./Component/Title.jsx";
import Footer from "./Component/Footer.jsx";
import Bloglar from "./Component/Bloglar.jsx";
import Accordions from "./Component/Accordions.jsx";
import Yeniyazilar from "./Component/Yeniyazilar.jsx";
import { Route, Routes } from "react-router-dom";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Title />
              <Yeniyazilar />
              <Accordions />
              <Footer />
            </>
          }
        />
        <Route
          path="/blog"
          element={
            <>
              <Header />
              <Bloglar />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
