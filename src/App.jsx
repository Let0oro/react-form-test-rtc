import styled from "styled-components";
import "./App.css";
import { useForm } from "react-hook-form";
import PumpkinCSS from "./components/Pumpkin";
import { useState } from "react";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    console.log(errors);
  };

  const [statePumpkin, setStatePumpkin] = useState("normal");

  return (
    <div style={{ width: "100%", height: "99%", padding: "0", margin: "0" }}>
      <h1>Happy Halloween Codember</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "grid",
          gridTemplateColumns: "30% 30% 30%",
          gridTemplateRows: "50% 50%",
          gridTemplateAreas: "'name . email' '. pass .'",
          paddingTop: '10%',
          gap: '25lvh 10%'
        }}
      >
        <Input
          style={{ gridArea: "name" }}
          type="text"
          placeholder="Name"
          {...register("Name", { required: true, maxLength: 80 })}
        />
        <PumpkinCSS state={statePumpkin} />
        <Input
          style={{ gridArea: "email" }}
          type="text"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <Input
          style={{ gridArea: "pass" }}
          type="password"
          placeholder="Password"
          {...register("Password", {
            required: true,
            max: 24,
            min: 8,
            maxLength: 24,
            pattern: /^[0-9]{8}[a-zA-Z]/i,
          })}
        />
      </form>
    </div>
  );
}

const Input = styled.input`
  height: 2rem;
`

export default App;
