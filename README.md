# 💙 Blue Aesthetic Calculator

A fully functional calculator built with React, wrapped in a dreamy blue aesthetic — featuring a glowing butterfly video background, softly drifting decorative illustrations, and translucent glass-style buttons.

**🔗 Live site:** [blueaestheticcalculator.netlify.app](https://blueaestheticcalculator.netlify.app/)

## ✨ Features

- Fully working calculator (add, subtract, multiply, divide, decimals, clear, delete)
- Looping glowing butterfly video background
- Scattered floating illustrations (bow, flowers, dolphin, evil eye, blueberry cat) with a gentle drift animation
- Glassy blue button styling with soft glow effects on hover
- Responsive grid layout

## 🛠️ Built With

- [React](https://react.dev/) (Create React App)
- CSS animations (`@keyframes`) for floating elements
- HTML5 `<video>` for the background loop
- Deployed on [Netlify](https://www.netlify.com/)

## 📂 Project Structure

```
public/
  ├── butterfly-bg.mp4      # background video
  ├── ssd.png, sdf.jpg, download.png,
  │   cu.jpg, cutt.jpg, ut.jpg   # floating decorative images
  └── manifest.json

src/
  ├── App.js                # main calculator logic + layout
  ├── DigitButton.js
  ├── OperationButton.js
  ├── FloatingImages.js     # renders scattered floating images
  └── styles.css            # all styling + animations
```

## 🚀 Running Locally

```bash
npm install
npm start
```

Runs the app at [http://localhost:3000](http://localhost:3000).

## 📦 Deployment

This project is deployed via **Netlify**, connected directly to this GitHub repo.

- **Build command:** `npm run build`
- **Publish directory:** `build`
- **Environment variables:**
  - `DISABLE_ESLINT_PLUGIN=true`
  - `CI=false`

Any push to `main` triggers an automatic redeploy.

## 🎨 Customization

Want to change the theme?
- Swap button colors in `src/styles.css` under `.calculator-grid > button`
- Replace `public/butterfly-bg.mp4` with any looping video for a different vibe
- Update the `images` array in `src/FloatingImages.js` to change which pictures float and where

---

Made with 💙 by [Moon](https://github.com/tobiko-dev)
