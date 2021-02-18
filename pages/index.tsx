import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import NameBlock from "../components/NameBlock";
import Hausnummer from "../components/Hausnummer";

export default function Home() {
  const [name, setName] = useState("Melanie");
  const [age, setAge] = useState(17);
  const [nummer, setNummer] = useState(8);

  function changeName() {
    setName(name === "Melanie" ? "Marcel" : "Melanie");
  }

  function changeAge() {
    setAge(19);
  }

  function changeHaus() {
    setNummer(12);
  }

  function changeAll() {
    changeName();
  }

  return (
    <>
      <NameBlock feuer={name} change={changeHaus} age={age}></NameBlock>
      <Hausnummer hausnummer={nummer} />
    </>
  );
}
