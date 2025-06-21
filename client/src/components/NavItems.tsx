import { navItems } from "../constants/navItems";

const NavItems = () => (
  <>
    <div className="hidden sm:flex items-center justify-center bg-green-50 shadow py-6">
      <div className="flex gap-12 max-w-5xl w-full px-10 justify-around">
        {navItems.map(({ href, label, Icon }, i) => (
          <a
            key={i}
            href={href}
            className="flex flex-col items-center text-gray-700 hover:text-green-600 hover-zoom"
          >
            <Icon className="w-6 h-6 mb-1" />
            <span className="text-base font-medium">{label}</span>
          </a>
        ))}
      </div>
    </div>

    <div className="fixed bottom-0 left-0 right-0 bg-white shadow sm:hidden flex justify-around py-2 border-t border-gray-300 z-50">
      {navItems.map(({ href, label, Icon }, i) => (
        <a
          key={i}
          href={href}
          className="flex flex-col items-center text-xs text-gray-600 hover:text-green-600 hover-zoom"
        >
          <Icon className="w-5 h-5 mb-0.5" />
          {label}
        </a>
      ))}
    </div>
  </>
);

export default NavItems;
