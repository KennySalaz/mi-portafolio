import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-white rounded-3xl shadow-lg border border-slate-100 p-8 md:p-10 space-y-6 animate-fade"
    >
      <div className="flex flex-wrap items-center gap-3">
        <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold">
          Frontend Engineer
        </span>
        <span className="text-sm text-slate-500">Vue · React · Next.js · React Native</span>
      </div>

      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
          Hola, soy Kenny Salazar
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
          Especialista en la creación de interfaces modernas, aplicaciones web y móviles, y dashboards
          administrativos de alto nivel. Combino código limpio, diseño y foco en negocio para entregar
          productos escalables y bellos.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {["UI/UX", "Dashboards", "Performance", "Accesibilidad", "Design Systems"].map((chip) => (
          <span
            key={chip}
            className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold"
          >
            {chip}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-linear-to-r from-orange-500 to-red-500 text-white font-semibold shadow-lg hover:shadow-xl transition-transform duration-200 hover:-translate-y-0.5"
        >
          <span>Hablemos</span>
          <span aria-hidden>→</span>
        </a>
        <a
          href="#services"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-slate-200 text-slate-700 font-semibold bg-slate-50 hover:bg-white shadow-sm transition"
        >
          Mis servicios
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-4 pt-2">
        {[
          { label: 'Proyectos entregados', value: '50+', color: 'text-orange-500' },
          { label: 'Años de experiencia', value: '5+', color: 'text-red-500' },
          { label: 'Disponibilidad', value: 'Remoto', color: 'text-green-500' },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-slate-50 border border-slate-100 rounded-2xl p-4 shadow-sm flex flex-col gap-1"
          >
            <span className={`text-2xl font-bold ${item.color}`}>{item.value}</span>
            <span className="text-sm text-slate-500">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
