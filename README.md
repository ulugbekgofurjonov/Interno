# Interno — Interior Design Studio

![Interno Logo](https://interno-ug.vercel.app/images/logo.png)

**Interno** is a modern interior design studio website built with Next.js and Tailwind CSS.

🔗 **Live Demo:** [interno-ug.vercel.app](https://interno-ug.vercel.app)

---

## Tech Stack

- [Next.js 14](https://nextjs.org/) — React framework
- [Tailwind CSS](https://tailwindcss.com/) — CSS utility framework
- [AOS](https://michaelosthege.github.io/aos/) — Animate On Scroll
- Google Fonts — DM Serif Display, Poppins, Jost

---

## Sections

| Section | Description |
|---|---|
| Hero | Main banner with background image and CTA button |
| Services | 3 types of interior design services |
| Challenge | About the company with key highlights |
| Projects | 4 featured project cards |
| Stats | 12 years experience, 5K projects, 1K active, 4K customers |
| Testimonials | Client reviews and feedback |
| Brands | Partner brand logos |
| Blogs | 6 recent blog posts |
| CTA | Contact call-to-action banner |
| Footer | Navigation links and contact info |

---

## Folder Structure

```
interno/
├── public/
│   └── images/              # All images and assets
├── src/
│   ├── app/
│   │   ├── layout.js        # Root layout + fonts
│   │   ├── page.js          # Main page
│   │   ├── globals.css
│   │   └── ClientLayout.js  # AOS wrapper
│   ├── components/
│   │   ├── layout/
│   │   │   └── Header.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Challenge.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── StateSection.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── Brands.jsx
│   │   │   ├── Blogs.jsx
│   │   │   └── CTA.jsx
│   │   └── ui/
│   │       ├── Button.jsx
│   │       ├── BlogsCard.jsx
│   │       ├── Card.jsx
│   │       ├── Container.jsx
│   │       ├── IconButton.jsx
│   │       └── SectionTitle.jsx
│   └── data/
│       ├── navLinks.js
│       ├── blogs.js
│       ├── projects.js
│       └── testimonials.js
```

---

## Author

**Ulugbek Gofurjonov** — [GitHub](https://github.com/ulugbekgofurjonov)
