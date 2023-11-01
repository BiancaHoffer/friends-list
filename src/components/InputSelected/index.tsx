import { ComponentProps, useState } from "react";

import { IoIosArrowDown, IoIosArrowUp, IoMdCheckmark } from "react-icons/io";

import { Container, Select, Option } from "./styles";

import { useGeo } from "../../Context/GeoContext";
import { CountryData } from "../../Context/ContactContext";


interface InputSelectProps extends ComponentProps<'input'> {
  title?: string;
}

export function InputSelect({ title, ...props }: InputSelectProps) {
  const [isSelected, setisSelected] = useState(false);
  const [itemSeleted, setItemSeleted] = useState(`Selecionar ${title}`);

  const { queryCountries, filter, setFilter } = useGeo();

  function handleSelect(country: CountryData) {
    setisSelected(false);
    const teste = country
    //@ts-ignore
    setFilter(country.iso2)
  }

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