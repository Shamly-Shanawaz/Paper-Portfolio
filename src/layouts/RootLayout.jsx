import { Outlet } from "react-router-dom";
import { Header, Nav } from "../components";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-BG bg-right ">
      <Header />
      <Nav />
      <div className="py-4 px-32 mt-6">
        <Outlet />
      </div>
    </div>
  );
}
