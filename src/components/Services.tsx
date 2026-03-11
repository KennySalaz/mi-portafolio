import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Web & Dashboards",
      description: "Interfaces limpias, intuitivas y conectadas a negocio. KPI claros y UX cuidada.",
      icon: "💻",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Maquetación Pixel-perfect",
      description: "Diseños convertidos a código responsivo, accesible y consistente con design systems.",
      icon: "🎨",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Apps Web + Móvil",
      description: "Next.js, Vue y React Native para productos escalables en web y mobile (iOS/Android).",
      icon: "📱",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section
      id="services"
      className="bg-white rounded-3xl shadow-lg border border-slate-100 p-8 md:p-10 space-y-8 animate-fade"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-500 grid place-items-center text-xl">
          🛠️
        </div>
        <div>
          <p className="text-sm font-semibold text-orange-600">Servicios</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Áreas de Especialización</h2>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            className="relative overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition"
          >
            <div className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-5`}></div>
            <div className="relative space-y-3">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-linear-to-br ${service.color} text-white font-semibold shadow-lg`}>
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
