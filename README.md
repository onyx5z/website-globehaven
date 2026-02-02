# GlobeHaven Consulting – Next.js Landing Page


URL: https://vercel.com/onyx5zs-projects/globehaven
Next.js alapú bemutatkozó oldal GlobeHaven Consulting számára.

## Struktúra

- `app/page.tsx` – az egyoldalas landing tartalma (hero, szolgáltatások, statok, kontakt).
- `app/layout.tsx` – alap HTML váz + meta.
- `app/globals.css` – globális stílusok (a korábbi `mock.html` design Next-re átemelve).
- `mock.html` – az eredeti statikus HTML sablon (referenciának megtartva).

## Fejlesztés lokálisan

1. Telepítés (egyszer kell):

```bash
npm install
```

2. Fejlesztői szerver indítása:

```bash
npm run dev
```

3. Böngészőben nyissa meg: `http://localhost:3000`

## Build és futtatás

```bash
npm run build
npm start
```

## Deploy Vercelre (ajánlott)

1. Pusholja a projektet egy Git repo-ba (GitHub, GitLab, Bitbucket).
2. Lépjen be Vercelbe, és válassza az adott repót új projektként.
3. Framework: **Next.js** (automatikusan felismeri).
4. Build parancs: `npm run build`
5. Output: alapértelmezett (`.next`), nem kell módosítani.

A deploy után a Next.js app lesz elérhető az URL-en; a `mock.html` csak referencia, nem kerül kiszolgálásra.
