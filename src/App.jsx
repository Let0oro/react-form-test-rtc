import styled from "styled-components";
import "./App.css";
import { useForm } from "react-hook-form";
import PumpkinCSS from "./components/Pumpkin";
import { use, useState } from "react";
import { ErrorMessage } from "@hookform/error-message";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ criteriaMode: "all" });

  const onSubmit = (data) => {
    console.log(data);
    console.log(errors);
    setStatePumpkin("complete")
  };

  const onError = () => {
    console.log(errors);
    setStatePumpkin("upset")
  };

  const [statePumpkin, setStatePumpkin] = useState("normal");

  return (
    <div style={{ width: "100%", height: "max-content", padding: "0", margin: "0" }}>
      <h1 style={{ position: "relative" }}>
        Happy Halloween Codember
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        style={{
          display: "grid",
          height: "30%",
          gridTemplateColumns: "33% 33% 33%",
          gridTemplateRows: "25% 25% 25% 25%",
          gridTemplateAreas: "'name . email' '. . .' '. pass .' '. submit .'",
          paddingTop: "10%",
          gap: "4rem 0",
        }}
      >
        <div style={{ gridArea: "name", display: "grid", placeItems: "center" }}>
          <Input
            type="text"
            placeholder="Name"
            // title="Por favor, rellene este campo, el nombre no puede tener menos de 3 caracteres ni más de 24"
            // pattern="\w{3,24}"
            {...register("name", {
              required: "This field is required",
              minLength: {
                value: 4,
                message: "This field must exceed 3 characters",
              },
              maxLength: {
                value: 24,
                message: "This field must`t exceed 80 characters",
              },
            })}
          />
          <ErrorMessage
            errors={errors}
            name="name"
            render={({ messages }) => {
              console.log("messages", messages);
              return messages
                ? Object.entries(messages).map(([type, message]) => (
                    <p key={type}>{message}</p>
                  ))
                : null;
            }}
          />
        </div>
        <PumpkinCSS state={statePumpkin} />
        <div style={{ gridArea: "email", display: "grid", placeItems: "center" }}>
          <Input
            type="text"
            placeholder="Email"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/g,
                message:
                  "The email must contain the regular structure 'email@company.domain'",
              },
            })}
          />
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ messages }) => {
              console.log("messages", messages);
              return messages
                ? Object.entries(messages).map(([type, message]) => (
                    <p key={type}>{message}</p>
                  ))
                : null;
            }}
          />
        </div>
        <div style={{ gridArea: "pass", display: "grid", placeItems: "center" }}>
          <Input
            type="password"
            // pattern="[0-9]{1,}[a-zA-Z]{1,}[@#$%&.,_-]{1,}"
            // title="Por favor, introduzca como mínimo 8 caracteres entre letras, capitales, números y símbolos especiales"
            placeholder="Password"
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 8,
                message: "This field must exceed 8 characters",
              },
              maxLength: {
                value: 24,
                message: "This field must`t exceed 24 characters",
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,24}$/g,
                message:
                  "The password must contain letters, capitals and special characters",
              },
            })}
          />
          <ErrorMessage
            errors={errors}
            name="password"
            render={({ messages }) => {
              console.log("messages", messages);
              return messages
                ? Object.entries(messages).map(([type, message]) => (
                    <p key={type}>{message}</p>
                  ))
                : null;
            }}
          />
        </div>

        <div style={{ gridArea: "submit", display: "grid", placeItems: "center" }}>

        <Input type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
}

const Input = styled.input`
  height: 2rem;
  width: 80%;

  ${(props) =>
    props.type == "submit" &&
    `color: white;
  background-color: #3B3B3B;
  text-transform: uppercase;
  border: 2px solid transparent;
  font-weight: 600;
  font-size: 13px;
  border-radius: 4px;
  font-weight: 400;
  letter-spacing: 0.25rem;
  transition: 0.3s all;

  &:hover {
    border: 2px solid #CA581A;
    background-color: #F8B500;
    color: #CA581A;
    font-weight: bold;
  }
`}
`;

export default App;
