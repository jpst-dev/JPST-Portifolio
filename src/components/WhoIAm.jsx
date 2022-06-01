import React, { useEffect, useState } from "react";

import api from "../services/api";

import "../styles/whoIAm.css";

import curriculo from "../assets/curriculo.pdf";

export function WhoIAm() {
  const [user, setUser] = useState();

  useEffect(() => {
    api
      .get("/users/JPST-Developer")
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <section id="whoIAm">
      <h1><strong>Quem sou eu?</strong></h1>

      <div className="container">
        <aside className="img-wrapper">
          <img src={user?.avatar_url} alt="new" />
        </aside>

        <div className="about-content">
          <h1>Sobre mim</h1>
          <p>
            Desenvolvedor Frontend com experiência em React, JavaScript, TypeScript, NextJS e Styled Components. Sou
            apaixonado por desenvolver aplicações web, tendo como prioridade a criação de sites responsivos, dinâmicos,
            intuitivos e de rápido carregamento. Também possuo experiência com Metodologias Ágeis e Testes Unitários
            (Jest).
          </p>
        </div>
        <div className="btn-container">
          <a
            href={curriculo}
            download="Currículo Vitae - João Pedro da Silva Teixeira"
            target="_blank"
            className="btn-about"
            rel="noreferrer"
          >
            Currículo
          </a>
          <a className="btn-about" href="mailto:jpst_2001@hotmail.com">
            Entre em contato
          </a>
        </div>
      </div>
    </section>
  );
}
