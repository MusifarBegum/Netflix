import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utilis/appStore";


function App() {
  return (
    <div className="font-semibold">
      <Provider store={appStore}>
      <Body/>
      </Provider>
      
      
     
    </div>
  );
}

export default App;
