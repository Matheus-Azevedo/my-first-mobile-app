import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type UserName = string | null;

interface UserContextType {
  userName: UserName;
  setUserName: Dispatch<SetStateAction<UserName>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [userName, setUserName] = useState<UserName>(null);

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
