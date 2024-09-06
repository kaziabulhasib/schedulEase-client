import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      {/* <h1 className='text-red-500'>Dashboard</h1> */}
      <Outlet />
    </>
  );
}

export default App;
