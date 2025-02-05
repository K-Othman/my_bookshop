import {
  useContext,
  createContext,
  useState,
  useEffect,
  ReactNode,
  FC,
} from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  User,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

type Props = {
  children: ReactNode;
};

interface AuthContextType {
  user: User | null;
  googleSignIn: () => void;
  emailSignIn: (email: string, password: string) => Promise<void>;
  logOut: () => void;
  signUpWithEmail: (email: string, password: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider: FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Google Sign-In
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).catch((error) =>
      console.error("Google Sign-In Error:", error.message)
    );
  };

  // Create User With Email And Password
  const signUpWithEmail = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User registered successfully:", userCredential.user);
    } catch (error) {
      console.error("Sign Up Error:", error);
    }
  };

  // Email And Password Sign-In
  const emailSignIn = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      console.log("Signed in successfully:", userCredential.user);
    } catch (error) {
      console.error("Email Sign-In Error:", (error as Error).message);
      throw error;
    }
  };

  // Log Out
  const logOut = () => {
    signOut(auth)
      .then(() => setUser(null))
      .catch((error) => console.error("Sign-Out Error:", error.message));
  };

  // Listen to Auth State Changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, googleSignIn, emailSignIn, logOut, signUpWithEmail }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("UserAuth must be used within an AuthContextProvider");
  }
  return context;
};
