"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "../ui/input";
import { Calendar as CalendarIcons, Search as SearchIcons } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { type DateRange } from "react-day-picker";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import CitySearchInput from "./CitySearchInput";
import { SearchValue } from "@/type";

const Search = () => {
  const [searchValue, setSearchValue] = useState<SearchValue>({
    typeLocation: "",
    destination: "",
    date: {
      from: new Date(),
      to: new Date(new Date().setMonth(new Date().getMonth() + 1)),
    },
  });

  return (
    <div className=" w-full  md:w-4/5 flex flex-col sm:flex-row  gap-4 justify-between items-center  bg-white p-4 rounded-md lg:rounded-full">
      {/* Type de location  */}
      <Select
        onValueChange={(value) =>
          setSearchValue((prev) => ({ ...prev, typeLocation: value }))
        }
      >
        <SelectTrigger className="w-1/3 border   ">
          <SelectValue placeholder="Type de location" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="vacances">Location de vacances</SelectItem>
          <SelectItem value="longue">Locations longue durée</SelectItem>
          <SelectItem value="temporaire">Séjours temporaires</SelectItem>
        </SelectContent>
      </Select>

      {/* Lieu */}
      <Popover>
        <PopoverTrigger className="w-1/3 h-12   ">
          <Input
            placeholder="Où allez-vous ?"
            className="h-12 "
            value={searchValue.destination}
            onChange={(e) =>
              setSearchValue((prev) => ({
                ...prev,
                destination: e.target.value,
              }))
            }
          />
        </PopoverTrigger>
        <PopoverContent className="w-auto">
          <CitySearchInput
            value={searchValue.destination}
            onChange={(value) =>
              setSearchValue((prev) => ({ ...prev, destination: value }))
            }
            
          />
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger className="w-1/3 h-12   ">
          <div className=" flex flex-row  items-center gap-2  border px-2  rounded-md">
            <CalendarIcons className="h-4 w-4" />
            <div className="flex  flex-col  items-start  gap-2 text-[12px]">
              <p>Dates</p>

              <p className="font-semibold">
                {searchValue.date.from?.toLocaleDateString("fr-FR", {
                  day: "2-digit",
                  month: "short",
                })}{" "}
                -{" "}
                {searchValue.date.to?.toLocaleDateString("fr-FR", {
                  day: "2-digit",
                  month: "short",
                })}
              </p>
            </div>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-auto">
          {searchValue.typeLocation === "longue" ? (
            <Calendar
              mode="single"
              selected={searchValue.date.from}
              onSelect={(value) =>
                setSearchValue((prev) => ({
                  ...prev,
                  date: {
                    from: value as Date,
                    to: value as Date,
                  },
                }))
              }
              defaultMonth={searchValue.date?.from}
              numberOfMonths={1}
              disabled={(date) => date < new Date()}
              className="rounded-lg border shadow-sm"
            />
          ) : (
            <Calendar
              mode="range"
              selected={searchValue.date}
              onSelect={(value) =>
                setSearchValue((prev) => ({
                  ...prev,
                  date: value as DateRange,
                }))
              }
              defaultMonth={searchValue.date?.from}
              numberOfMonths={2}
              disabled={(date) => date < new Date()}
              className="rounded-lg border shadow-sm"
              excludeDisabled
            />
          )}
        </PopoverContent>
      </Popover>

      <Button className="cursor-pointer h-12 gap-x-1.5 rounded-full ">
        <SearchIcons className="size-4 " />
        <span>Rechercher</span>
      </Button>
    </div>
  );
};

export default Search;
