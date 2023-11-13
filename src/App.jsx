import Header from "./components/Header/Header";
import css from "./styles/app.module.scss";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";
import Gallery from "./components/Gallery/Gallery";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
