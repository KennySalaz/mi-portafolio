import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="bg-white rounded-3xl shadow-lg border border-slate-100 p-8 md:p-10 space-y-6 animate-fade"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-500 grid place-items-center text-xl">
          👤
        </div>
        <div>
          <p className="text-sm font-semibold text-orange-600">Sobre Mí</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Perfil Profesional</h2>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4 text-base leading-relaxed text-slate-600">
          <p className="text-lg text-slate-800 font-semibold">👋 Hola! Soy Kenny Salazar</p>
          <p>
            Soy un desarrollador con <span className="font-bold text-orange-600">5 años de experiencia</span> especializado en el Frontend. Creo sitios web modernos, aplicaciones y dashboards administrativos con <span className="font-semibold text-orange-600">Vue</span> y <span className="font-semibold text-orange-600">React</span>.
          </p>
          <p>
            Me apasiona la tecnología y las mejores prácticas. Me adapto rápido a nuevos entornos y disfruto colaborar para entregar soluciones de calidad.
          </p>
          <p>
            Como freelance, llevo proyectos de inicio a fin cuidando la lógica, la estética y la experiencia de usuario.
          </p>
        </div>

        <div className="grid gap-4">
          {[
            { title: 'Dashboards & Web Apps', desc: 'Interfaces limpias, intuitivas y eficientes, orientadas a negocio.' },
            { title: 'Pixel-perfect & Responsive', desc: 'Maquetación precisa, accesible y adaptable a cualquier dispositivo.' },
            { title: 'Escalabilidad', desc: 'Arquitecturas listas para crecer con Next.js, Vue y React Native.' },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-100 bg-slate-50 p-4 shadow-sm hover:-translate-y-1 transition-transform"
            >
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-slate-100">
        {[
          { label: 'Años', value: '5+', color: 'text-orange-600' },
          { label: 'Proyectos', value: '50+', color: 'text-red-500' },
          { label: 'Stack', value: 'Vue · React', color: 'text-blue-600' },
          { label: 'Trabajo', value: '100% Remoto', color: 'text-green-600' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
            <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
            <div className="text-xs uppercase tracking-wide text-slate-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
