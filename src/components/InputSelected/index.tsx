import { ComponentProps, useState, useEffect } from "react";

import { IoIosArrowDown, IoIosArrowUp, IoMdCheckmark } from "react-icons/io";

import { Container, Select, Option } from "./styles";

import { useGeo } from "../../Context/GeoContext";
import { CountryData } from "../../Context/GeoContext";


interface InputSelectProps extends ComponentProps<'input'> {
  title?: string;
  setSelected: any;
}

export function InputSelect({ title, setSelected, ...props }: InputSelectProps) {
  const [isSelected, setisSelected] = useState(false);
  const [itemSeleted, setItemSeleted] = useState(`Selecionar ${title}`);
  const [iso, setIso] = useState("");

  const { queryCountries, setFilter } = useGeo();

  function handleSelect(country: CountryData) {
    setisSelected(false);
    setIso(country.iso2)
  }

  useEffect(() => {
    function updateState() {
      setSelected(itemSeleted);
      //@ts-ignore
      setFilter(iso);
    }

    updateState()
  }, [handleSelect])

  return (
    <Container>
      <Select isSelected={isSelected}>
        <input
          type="checkbox"
          onChange={() => setisSelected(!isSelected)}
          {...props}
        />

        <div>
          {itemSeleted}
        </div>

        <div>
          {isSelected ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </Select>

      <Option isSelected={isSelected}>
        <div id="options-content">
          {queryCountries?.map((country) => {
            return (
              <div key={country.id}>
                <input
                  type="radio"
                  name="item"
                  value={country.name}
                  onChange={(e) => setItemSeleted(e.target.value)}
                  onClick={() => handleSelect(country)}
                />

                {country.name}

                <div className="text-primary">
                  {itemSeleted === country.name && <IoMdCheckmark />}
                </div>
              </div>
            )
          })}
        </div>
      </Option>
    </Container>
  )
}