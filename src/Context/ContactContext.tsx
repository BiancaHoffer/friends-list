import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextProps {
  addContact: (data: DataForm) => void;
  removeContact: (id: string) => void;
  updateContact: (data: DataForm) => void;
  listContacts: DataForm[];
}

export interface DataForm {
  id?: string;
  name: string;
  email: string;
  phone: string;
  iso2?: string;
  phone_code?: string;
  country?: string;
  avatar_url?: string;
}

export const ContactContext = createContext({} as AuthContextProps);

export function ContactProvider({ children }: AuthProviderProps) {
  const [listContacts, setListContacts] = useState<DataForm[]>(() => {
    const storage = localStorage.getItem('@biancamacedo');

    if (storage) {
      return JSON.parse(storage);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem("@biancamacedo", JSON.stringify(listContacts));
  }, [listContacts]);


  function addContact(data: DataForm) {
    setListContacts((prevList) => [...prevList, data]);
  };

  function updateContact(data: DataForm) {
    setListContacts((prevList) => prevList.filter((contact) => contact.id !== data.id));
    setListContacts((prevList) => [...prevList, data]);
  };

  function removeContact(id: string) {
    setListContacts((prevList) => prevList.filter((contact) => contact.id !== id));
  };

  return (
    <ContactContext.Provider value={{
      addContact,
      listContacts,
      updateContact,
      removeContact,
    }}>
      {children}
    </ContactContext.Provider>
  )
}

export function useContact() {
  const context = useContext(ContactContext);

  return context;
}