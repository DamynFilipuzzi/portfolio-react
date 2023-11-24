# Notes on Pushing Changes to AWS S3 With Cloudfront
1. `npm run build` - Builds html, js, and css and stores in ./dist dir
2. `npm run sync` - Pushes all changes build to s3 bucket.
3. `npm run invalidate` - Forces Cloudfront to update the cache

## **Todo:**
- [] Replace npm commands with a bash script to simplify the server upload process.
- [] 

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
