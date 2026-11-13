# Portfolio Site

## Project Structure
- React + Vite portfolio application
- Components in `src/components/` with CSS modules
- No TypeScript, no test suite configured
- Static site ready for Vercel/Netlify/GitHub Pages deployment

## Commands
- `npm run dev` - Development server (Vite)
- `npm run build` - Build for production to `dist/`
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Important Notes
- Theme system uses localStorage persistence (dark default)
- Contact form uses FormSubmit service (no backend required)
- FontAwesome 6.4.0 loaded via CDN in index.html
- Components follow CSS module pattern (Component.jsx + Component.css)
- No environment variables required - fully client-side
- Project screenshots live in `public/projects/`

## Deployment
- Builds to `dist/` directory
- Vercel configuration in `vercel.json`
- Static site - no server required
