# Next.js + Tailwind + GSAP + Builder.io Starter

This is a modern web application starter template that combines:

- [Next.js](https://nextjs.org/) - React framework for production
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [GSAP](https://greensock.com/gsap/) - Professional-grade animation library
- [Builder.io](https://builder.io/) - Visual CMS for your team

## Getting Started

1. Clone this repository
2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your Builder.io API key:

```bash
NEXT_PUBLIC_BUILDER_API_KEY=your_api_key_here
```

4. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

### 🎨 Styling with Tailwind CSS

- Utility-first CSS framework
- Fully customizable design system
- PostCSS configuration included

### ✨ Animations with GSAP

- Pre-configured GSAP setup with ScrollTrigger
- Utility functions for common animations:
  - `fadeIn`: Fade in elements
  - `slideIn`: Slide in elements from any direction
  - `scrollAnimation`: Create scroll-triggered animations

### 📝 Content Management with Builder.io

- Visual content editing
- Component-based architecture
- Preview mode support
- Easy integration with existing components

### 🚀 Deployment

This template is optimized for deployment on Vercel. For the best experience:

1. Push your code to GitHub
2. Import your repository to Vercel
3. Add your environment variables
4. Deploy!

## Project Structure

```
src/
├── app/              # Next.js app directory
├── components/       # React components
└── lib/             # Utility functions
    ├── builder.ts   # Builder.io configuration
    └── gsap.ts      # GSAP animations
```

## Builder.io Setup

1. Create an account at [Builder.io](https://builder.io)
2. Create a new space
3. Get your API key from the settings page
4. Add your API key to `.env.local`
5. Create a new page model in Builder.io
6. Start creating content!

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
