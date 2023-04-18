import { Outlet } from "react-router-dom";
import { Navigation } from "../../components/Navigation/Navigation";
import { Footer } from "../../components/Footer";

export function MainLayout() {
  return (
    <div>
      <Navigation/>
      <Outlet/>
      <Footer/>
    </div>
  );
}
 