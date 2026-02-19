export default function Button({ children, variant = "primary", size = "medium", href }) {
  
  const variants = {
    primary: "bg-[#c19a6b] text-white hover:bg-[#a67b52]",
    secondary: "border-2 border-[#c19a6b] text-[#c19a6b] hover:bg-[#c19a6b] hover:text-white",
    gradient: "bg-gradient-to-r from-[#c19a6b] to-[#a67b52] text-white",
    link: "text-[#c19a6b] hover:text-[#a67b52] underline underline-offset-2 inline-flex items-center gap-2" // YANGI
  }

  const sizes = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg",
    link: "p-0" // link uchun padding yo'q
  }

  if (variant === "link") {
    return (
      <a href={href} className={`inline-flex items-center gap-2 font-medium transition-all ${variants.link} ${className || ""}`}>
        {children} →
      </a>
    )
  }

  return (
    <button className={`rounded-lg font-medium transition-all ${variants[variant]} ${sizes[size]} ${className || ""}`}>
      {children}
    </button>
  )
}