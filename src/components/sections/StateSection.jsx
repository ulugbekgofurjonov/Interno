const stats = [
  { value: "12", label: "Years Of Experience" },
  { value: "5K", label: "Success Project" },
  { value: "1K", label: "Active Project" },
  { value: "4K", label: "Happy Customers" },
];

export default function StatsSection() {
  return (
    <section className="bg-[#f5f0eb] py-12 px-6 md:py-16 md:px-8">
      <div className="grid grid-cols-2 md:flex md:flex-nowrap md:items-center md:justify-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center">
            <div className="text-center px-6 py-6 md:px-12 lg:px-16 md:py-0">
              <p className="text-5xl md:text-6xl text-[#c9956a] tracking-tight font-[family-name:var(--font-dm-serif)]">
                {stat.value}
              </p>
              <p className="text-sm md:text-base text-gray-400 mt-2 md:mt-3 tracking-widest font-[family-name:var(--font-jost)]">
                {stat.label}
              </p>
            </div>
            {index < stats.length - 1 && (
              <div className="hidden md:block w-px h-14 md:h-20 bg-[#d4b89a]" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}