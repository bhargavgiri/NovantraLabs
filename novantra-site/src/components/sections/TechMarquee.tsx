'use client';

const techs = [
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Flutter', icon: '💙' },
  { name: 'Python', icon: '🐍' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Firebase', icon: '🔥' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Swift', icon: '🍎' },
  { name: 'Kotlin', icon: '🎯' },
  { name: 'TensorFlow', icon: '🧠' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Kubernetes', icon: '⎈' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'GraphQL', icon: '◈' },
];

export default function TechMarquee() {
  const items = [...techs, ...techs]; // duplicate for seamless loop

  return (
    <div className="relative w-full overflow-hidden py-6 border-y border-white/6 bg-[#080e21]/50">
      {/* Left fade */}
      <div className="absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-[#0a1628] to-transparent pointer-events-none" />
      {/* Right fade */}
      <div className="absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-[#0a1628] to-transparent pointer-events-none" />

      <div className="flex gap-5 marquee-track">
        {items.map((tech, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-white/8 bg-white/3 flex-shrink-0 hover:border-blue-500/30 transition-colors cursor-default"
          >
            <span className="text-lg">{tech.icon}</span>
            <span className="text-sm font-medium text-gray-300 whitespace-nowrap">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
