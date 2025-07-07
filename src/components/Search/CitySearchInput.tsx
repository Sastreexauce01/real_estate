import { MapPinHouse } from "lucide-react";
import React, { useState, useEffect } from "react";

interface Suggestion {
  display_name: string;
  lat: string;
  lon: string;
}

const CitySearchInput = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) => {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [isLoading, setisLoading] =useState(false)
 

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (value.length < 2) return;

      fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          value
        )}&limit=5`
      )
        .then((res) => res.json())
        .then((data) => setSuggestions(data))
        .catch(console.error);
    }, 100);

    return () => clearTimeout(delayDebounce);

  }, [value]);

  return (
    <div className=" w-full">
    
      { suggestions.length > 0 && (
        <ul className=" mt-1 w-full ">
          {suggestions.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                onChange(item.display_name);
               
              }}
              className="p-4 cursor-pointer hover:bg-gray-100 flex flex-row gap-2 text-sm "
            >
              <MapPinHouse />
              {item.display_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CitySearchInput;
