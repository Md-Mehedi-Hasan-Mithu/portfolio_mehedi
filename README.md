# MD Mehedi Hasan — Portfolio

A production-ready React portfolio website.

---

## 🚀 Quick Start (Run Locally)

### Step 1 — Install Node.js
Download from: https://nodejs.org (choose LTS version)
After install, open terminal and check:
```
node --version   ✓ should show v18 or higher
npm --version    ✓ should show v9 or higher
```

### Step 2 — Install dependencies
```bash
cd mehedi-portfolio
npm install
```

### Step 3 — Start development server
```bash
npm start
```
Opens at http://localhost:3000 — changes save instantly (hot reload).

---

## ✏️ How to Customize

**All your content is in one file: `src/data.js`**

Edit it to update:
- Your name, bio, email, phone
- Social links (GitHub, LinkedIn, LeetCode)
- Projects (add live URL and GitHub links)
- Skills, awards, experience

**To add your photo:**
1. Put your photo in `src/assets/photo.jpg`
2. In `src/components/About.jsx`, replace the placeholder div with:
```jsx
import photo from '../assets/photo.jpg';
// then in JSX:
<img src={photo} alt="Mehedi Hasan" style={{width:'100%', maxWidth:300, aspectRatio:'4/5', objectFit:'cover', objectPosition:'top', borderRadius:4}} />
```

**To add your CV for download:**
Put your `resume.pdf` file in the `public/` folder.
It will automatically work with the "Download CV" button.

---

## 🌐 Deploy to Vercel (Recommended — FREE)

### Option A: Deploy via GitHub (easiest)

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "my portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

2. **Deploy on Vercel:**
   - Go to https://vercel.com
   - Sign up with GitHub
   - Click "New Project"
   - Select your portfolio repository
   - Click "Deploy" — done! 🎉

Your site will be live at: `https://YOUR_PROJECT.vercel.app`

You can also connect a custom domain for free on Vercel.

---

### Option B: Deploy via Vercel CLI

```bash
npm install -g vercel
npm run build
vercel --prod
```

---

## 🌐 Deploy to Netlify (Alternative — also FREE)

1. Build the project:
```bash
npm run build
```

2. Go to https://netlify.com → "Add new site" → "Deploy manually"
3. Drag and drop the `build/` folder
4. Done! Your site is live instantly.

---

## 📁 Project Structure

```
mehedi-portfolio/
├── public/
│   ├── index.html          ← HTML shell
│   └── resume.pdf          ← Put your CV here
├── src/
│   ├── data.js             ← ⭐ All your content (edit this!)
│   ├── index.js            ← App entry point
│   ├── index.css           ← Global styles & animations
│   ├── App.jsx             ← Root component
│   └── components/
│       ├── Cursor.jsx      ← Custom animated cursor
│       ├── Navbar.jsx      ← Navigation with mobile menu
│       ├── Hero.jsx        ← Hero section with typing effect
│       ├── About.jsx       ← About + Experience + Education
│       ├── Skills.jsx      ← Skills grid + Competitive programming
│       ├── Projects.jsx    ← Projects with modal popup
│       ├── Awards.jsx      ← Awards & achievements timeline
│       ├── Contact.jsx     ← Contact form + social links
│       └── Footer.jsx      ← Footer
└── package.json
```

---

## 🛠 Built With

- React 18
- React Router DOM 6
- Google Fonts (Syne, DM Mono, Lora)
- Pure CSS animations (no animation library needed)

---

## 💡 Tips

- Update `src/data.js` with your real GitHub and LinkedIn URLs
- Add your photo to `src/assets/` for the About section
- Place your CV PDF in `public/resume.pdf` for the download button
- After deploying, share your Vercel URL on LinkedIn and GitHub profile

---

Made with ❤️ for MD Mehedi Hasan