import { ComponentProps, useState } from "react";

import { IoIosArrowDown, IoIosArrowUp, IoMdCheckmark } from "react-icons/io";

import { Container, Select, Option } from "./styles";

import { useGeo } from "../../Context/GeoContext";


interface InputSelectProps extends ComponentProps<'input'> {
  title?: string;
}

const countries = [
  {
    id: 1,
    name: "Brasil",
    phone_number: "55",
  },
  {
    id: 2,
    name: "Portugal",
    phone_number: "55",
  },
  {
    id: 3,
    name: "Alemanha",
    phone_number: "55",
  }
]

export function InputSelectCities({ title, ...props }: InputSelectProps) {
  const [isSelected, setisSelected] = useState(false);
  const [itemSeleted, setItemSeleted] = useState(`Selecionar ${title}`);

  const { queryCities } = useGeo();

  function handleSelect(e: any) {
    setisSelected(false);
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
          {queryCities?.map((city) => {
            return (
              <div key={city.id}>
                <input
                  type="radio"
                  name="item"
                  value={city.name}
                  onChange={(e) => setItemSeleted(e.target.value)}
                  onClick={handleSelect}
                />

                {city.name}

                <div className="text-primary">
                  {itemSeleted === city.name && <IoMdCheckmark />}
                </div>
              </div>
            )
          })}
        </div>
      </Option>
    </Container>
  )
}