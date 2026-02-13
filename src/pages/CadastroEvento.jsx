import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CadastroEvento({ onAdd, onRemoverTodos }) {
  const navigate = useNavigate();
  const [titulo, setTitulo] = useState("");
  const [data, setData] = useState("");
  const [local, setLocal] = useState("");
  const [descricao, setDescricao] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!titulo || !data || !local) {
      alert("Preencha todos os campos.");
      return;
    }

    onAdd({ titulo, data, local, descricao });
    navigate("/evento");
  }

  function handleClear() {
    setTitulo("");
    setData("");
    setLocal("");
    setDescricao("");
  }

  return (
    <section className="stack">
      <h2>Cadastrar Evento</h2>

      <form className="form" onSubmit={handleSubmit}>
        <label>
          Título
          <input
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Ex: Demo do sistema"
          />
        </label>

        <label>
          Data
          <input
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
        </label>

        <label>
          Local
          <input
            value={local}
            onChange={(e) => setLocal(e.target.value)}
            placeholder="Ex: Laboratório"
          />
        </label>

        <label>
          Descrição
          <input
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Ex: Reunião para organizar e decidir a demo do sistema"
          />
        </label>

        <div className="buttons">
          <div className="row">
            <button className="btn" type="submit">
              Criar
            </button>
          </div>

          <div className="row">
            <button
              className="btn ghost"
              type="button"
              onClick={() => navigate("/evento")}
            >
              Cancelar
            </button>
          </div>

          <div className="row">
            <button
              className="btn danger"
              type="button"
              onClick={handleClear}
            >
              Limpar formulário
            </button>
          </div>

          {/* Botão "Remover todos" logo abaixo */}
          <div className="row">
            <button
              className="btn danger"
              type="button"
              onClick={onRemoverTodos}
            >
              Remover todos
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
