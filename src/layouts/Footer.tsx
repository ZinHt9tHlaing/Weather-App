import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t md:px-0 lg:ml-0 lg:px-20">
      <div className="container mx-auto pt-6 pb-8 text-center lg:py-6">
        © {date.getFullYear()} . Made with love by{" "}
        <Link
          to="/"
          onClick={scrollToTop}
          className="font-semibold underline duration-300 hover:text-gray-600 active:scale-90"
        >
          ZHH
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
