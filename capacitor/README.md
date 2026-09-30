# Anticoag Trials — Capacitor iOS (App Store Phase B)

Native iOS shell for **Anticoagulation Trials Timeline** (product / long name).  
Home-screen name (`appName` / `CFBundleDisplayName`): **Anticoag Trials**.

| Lock | Value |
|------|--------|
| **D1 Store load** | **Bundled** static `www/` (offline). Remote Pages URL = **debug toggle only** (not default; document before enabling). |
| **D2 appId** | `com.rockyman10.anticoagtimeline` |
| **D3 appName** | `Anticoag Trials` |
| **D4 category** | Education — App Store Connect later (Phase C; document only here) |
| **webDir** | `www` served at `/` (no `/anticoag-timeline/` prefix inside the bundle) |

Pages site keeps the `/anticoag-timeline/` path prefix. This folder lives next to the teaching site so Pages HTML/JS stay free of `node_modules`.

Capacitor **7.x** (Node ≥ 18; verified on Node 20). Cap 8 needs Node ≥ 22 — stay on 7 until the Mac toolchain is ready.

## Layout

```
capacitor/
  capacitor.config.json   # appId / appName / webDir
  package.json            # sync:www, cap:sync, …
  scripts/sync-www.sh     # rebuild www from site root
  vendor-fonts/           # IBM Plex Sans + Source Serif 4 woff2 (latin)
  www/                    # Store bundle snapshot (generated)
  ios/                    # Xcode project (scaffold OK on Linux; build on Mac)
  README.md               # this file
```

## Sync www (rebuild Store assets)

From this directory:

```bash
npm run sync:www
# or: npm run cap:sync   # sync:www + npx cap sync ios
```

`sync-www.sh`:

1. Copies site root → `www/` **excluding** `drafts/`, `docs/`, `capacitor/`, `node_modules/`, `.git/`, `*.zip`
2. Rewrites `manifest.webmanifest` for native root (`start_url: "./"`, `scope: "/"`, relative icon `src`)
3. Vendors fonts into `www/fonts/` + `www/fonts.css`; strips Google Fonts links from **www** `index.html` only (site-root Pages HTML unchanged)

**Do not** point the Store build at live GitHub Pages by default. Bundled `www` is the Store load path (D1).

## Mac: open Xcode & archive

On a Mac with Xcode + CocoaPods:

```bash
cd capacitor
npm ci                    # or npm install
npm run sync:www
npx cap sync ios          # copies www → ios/App/App/public; pod install
npx cap open ios          # opens App.xcworkspace
```

Then in Xcode:

1. Select the **App** target → Signing & Capabilities → your Team / provisioning
2. Set Marketing Version / Build as needed
3. Product → Archive → Distribute App → App Store Connect

CocoaPods / `xcodebuild` are **not** available on the Linux box. The `ios/` tree was scaffolded with `npx cap add ios` on Linux; first Mac sync runs `pod install`.

## Phase C (Deez Mac / Apple — no secrets on box)

Pointer only — do not store keys, `.p12`, or AuthKey `.p8` in this repo:

- [ ] Apple Developer Program membership
- [ ] App Store Connect app record — **Education** category (D4)
- [ ] Bundle ID `com.rockyman10.anticoagtimeline` registered
- [ ] Signing certificates + provisioning profiles (local Keychain / ASC)
- [ ] Privacy nutrition / export compliance answers (teaching content; no tracking plugins in Phase B)
- [ ] Screenshots / preview assets from `docs/ux-shots/` (outside www)
- [ ] Archive + upload; TestFlight then Review
- [ ] Optional later: documented **debug** remote URL toggle (never default Store)

## Plugins

Phase B = **core Capacitor only**. No Push, Auth, PDF, filesystem extras. Do not revive Story/Quiz modules.

## Ops / Pages hygiene

- Keep `capacitor/` in git (sources + `www` snapshot + `ios/` scaffold).
- `.gitignore` drops `node_modules/`, Pods, DerivedData, xcuserdata, synced `public/`.
- **GitHub Pages must not publish `capacitor/`** — deploy only teaching files (`index.html`, `js/`, `icons/`, `manifest.webmanifest`, etc.). Ops: rsync known site paths or exclude `capacitor/` from gh-pages.

## Remote Pages = debug only

If a future debug build loads `https://…/anticoag-timeline/`, document it in Connect notes / internal README and keep **production Store** on bundled `www`. Do not flip `server.url` in committed `capacitor.config.json` for Store.
