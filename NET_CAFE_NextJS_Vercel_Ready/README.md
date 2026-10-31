# NET CAFE — Next.js menu (Vercel-ready)

The ZIP contains the **actual Next.js project**, not a standalone HTML page.
It includes the latest language selector, NET CAFE welcome text, three languages,
food popups, category navigation, and two-across featured food cards on mobile.

## Important: upload the contents, not the ZIP itself

1. **Extract** `NET_CAFE_NextJS_Vercel_Ready.zip`.
2. Upload the extracted **files and folders** to a GitHub repository.
   `package.json`, `app/`, and `public/` must be together at the repository root.
3. In Vercel: **Add New > Project > Import Git Repository**.
4. Framework Preset: **Next.js**. Root Directory: **`./` (repository root)**.
5. **Do not override** the build, install or output settings. Vercel detects Next.js.
6. Click Deploy. Open the assigned website URL after the deployment succeeds.

### If you already have a Vercel project

Push these extracted files to your existing connected GitHub repository. Under
Project > Settings > Build and Deployment, ensure **Root Directory** points at
the folder containing `package.json` (usually `./`). Ensure Framework is Next.js
then redeploy from the Deployments tab. Remove old custom output overrides,
redirects, and rewrites that may have been added to a different project.

If you upload a **folder named NET_CAFE_NextJS_Vercel_Ready** as one nested
folder to your repository, you must instead set Vercel Root Directory to that
folder's name. The recommended approach is to keep project files at root.

### Alternative: deploy with the Vercel CLI

```bash
npm install
npm run build
npm install -g vercel
vercel --prod
```

Run from the extracted project folder containing `package.json`.

## Food pictures

Place your own photos in `public/images/`. Example:
`public/images/chicken-biryani.jpg` is available from `/images/chicken-biryani.jpg`.
The existing restaurant logo is included as `public/images/net-logo.jpg`.
See `public/images/ADD_YOUR_FOOD_PHOTOS.txt` for the full list.

Images *not supplied with the original project* display a friendly placeholder;
that is not a Vercel deployment problem. Filenames are case-sensitive on Vercel.

## Develop locally

```bash
npm install
npm run dev
```
Visit http://localhost:3000.

## File map

- `app/page.jsx`: Next.js home page with menu markup and browser script.
- `app/layout.jsx`: site metadata and viewport.
- `app/globals.css`: site styles and animations.
- `app/menuMarkup.js`: menu structure.
- `public/menu.js`: menu data, language switching, food pictures, interactions.
- `public/images/`: customer food photographs.

## Validation

Menu interactions (language selection and food popup) were checked in a browser
without JavaScript errors. JavaScript syntax and ZIP structure were checked.
A complete `next build` was not possible in this environment because the npm
registry could not be reached; run it locally or let Vercel install dependencies.
