import { Outlet } from "react-router-dom";
import { Header, Nav } from "../components";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-primary">
      <Header />
      <Nav/>
      <div className="py-4 px-32">
        <Outlet />
      </div>
    </div>
  );
}
