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
  addContact: (data: DataContact) => void;
  removeContact: (id: string) => void;
  updateContact: (data: DataContact) => void;
  listContacts: DataContact[];
}

export interface DataContact {
  id?: string;
  name: string;
  email: string;
  phone: string;
}

export const ContactContext = createContext({} as AuthContextProps);

export function ContactProvider({ children }: AuthProviderProps) {
  const [listContacts, setListContacts] = useState<DataContact[]>(() => {
    const storage = localStorage.getItem('@biancamacedo');

    if (storage) {
      return JSON.parse(storage);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem("@biancamacedo", JSON.stringify(listContacts));
  }, [listContacts]);

  function addContact(data: DataContact) {
    setListContacts((prevList) => [...prevList, data]);
  };

  function updateContact(data: DataContact) {
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
      removeContact
    }}>
      {children}
    </ContactContext.Provider>
  )
}

export function useCreateContact() {
  const context = useContext(ContactContext);

  return context;
}