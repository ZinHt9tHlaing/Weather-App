import { Outlet } from "react-router";
import Footer from "./Footer";
import { Header } from "./Header";

const RootLayout = () => {
  return (
    <div className="from-background to-muted bg-linear-to-br">
      <Header />
      <main className="container mx-auto min-h-screen px-4 lg:px-15 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
