import { navLinks } from "../constants";
import { getAssetPath } from "../utils/assetPath";

const NavBar = () => {
  return (
    <header>
      <nav>
        <img src={getAssetPath("/logo.svg")} alt="Apple Logo" />

        <ul>
          {navLinks.map(({ label }) => (
            <li key={label}>
              <a href={label}>{label}</a>
            </li>
          ))}
        </ul>

        <div className="flex-center gap-3">
          <button>
            <img src={getAssetPath("/search.svg")} alt="Search" />
          </button>
          <button>
            <img src={getAssetPath("/cart.svg")} alt="Cart" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
