import { useState, ComponentProps, useEffect } from "react";

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

import { CountryData, useGeo } from "../../Context/GeoContext";


interface InputProps extends ComponentProps<'input'> {
  setCodePhone?: any;
  setIso2?: any;
};

export function InputPhone({ setCodePhone, setIso2, ...props }: InputProps) {
  const [isSelected, setisSelected] = useState(false);
  const [itemSeleted, setItemSeleted] = useState("351");
  const [flag, setFlag] = useState("https://flagcdn.com/pt.svg");

  const { queryCountries } = useGeo();

  function handleSelect(country: CountryData) {
    setisSelected(false);
    setFlag(`https://flagcdn.com/${country.iso2}.svg`)
  }

  useEffect(() => {
    function teste() {
      setIso2(flag)
      setCodePhone(itemSeleted);
    }

    teste();
  }, [handleSelect])

  setIso2(flag);
  setCodePhone(itemSeleted);

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
            {queryCountries?.map((country: CountryData) => {
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
                      src={`https://flagcdn.com/${country.iso2}.svg`}
                      width="30"
                      alt={country.name}
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