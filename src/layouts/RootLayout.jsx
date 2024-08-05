import { Outlet } from "react-router-dom";
import { Header, Nav, Footer } from "../components";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-BG bg-right ">
      <Header />
      <Nav />
      <div className="pt-4 px-32 mt-6">
        <Outlet />
        {/* <Footer /> */}
      </div>
    </div>
  );
}
