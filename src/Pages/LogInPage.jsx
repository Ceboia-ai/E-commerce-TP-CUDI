import { useState } from "react";
import { Mail, KeyRound } from "lucide-react";
import FormField from "../Components/FormField";
import TitleForm from "../Components/TitleForm";

const LogInPage = ({ setUserLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => { //no permite que serecargue la pagina
    e.preventDefault();

    // Simulación de login exitoso
    if (email === "test@example.com" && password === "1234") {
      setUserLogin(true);
      localStorage.setItem("userLogin", "true");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <TitleForm title="Iniciar sesión" />
      <FormField
        fieldName="email"
        FieldIcon={Mail}
        fieldValue={email}
        onChange={setEmail}
      />
      <FormField
        fieldName="password"
        FieldIcon={KeyRound}
        fieldValue={password}
        onChange={setPassword}
      />
      <button type="submit">Ingresar</button>
    </form>
  );
};

export default LogInPage;
