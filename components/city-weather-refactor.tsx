import { useState, FC, ReactElement, useEffect } from "react";

// to get api key: https://openweathermap.org/appid
const API_KEY = "5ab9cbc3f3db70d6656085540fc66b99";

type ChildProps = {
  city: string;
};
function KtoF(tempKevlin: number) {
  console.log("number", tempKevlin);
  return ((tempKevlin - 273.15) * 9) / 5 + 32;
}

const CityWeatherRefactor: FC<ChildProps> = ({ city }): ReactElement => {
  const [weatherResult, setWeatherResult] = useState<any | null>(null);

  useEffect(() => {
    console.log("useEffect");
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    )
      .then((r) => r.json())
      .then((result) => {
        console.log("result", result);
        setWeatherResult(result);
      });
  }, [city]);

  return (
    <>
      {weatherResult && weatherResult?.weather && (
        <div className="w-full rounded-xl overflow-hidden shadow-lg text-center bg-white">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-3xl text-gray-500">
              {city}
            </div>
            <div className="flex justify-center">
              <img
                className="w-[65%]"
                src={`http://openweathermap.org/img/wn/${weatherResult?.weather[0]?.icon}@2x.png`}
              />
            </div>

            <h3 className="text-gray-400 text-2xl">
              {weatherResult?.weather[0]?.description}
            </h3>
            <h5 className="text-gray-400 text-xl">
              Temperature:{" "}
              <span className="text-black text-4xl">
                {KtoF(weatherResult?.main?.temp).toFixed(0)} {" °F"}
              </span>
            </h5>
          </div>
        </div>
      )}
    </>
  );
};

export default CityWeatherRefactor;
