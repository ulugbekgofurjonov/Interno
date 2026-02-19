import Image from 'next/image'  // BU QATOR YO'Q EDI!

export default function IconButton({ 
  variant = "primary", 
  direction = "right",
  onClick 
}) {
  
  const variants = {
    primary: "bg-[#c19a6b] text-white hover:bg-[#a67b52]",
    outline: "border-2 border-[#c19a6b] text-[#c19a6b] hover:bg-[#c19a6b] hover:text-white",
    light: "bg-gray-80 text-gray-700 hover:bg-gray-200"
  }

  return (
    <button 
      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${variants[variant]}`}
      onClick={onClick}
    >
      <Image 
        src="/images/right.png" 
        alt="arrow" 
        width={20} 
        height={20}
        className={direction === "left" ? "rotate-180" : ""}
      />
    </button>
  )
}