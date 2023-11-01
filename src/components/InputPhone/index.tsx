import { useState, ComponentProps } from "react";

import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoMdCheckmark
} from "react-icons/io";

import {
  Container,
  Select,
  Option,
  Input
} from "./styles";

interface CountryData {
  id: number;
  name: string;
  phone_code: string;
  emoji: string;
}

const countries = [{
  id: 200,
  name: "Singapore",
  phone_code: "65",
  emoji: "ph",
}, {
  id: 222,
  name: "Thailand",
  phone_code: "66",
  emoji: "br",
}, {
  id: 224,
  name: "Alabama",
  phone_code: "11",
  emoji: "br",
}]

interface InputProps extends ComponentProps<'input'> {

};

export function InputPhone({ ...props }: InputProps) {
  const [isSelected, setisSelected] = useState(false);
  const [itemSeleted, setItemSeleted] = useState("");
  const [flag, setFlag] = useState("https://flagcdn.com/pt.svg")

  function handleSelect(country: CountryData) {
    setisSelected(false);
    setFlag(`https://flagcdn.com/${country.emoji}.svg`)
  }
  return (
    <Container isSelected={isSelected}>
      <div>


        <Select isSelected={isSelected}>
          <input
            type="checkbox"
            onChange={() => setisSelected(!isSelected)}
          />

          <div id="item-selected">
            +
            <img
              src={flag}
              width="30"
              alt="Ukraine"
            />
          </div>

          <div>
            {isSelected ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
        </Select>

        <Option isSelected={isSelected}>
          <div id="options-content">
            {countries.map((country) => {
              return (
                <div key={country.id}>
                  <input
                    type="radio"
                    name="item"
                    value={country.phone_code}
                    onChange={(e) => setItemSeleted(e.target.value)}
                    onClick={() => handleSelect(country)}
                  />

                  <div id="item">
                    <img
                      src={`https://flagcdn.com/${country.emoji}.svg`}
                      width="30"
                      alt="Ukraine"
                    />

                    (+ {country.phone_code})
                  </div>

                  <div id="check">
                    {itemSeleted === country.phone_code && <IoMdCheckmark />}
                  </div>
                </div>
              )
            })}
          </div>
        </Option>
      </div>

      <Input {...props} />
    </Container>
  )
}