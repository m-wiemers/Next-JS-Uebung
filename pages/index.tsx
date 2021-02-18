import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import NameBlock from "../components/NameBlock";
import Hausnummer from "../components/Hausnummer";

export default function Home() {
  const [name, setName] = useState("Melanie");
  const [age, setAge] = useState(35);
  const [nummer, setNummer] = useState(8);

  function changeName() {
    setName(name === "Melanie" ? "Marcel" : "Melanie");
  }

  function changeAge() {
    setAge(age === 35 ? 36 : 35);
  }

  function changeHaus() {
    setNummer(nummer === 12 ? 8 : 12);
  }

  function changeAll() {
    changeName();
    changeAge();
    changeHaus();
  }

  return (
    <>
      <NameBlock name={name} change={changeAll} age={age}></NameBlock>
      <Hausnummer hausnummer={nummer} />
    </>
  );
}
