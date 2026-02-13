import React from "react";

export default function EventoCard({ evento }) {
  return (
    <div className="card">
      <div>
        <h3>{evento.titulo}</h3>
        <p><strong>Data:</strong> {evento.data}</p>
        <p><strong>Local:</strong> {evento.local}</p>
        {/* Aqui é a descrição */}
        <p><strong>Descrição:</strong> {evento.descricao}</p>
      </div>
    </div>
  );
}
