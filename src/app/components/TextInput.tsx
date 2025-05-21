import { useEffect, useState } from "react";

// type TextInputProps = {
//   onChange?: () => void;
// };

interface CityResult {
  display_name: string;
  lat: string;
  lon: string;
}

function TextInput() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<CityResult[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    if (query.length < 3) {
      setResults([]);
      return;
    }
    const fetchCities = async () => {
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&limit=5&addressdetails=1&city=${encodeURIComponent(
            query
          )}`,
          {
            signal: controller.signal,
            headers: {
              "User-Agent": "MoodMatcher/1.0", // Nominatim requires this
            },
          }
        );
        console.log({ res });
        const data = await res.json();
        console.log(data);
        setResults(data);
      } catch (err) {
        if ((err as any).name !== "AbortError") {
          console.error("Failed to fetch cities:", err);
        }
      }
    };

    const timeoutId = setTimeout(fetchCities, 300); // debounce
    return () => {
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, [query]);
  console.log(query);
  console.log(results);
  return (
    <>
      <input
        type="text"
        className="border bg-[#ffffff] pl-2 max-w-xs rounded-sm w-full py-2"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      {results.length > 0 && (
        <ul className="absolute z-10 mt-21 bg-white border border-gray-200  rounded-xl shadow-md max-h-100 overflow-y-auto">
          {results.map((city, idx) => (
            <li
              key={idx}
              className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
            >
              {city.display_name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default TextInput;
