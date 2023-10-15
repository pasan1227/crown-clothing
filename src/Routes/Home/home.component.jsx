import { Outlet } from "react-router-dom";
import Directory from "../../Components/Directory/directory.component";

const Home = () => {
  return (
    <div>
      <Directory />
      <Outlet />
    </div>
  );
};

export default Home;
