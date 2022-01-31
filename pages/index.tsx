import { useState, useRef } from "react";
import { CityWeather } from "../components/city-weather";
import CityWeatherRefactor from "../components/city-weather-refactor";

export default function IndexPage() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [city, setCity] = useState<string | null>(null);

  const labelClick = () => {
    inputRef.current.focus();
  };
  return (
    <div className="py-2 bg-[#E3E8EF] h-[100vh]">
      <form
        className="flex items-center justify-center mb-5"
        onSubmit={(e) => {
          e.preventDefault();
          const formdata = new FormData(e.currentTarget);
          setCity(formdata.get("city").toString());
        }}
      >
        <div className="flex items-center justify-center font-medium text-xl">
          {/* <span className="mr-2">Weather Search: </span>{" "} */}
          <label onClick={() => labelClick()}>Weather Search: </label>
          <div className="flex border-2 border-gray-200">
            <input
              ref={inputRef}
              type="text"
              className="px-4 py-2 w-50 rounded-l-lg"
              name="city"
            />
            <button
              className="px-4 text-white bg-[#4683C8] border-l rounded-r-lg font-bold"
              type="submit"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </form>
      <div className="flex items-center justify-center">
        {city && (
          <div className="mt-4">
            <CityWeatherRefactor city={city} />
          </div>
        )}
      </div>
    </div>
  );
}
