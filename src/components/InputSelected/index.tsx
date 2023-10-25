import { ComponentProps, useState } from "react";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { Container, Select, Options, Item } from "./styles";


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
    id: 2,
    name: "Alemanha",
    phone_number: "55",
  }
]

export function InputSelect({ title }: InputSelectProps) {
  const [openSelect, setOpenSelect] = useState(false);
  const [itemSeleted, setItemSeleted] = useState(`Selecionar ${title}...`);

  function handleGetCountry(e: any) {
    setOpenSelect(false);
    setItemSeleted(e.target.value);
  }

  return (
    <Container>
      <Select openSelect={openSelect}>
        <label htmlFor="option-view-button"></label>
        <input
          type="checkbox"
          id="option-view-button"
          onChange={() => setOpenSelect(!openSelect)}
        />

        <div id="select-button">
          <div>{itemSeleted}</div>

          <div id="chevrons">
            {openSelect ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
        </div>
      </Select>

      <Options openSelect={openSelect}>
        <div id="option">
          {countries?.map((i: any) => {
            return (
              <Item key={i.id}>
                <input
                  type="radio"
                  name="country"
                  value={i.name}
                  onChange={handleGetCountry}
                />

                <label>{i.name}</label>
              </Item>
            )
          })}
        </div>
      </Options>
    </Container>
  )
}