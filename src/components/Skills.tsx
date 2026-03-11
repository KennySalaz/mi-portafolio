import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Core",
      skills: ["JavaScript (ES6+)", "HTML5", "CSS3"],
      icon: "⚡",
      color: "from-yellow-400 to-orange-500"
    },
    {
      category: "Frameworks Frontend",
      skills: ["React.js", "Vue.js", "Next.js", "Nuxt.js"],
      icon: "⚛️",
      color: "from-blue-400 to-cyan-500"
    },
    {
      category: "Desarrollo Móvil",
      skills: ["React Native", "Expo"],
      icon: "📱",
      color: "from-green-400 to-emerald-500"
    },
    {
      category: "UI & Estilos",
      skills: ["Diseño Responsivo", "Maquetación CSS Avanzada", "Tailwind"],
      icon: "🎨",
      color: "from-pink-400 to-purple-500"
    },
    {
      category: "Soft Skills",
      skills: ["Trabajo en Equipo", "Aprendizaje Continuo", "Comunicación Clara"],
      icon: "🤝",
      color: "from-indigo-400 to-blue-500"
    }
  ];

  return (
    <section
      id="skills"
      className="bg-white rounded-3xl shadow-lg border border-slate-100 p-8 md:p-10 space-y-8 animate-fade"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-500 grid place-items-center text-xl">
          🎯
        </div>
        <div>
          <p className="text-sm font-semibold text-orange-600">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Stack Tecnológico</h2>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:-translate-y-1 hover:shadow-md transition"
          >
            <div className={`absolute inset-0 bg-linear-to-br ${cat.color} opacity-5 rounded-2xl`}></div>
            <div className="relative space-y-3">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 bg-linear-to-br ${cat.color} rounded-xl flex items-center justify-center text-2xl text-white font-semibold shadow-md`}>
                  {cat.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{cat.category}</h3>
              </div>

              <ul className="space-y-2">
                {cat.skills.map((skill, i) => (
                  <li key={i} className="flex items-center text-slate-700 text-sm">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5 shadow-sm">
        <p className="text-sm text-slate-600 mb-3 font-semibold">También trabajo con:</p>
        <div className="flex flex-wrap gap-2">
          {['Git', 'TypeScript', 'REST APIs', 'Figma', 'VS Code', 'npm/yarn'].map((tool) => (
            <span
              key={tool}
              className="px-3 py-1 bg-white border border-slate-100 text-slate-700 rounded-full text-xs font-semibold shadow-sm"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
