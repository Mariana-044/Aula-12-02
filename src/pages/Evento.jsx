import React, { useState } from "react";
import CardEvento from "../components/CardEvento";

export default function Evento({ eventos, onRemover }) {
  const [buscaTitulo, setBuscaTitulo] = useState("");
  const [buscaLocal, setBuscaLocal] = useState("");

  // Filtra os eventos pelo título e pelo local
  const eventosFiltrados = eventos.filter(
    (e) =>
      e.titulo.toLowerCase().includes(buscaTitulo.toLowerCase()) &&
      e.local.toLowerCase().includes(buscaLocal.toLowerCase())
  );

  return (
    <section className="stack">
      <h2>Eventos</h2>

      {/* Campo de busca por título */}
      <input
        type="text"
        placeholder="Buscar por título..."
        value={buscaTitulo}
        onChange={(e) => setBuscaTitulo(e.target.value)}
        style={{ marginBottom: "1rem" }}
      />

      {/* Campo de busca por local */}
      <input
        type="text"
        placeholder="Buscar por local..."
        value={buscaLocal}
        onChange={(e) => setBuscaLocal(e.target.value)}
        style={{ marginBottom: "1rem" }}
      />

      {eventosFiltrados.length === 0 ? (
        <p className="muted">Nenhum evento encontrado.</p>
      ) : (
        <div className="grid">
          {eventosFiltrados.map((e) => (
            <CardEvento key={e.id} evento={e} onRemover={onRemover} />
          ))}
        </div>
      )}
    </section>
  );
}
