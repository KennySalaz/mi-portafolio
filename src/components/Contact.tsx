import React from 'react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-white rounded-3xl shadow-lg border border-slate-100 p-8 md:p-10 space-y-8 animate-fade"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-500 grid place-items-center text-xl">
          ✉️
        </div>
        <div>
          <p className="text-sm font-semibold text-orange-600">Contacto</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Hablemos de tu proyecto</h2>
        </div>
      </div>

      <p className="text-slate-600 leading-relaxed max-w-3xl">
        Estoy disponible para colaborar en proyectos web o móviles, desde landing pages hasta dashboards
        complejos. Escríbeme y te respondo muy rápido.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        <a
          href="mailto:mipto.kenny@gmail.com"
          className="group rounded-2xl border border-slate-100 bg-slate-50 p-5 shadow-sm hover:-translate-y-1 hover:shadow-md transition"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-orange-500 to-red-500 text-white grid place-items-center text-xl font-semibold">
              ✉️
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500 font-semibold">Email</p>
              <p className="text-base font-semibold text-slate-900">mipto.kenny@gmail.com</p>
              <p className="text-xs text-orange-600">Respuesta en horas hábiles</p>
            </div>
          </div>
        </a>

        <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-green-500 to-emerald-500 text-white grid place-items-center text-xl font-semibold">
              📍
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500 font-semibold">Ubicación</p>
              <p className="text-base font-semibold text-slate-900">Caracas, Venezuela</p>
              <p className="text-xs text-green-600">Disponible para trabajo remoto</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
        <p className="text-sm text-slate-600">
          Cuéntame sobre tu idea, alcance y tiempos. Puedo ayudarte con arquitectura, maquetación, desarrollo
          frontend y puesta en producción.
        </p>
        <div className="flex flex-wrap gap-3 mt-4">
          <a
            href="mailto:mipto.kenny@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-linear-to-r from-orange-500 to-red-500 text-white font-semibold shadow-lg hover:shadow-xl transition-transform duration-200 hover:-translate-y-0.5"
          >
            Enviar email
          </a>
          <a
            href="#home"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-slate-200 text-slate-700 font-semibold bg-slate-50 hover:bg-white shadow-sm transition"
          >
            Volver arriba
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
