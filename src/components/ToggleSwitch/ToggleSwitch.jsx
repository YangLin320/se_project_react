import { useContext } from "react";
import "./ToggleSwitch.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

export default function ToggleSwitch() {
   const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
      CurrentTemperatureUnitContext,
   );
   return (
      <label className="toggle-switch">
         <input
            id="toggle_checkbox"
            onChange={handleToggleSwitchChange}
            type="checkbox"
            className="toggle-switch_checkbox"
         />
         <span className="toggle-switch_circle"></span>
         <span
            className={`toggle-switch_F toggle-switch_text ${currentTemperatureUnit === "F" ? "toggle-switch_text-active" : ""}`}
         >
            F
         </span>
         <span
            className={`toggle-switch_C toggle-switch_text ${currentTemperatureUnit === "C" ? "toggle-switch_text-active" : ""}`}
         >
            C
         </span>
      </label>
   );
}
