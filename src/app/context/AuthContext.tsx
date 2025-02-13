"use client";
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
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "next/navigation";

type Props = {
  children: ReactNode;
};

interface AuthContextType {
  user: User | null;
  googleSignIn: () => void;
  emailSignIn: (email: string, password: string) => Promise<void>;
  logOut: () => void;
  signUpWithEmail: (
    email: string,
    password: string,
    displayName: string
  ) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider: FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  // Google Sign-In

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    signInWithPopup(auth, provider);
  };

  // Create User With Email And Password
  const signUpWithEmail = async (
    email: string,
    password: string,
    displayName: string
  ) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await updateProfile(user, { displayName });
      setUser({ ...user, displayName });
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
      // setUser(userCredential.user);
      const user = userCredential.user;
      setUser({ ...user, displayName: user.displayName });
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
      if (currentUser) {
        setUser({ ...currentUser, displayName: currentUser.displayName });
      } else {
        setUser(null);
      }
      router.push("/books");
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

// "use client";

// import {
//   useContext,
//   createContext,
//   useState,
//   useEffect,
//   ReactNode,
//   FC,
// } from "react";
// import {
//   signInWithRedirect,
//   getRedirectResult,
//   signOut,
//   onAuthStateChanged,
//   GoogleAuthProvider,
//   User,
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
// } from "firebase/auth";
// import { auth } from "../firebase";
// import { useRouter } from "next/navigation";

// type Props = {
//   children: ReactNode;
// };

// interface AuthContextType {
//   user: User | null;
//   googleSignIn: () => void;
//   emailSignIn: (email: string, password: string) => Promise<void>;
//   logOut: () => void;
//   signUpWithEmail: (email: string, password: string) => Promise<void>;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthContextProvider: FC<Props> = ({ children }) => {
//   const [user, setUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState(true); // ✅ Prevents hydration issues
//   const router = useRouter();

//   // ✅ Google Sign-In (Redirect)
//   const googleSignIn = () => {
//     const provider = new GoogleAuthProvider();
//     // provider.setCustomParameters({ prompt: "select_account" });

//     signInWithRedirect(auth, provider);
//   };

//   // ✅ Capture Redirect Result After Login
//   useEffect(() => {
//     getRedirectResult(auth)
//       .then((result) => {
//         if (result?.user) {
//           setUser(result.user); // ✅ Updates user state
//           console.log("Redirect Sign-In Successful:", result.user);
//           router.push("/books"); // ✅ Redirect after successful login
//         }
//       })
//       .catch((error) => {
//         console.error("Redirect Sign-In Error:", error);
//       });
//   }, [router]); // ✅ Ensures redirection after login

//   // ✅ Create User With Email & Password
//   const signUpWithEmail = async (email: string, password: string) => {
//     try {
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       setUser(userCredential.user);
//       console.log("User registered successfully:", userCredential.user);
//     } catch (error) {
//       console.error("Sign Up Error:", error);
//       throw error;
//     }
//   };

//   // ✅ Email Sign-In
//   const emailSignIn = async (email: string, password: string) => {
//     try {
//       const userCredential = await signInWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       setUser(userCredential.user);
//       console.log("Signed in successfully:", userCredential.user);
//     } catch (error) {
//       console.error("Email Sign-In Error:", (error as Error).message);
//       throw error;
//     }
//   };

//   // ✅ Log Out
//   const logOut = async () => {
//     try {
//       await signOut(auth);
//       setUser(null);
//       console.log("User signed out.");
//     } catch (error) {
//       if (error instanceof Error) {
//         console.error("Sign-Out Error:", error.message);
//       } else {
//         console.error("Sign-Out Error:", error);
//       }
//     }
//   };

//   // ✅ Listen to Auth State Changes
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setLoading(false); // ✅ Prevents hydration errors
//     });

//     return () => unsubscribe();
//   }, []);

//   return (
//     <AuthContext.Provider
//       value={{ user, googleSignIn, emailSignIn, logOut, signUpWithEmail }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const UserAuth = (): AuthContextType => {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error("UserAuth must be used within an AuthContextProvider");
//   }
//   return context;
// };
