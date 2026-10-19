"use client";

import { type FormEvent } from "react";
import { trackContactClick } from "./contact-tracking";
import WhatsAppIcon from "./whatsapp-icon";

const whatsappNumber = "541133101085";

export default function QuoteForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const fields = [
      ["Empresa", "empresa"],
      ["Pieza / material", "pieza"],
      ["Cantidad", "cantidad"],
      ["Contacto", "contacto"],
    ] as const;
    const details = fields.flatMap(([label, name]) => {
      const value = String(formData.get(name) ?? "").trim();
      return value ? [`${label}: ${value}`] : [];
    });
    const message = ["Hola, quiero solicitar una cotización.", ...details].join("\n");
    const whatsappUrl = new URL(`https://wa.me/${whatsappNumber}`);
    whatsappUrl.searchParams.set("text", message);

    trackContactClick("whatsapp", "quote_form", whatsappUrl.toString());
    window.open(whatsappUrl.toString(), "_blank", "noopener,noreferrer");
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <label>Empresa<input name="empresa" placeholder="Nombre de tu empresa" /></label>
      <label>Pieza / material<input name="pieza" placeholder="Ej: Válvula de latón 60/40" /></label>
      <label>Cantidad<input name="cantidad" placeholder="Ej: 200 unidades" /></label>
      <label>Contacto<input name="contacto" placeholder="Teléfono, WhatsApp o email" /></label>
      <button className="btn btn-primary" type="submit">
        <WhatsAppIcon />
        <span>Enviar consulta</span>
      </button>
    </form>
  );
}
