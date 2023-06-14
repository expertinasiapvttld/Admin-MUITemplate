import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/scroll-to-top/scrolltotop";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
          <ScrollToTop />
          <Router />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
