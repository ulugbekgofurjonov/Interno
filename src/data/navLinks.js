export const navLinks = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "About Us", url: "/about" },
  { id: 3, title: "Services", url: "/services" },
  { id: 4, title: "Pages", url: "/pages" },
  { id: 5, title: "Contact Us", url: "/contact" }
]
export const footLinks = [
  {
    id: 1,
    title: "Pages",
    links: [
      {id: 1, name: "Style Guide" },
      {id: 2, name: "Protected" },
      {id: 3, name: "Licenses" },
      {id: 4, name: "Changelog" }
    ]
  },
  {
    id: 2,
    title: "Explore",
    links: [
      { id: 1, name: "About Us" },
      {id: 2, name: "Recent Blog" },
      {id: 3, name: "Pricing Plan" },
      {id: 4, name: "Our Projects" },
      {id: 5, name: "Contact Us" }
    ]
  },
  {
    id: 3,
    title: "Contact",
    links: [
      { id: 1,
        name: "53, East Birchwood Ave. Brooklyn, New York 11201, USA.", 
        url: "#", 
        isAddress: true 
      },
      { id: 2,
        name: "contact@interno.com", 
        url: "mailto:contact@interno.com" 
      },
      { id: 3,
        name: "(123) 456 - 7890", 
        url: "tel:1234567890" 
      }
    ]
  }
]