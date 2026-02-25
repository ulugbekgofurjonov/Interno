import React from 'react'

export default function Button({ 
  children, 
  variant = "primary", 
  size = "medium", 
  className = "",  // ✅ className prop qo'shildi
  ...props 
}) {
  
  const variants = {
    primary: "bg-[#c19a6b] text-white hover:bg-[#a67b52]",
    outline: "border-2 border-[#c19a6b] text-[#c19a6b] hover:bg-[#c19a6b] hover:text-white",
    gradient: "bg-gradient-to-r from-[#c19a6b] to-[#a67b52] text-white"
  }

  const sizes = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg"
  }

  return (
    <button 
      className={`rounded-lg font-medium transition-all ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}