import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const RootLayout = () => {
  return (
    <div className="from-background to-muted bg-linear-to-br">
      header
      <main className="container mx-auto min-h-screen px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
