export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-12">
      <h2 className="
        font-['DM_Serif_Display']
        font-normal
        text-4xl md:text-5xl
        leading-[62.4px]
        tracking-[0.22px]
        text-gray-900
        mb-4
      ">
        {title}
      </h2>
      {subtitle && (
        <p className="
          font-sans
          text-gray-600
          text-base md:text-lg
          max-w-2xl
          mx-auto
        ">
          {subtitle}
        </p>
      )}
    </div>
  )
}