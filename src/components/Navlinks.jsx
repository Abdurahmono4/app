import { Link } from "react-router-dom";

const links = [
  { id: 1, text: "Home", link: "/" },
  { id: 2, text: "About", link: "/about" },
  { id: 3, text: "Contact", link: "/contact" },
];

function Navlinks() {
  return (
    <div className="flex gap-5 ">
      {links.map((link) => {
        return (
          <Link
            to={link.link}
            key={link.id}
            className="px-3 py-3 hover:bg-base-content hover:text-white rounded-lg transition-all flex-col gap-5"
          >
            {link.text}
          </Link>
        );
      })}
    </div>
  );
}

export default Navlinks;
