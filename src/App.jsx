import "bootstrap/dist/css/bootstrap.min.css";
/* import "bootstrap-icons/font/bootstrap-icons.css"; */
import "./App.css";
import Experience from "./components/Experience";
import SidebarComponent from "./components/SidebarComponent";
import SuggestedForYou from "./components/SuggestedForYou";
import Analytics from "./components/Analytics";

function App() {
  return (
    <>
      <Experience />
      <SidebarComponent />
      <SuggestedForYou />
      <Analytics />
    </>
  );
}

export default App;
