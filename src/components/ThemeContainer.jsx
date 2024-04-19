import { FaSun, FaMoon } from "react-icons/fa6";

const colors = ["1E0342", "#F0EBE3", "#135D66"];

function ThemeContainer() {
  return (
    <div className="mb-10 py-3">
      <div className="align-element flex justify-between items-center">
        {/*colors*/}
        <div className=" flew flew-row gap-2">
          {colors.map((color) => {
            return (
              <div
                key={color}
                className="w-10 h-10 rounded-full bg-gray-200 rounded-full"
                style={{ backgroundColor: color }}
              ></div>
            );
          })}
        </div>
        {/*themes*/}
        <div>
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" />

            {/* sun icon */}
            <FaSun className="swap-on fill-current w-7 h-7 " />

            {/* moon icon */}
            <FaMoon className="swap-off fill-current w-7 h-7 " />
          </label>
        </div>
      </div>
    </div>
  );
}

export default ThemeContainer;
