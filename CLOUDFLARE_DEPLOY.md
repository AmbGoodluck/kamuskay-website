# Cloudflare Pages Deployment Instructions

1. **Build your Next.js project:**
   ```sh
   npm run build
   ```

2. **Set the output directory:**
   - For Next.js, Cloudflare expects the output in the `.next` directory.

3. **Configure Cloudflare Pages:**
   - Set the build command to `npm run build`.
   - Set the output directory to `.next`.

4. **Add a custom 404 page (optional):**
   - Create a `404.html` in the `public` folder for custom error handling.

5. **Configure redirects (optional):**
   - Use `_redirects` file in the `public` folder for custom routing.

6. **Environment variables:**
   - Add any required environment variables in the Cloudflare Pages dashboard.

7. **Deploy:**
   - Push your code to your connected Git repository. Cloudflare Pages will build and deploy automatically.

---

For advanced features (API routes, SSR), consider using [Next.js on Cloudflare Pages Functions](https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/).
