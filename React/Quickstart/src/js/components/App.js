// import Button from "./Button";
import AboutPage from "./AboutPage";
import MainPage from "./MainPage";

function App() {
    let ismainPage = true;
    let component;
    if(ismainPage) {
        component = <MainPage />;
    }else {
        component = <AboutPage />;
    }
  return (
    <div>
      {component}
    </div>
  );
}

export default App;