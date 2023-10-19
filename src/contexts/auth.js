import { useState, createContext, useEffect } from "react";
import { auth, db } from "../services/firebaseConnection";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [stateMenu, setStateMenu] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const storageUser = localStorage.getItem("@syce");
      if (storageUser) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }

      setLoading(false);
    }
    loadUser();
  }, []);

  async function statusMenu() {
    setStateMenu(!stateMenu);
  }

  async function singIn(email, password) {
    setLoadingAuth(true);

    await signInWithEmailAndPassword(auth, email, password)
      .then(async (value) => {
        let uid = value.user.uid;

        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);

        let data = {
          uid: uid,
          nome: docSnap.data().nome,
          email: value.user.email,
          avatarUrl: docSnap.data().avatarUrl,
          cpf: docSnap.data().cpf,
          nascimento: docSnap.data().nascimento,
        };

        setUser(data);
        storageUser(data);
        setLoadingAuth(false);
        toast.success("Bem-vindo(a) de volta");
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
        setLoadingAuth(false);
        toast.error("Ops algo deu errado!");
      });
  }

  async function singUp(email, password, name, cpf, nascimento) {
    setLoadingAuth(true);

    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (value) => {
        let uid = value.user.uid;
        await setDoc(doc(db, "users", uid), {
          nome: name,
          avatarUrl: null,
          cpf: cpf,
          nascimento: nascimento,
        }).then(() => {
          let data = {
            uid: uid,
            nome: name,
            email: value.user.email,
            avatarUrl: null,
            cpf: cpf,
            nascimento: nascimento,
          };
          setUser(data);
          storageUser(data);
          setLoadingAuth(false);
          toast.success("Seja bem-vindo!");
          navigate("/dashboard");
        });
      })
      .catch((error) => {
        console.log(error);
        setLoadingAuth(false);
      });
  }

  async function cadFornF(
    tipo,
    nome,
    data,
    cpf,
    rg,
    gen,
    email,
    cep,
    end,
    num,
    bair,
    uf,
    cidade,
    tel,
    cel
  ) {
    
    let uid = data.user.uid;
    console.log("aqui");
    await setDoc(doc(db, "forn", uid), {
      tipo: tipo,
      nome: nome,
      nascimento: data,
      cpf: cpf,
      rg: rg,
      genero: gen,
      email: email,
      cep: cep,
      endereco: end,
      numero: num,
      bairro: bair,
      uf: uf,
      cidade: cidade,
      telefone: tel,
      celular: cel,
    })
      .then(() => {
        toast.success("Fornecedor cadastrado.");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Erro ao cadastrar.");
      });
  }

  function storageUser(data) {
    localStorage.setItem("@syce", JSON.stringify(data));
  }

  async function logout() {
    await signOut(auth);
    localStorage.removeItem("@syce");
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        singed: !!user,
        user,
        singIn,
        singUp,
        logout,
        loadingAuth,
        loading,
        storageUser,
        setUser,
        statusMenu,
        stateMenu,
        cadFornF,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
