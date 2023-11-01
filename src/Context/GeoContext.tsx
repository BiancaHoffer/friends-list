import {
  ReactNode,
  createContext,
  useContext,
  useState,
} from 'react';

import { gql } from 'graphql-tag';
import { useQuery } from "@apollo/client";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextProps {
  queryCountries: CountryData[];
  queryCities: CityData[];
  setFilter?: React.Dispatch<React.SetStateAction<string>>;
  filter: string;
}

export interface CountryData {
  id: number;
  name: string;
  phone_code: string;
  iso2: string;
}

export interface CityData {
  id: number;
  name: string;
}

const QUERY_COUNTRIES = gql`
  query {
  countries (page: {first: 4}) {
    totalCount
    edges {
      node {
        id
        name
        iso2
        phone_code
      }
    }
  }
}`;

const QUERY_CITIES = gql`
  query ($filter: ID!) {
    cities(filter: { ciso2: $filter }, page: { first: 4 }) {
      totalCount
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;

export const GeoContext = createContext({} as AuthContextProps);

export function GeoProvider({ children }: AuthProviderProps) {
  const [filter, setFilter] = useState("PT");

  const { data } = useQuery(QUERY_COUNTRIES);
  const { data: dataCities } = useQuery(QUERY_CITIES, {
    variables: { filter }
  });

  const queryCountries = data?.countries.edges.map((codePhone: any) => {
    return {
      id: codePhone.node.id,
      phone_code: codePhone.node.phone_code,
      iso2: codePhone.node.iso2.toLowerCase(),
      name: codePhone.node.name,
    }
  }) as CountryData[];

  const queryCities = dataCities?.cities.edges.map((citie: any) => {
    return {
      id: citie.node.id,
      name: citie.node.name,
    }
  }) as CountryData[];

  return (
    <GeoContext.Provider value={{
      queryCountries,
      queryCities,
      setFilter,
      filter,
    }}>
      {children}
    </GeoContext.Provider>
  )
}

export function useGeo() {
  const context = useContext(GeoContext);

  return context;
}