# Hazi Ahammad Ali High School (হাজী আহাম্মদ আলী উচ্চ বিদ্যালয়)

> **Official Web Portal for Hazi Ahammad Ali High School**  
> *EIIN: 112513 • Birabo, Rupganj, Narayanganj • Established 2012*

A modern, high-performance, and fully responsive institutional web platform built with **React 19**, **Vite 8**, **React Router 7**, and **Vanilla CSS3**. The application features glassmorphism aesthetics, ambient background blur effects, dynamic floating knowledge badges with 3D transitions, a dedicated School History timeline, faculty dossiers, and a complete Dark / Light theme system.

---

## 🚀 Technologies Used & Their Roles

| Technology | Version / Source | Primary Role in Project |
| :--- | :--- | :--- |
| **React** | `^19.2.8` | Core UI library powering declarative component architecture, state management (`useState`, `useEffect`), reactive scroll-spy, and theme context. |
| **React DOM** | `^19.2.8` | Handles client-side DOM rendering, lifecycle mounting, and root hydration. |
| **Vite** | `^8.3.0` | Ultra-fast build tool and development server providing Hot Module Replacement (HMR) and optimized Rollup production bundling. |
| **React Router DOM** | `^7.18.4` | Client-side routing engine managing homepage section scrolling (`/#contact`, etc.) and dynamic faculty dossier routes (`/teacher/:id`). |
| **Vanilla CSS3** | Native | Complete custom design system with CSS custom properties (variables), frosted glassmorphism (`backdrop-filter`), GPU-accelerated 3D transforms (`rotateY`), keyframe animations, and mobile-first Flexbox/Grid responsive layouts. |
| **Google Fonts** | CDN | Premium typography using **Plus Jakarta Sans** (editorial headings and badges) and **Inter** (clean, readable body copy). |
| **Remix Icon** | `v4.9.0` (CDN) | Modern vector icon set used for academic badges, STEM symbols, navigation controls, social media links, and utility indicators. |
| **ESLint** | `^10.10.0` | Code quality and syntax validation utilizing `@eslint/js`, `eslint-plugin-react-hooks`, and `eslint-plugin-react-refresh`. |

---

## 📁 Project Structure & "Which File Does What"

```text
HAZI-AHAMMAD-ALI-HIGH-SCHOOL/
│
├── public/                                # Static public assets served directly
│   ├── school_logo.webp                   # High-res school emblem used for favicon and social sharing
│   └── makima.png                         # Fallback placeholder image
│
├── src/
│   ├── assets/                            # Bundled images and media assets
│   │   ├── school_logo.webp               # Primary institutional emblem
│   │   ├── school_assembly_1672x941.png   # Campus assembly photograph for hero carousel
│   │   ├── school_event_1672x941.png      # Annual cultural/academic event photograph
│   │   ├── 498b0c97-74ec-4325-...png      # Main academic building photograph
│   │   ├── dc8775ef-566f-4626-...png      # Campus grounds photograph
│   │   ├── headmaster.jpg                 # Headmaster's official portrait
│   │   ├── ferdous.jpg                    # Assistant Headmaster portrait
│   │   ├── anik.jpg                       # Senior Faculty portrait
│   │   ├── ifti.jpg                       # Senior Faculty portrait
│   │   ├── shofiqul.jpg                   # Senior Faculty portrait
│   │   └── sumaiya.jpg                    # Senior Faculty portrait
│   │
│   ├── components/                        # Reusable modular React components
│   │   ├── Header.jsx                     # Floating glass navigation bar, brand logo, scroll-spy, theme toggle, and mobile drawer
│   │   ├── Intro.jsx                      # Hero section with slideshow, ambient glow, and rotating 3D floating knowledge badges
│   │   ├── History.jsx                    # Institutional history section with timeline milestones, key metrics, and motto banner
│   │   ├── Timings.jsx                    # Daily school schedule cards, period breakdowns, and shift hours
│   │   ├── Headmaster.jsx                 # Headmaster's address, leadership message, credentials, and signature
│   │   ├── Teachers.jsx                   # Faculty showcase directory with category tabs (All, Science, etc.) and teacher cards
│   │   ├── TeacherDetail.jsx              # Dedicated profile page (/teacher/:id) displaying biography, subjects, qualifications, and colleagues
│   │   ├── Achievers.jsx                  # Hall of Fame section celebrating SSC GPA 5.0 board exam achievers
│   │   ├── Contact.jsx                    # Contact cards, administration phone numbers, email, visiting hours, Google Maps, and inquiry form
│   │   ├── Footer.jsx                     # Institutional footer with site directory, emergency hotlines, and copyright notice
│   │   ├── SectionBlurBackdrop.jsx        # Reusable component injecting ambient glowing blur orbs behind sections for glass depth
│   │   ├── SectionHeader.jsx              # Standardized section header with badge tag, primary title, and subtitle
│   │   └── Reveal.jsx                     # Intersection observer wrapper for smooth scroll-reveal fade-up effects
│   │
│   ├── context/                           # React Context & state management
│   │   ├── theme-context-def.js           # Isolated createContext(null) definition for Fast Refresh compliance
│   │   ├── ThemeContext.jsx               # ThemeProvider managing dark/light mode state, localStorage sync, and data-theme attribute
│   │   └── useTheme.js                    # Custom hook exposing { isDark, toggleTheme } with safety boundary checks
│   │
│   ├── data/                              # Static data sources and content models
│   │   ├── teachers.js                    # Detailed faculty data (IDs, names, subjects, qualifications, experience, biographies, social links)
│   │   ├── history.js                     # School origin story, milestone events (2012–Present), and institutional metrics
│   │   ├── timings.js                     # Timetable slots, morning assemblies, academic periods, and break intervals
│   │   └── achievers.js                   # Board exam honor roll with student names, GPA 5.0 achievements, passing years, and ranks
│   │
│   ├── styles/                            # Component-scoped CSS style sheets
│   │   ├── Header.css                     # Floating pill header, backdrop blur, desktop nav links, mobile slide-in drawer, and theme button
│   │   ├── Intro.css                      # Hero carousel zoom animations, floating badges, 3D icon flip, text reel, and glass sheen sweep
│   │   ├── History.css                    # Timeline vertical spine, frosted milestone cards, metric counter grid, and responsive styling
│   │   ├── Timings.css                    # Schedule glass cards, clock badges, period hover indicator lines, and responsive layouts
│   │   ├── Headmaster.css                 # Portrait frame styling, gold badge aura, leadership message typography, and credential pill
│   │   ├── Teachers.css                   # Faculty grid layout, filter pill tabs, teacher cards, subject tags, and social link buttons
│   │   ├── TeacherDetail.css              # Faculty dossier page layout, verified badge, biography card, and colleague recommendations
│   │   ├── Achievers.css                  # Achiever honor cards, distinction badges, GPA score tags, and award gallery
│   │   ├── Contact.css                    # Two-column contact layout, info cards, glass form inputs, and embedded Google Maps frame
│   │   ├── Footer.css                     # Multi-column footer layout, link directories, emergency banner, and bottom copyright strip
│   │   └── SectionHeader.css              # Standardized section titles, subtitle typography, and accent pill tags
│   │
│   ├── App.jsx                            # Root application component defining React Router routes and scroll restoration
│   ├── App.css                            # Base layout container styling and route view wrapper
│   ├── index.css                          # Global design system: tokens, theme palettes, glassmorphism utilities, buttons, and typography
│   └── main.jsx                           # Application entry point: initializes React root with BrowserRouter and ThemeProvider
│
├── index.html                             # HTML5 entry page with SEO metadata, OpenGraph tags, Google Fonts, and Remix Icon CDN
├── package.json                           # NPM dependencies, metadata, and scripts (dev, build, lint, preview)
├── vite.config.js                         # Vite build system configuration with React plugin
├── eslint.config.js                       # Flat ESLint configuration with React 19 hooks and Fast Refresh rules
└── README.md                              # Comprehensive project documentation and file guide
```

---

## 🔍 Detailed Component Breakdown

### 1. Navigation & Theming
- **`Header.jsx` & `Header.css`**: Renders a floating frosted pill navigation bar fixed at the top of the viewport. Features scroll-spy detection to highlight active sections, an institutional emblem, a one-click Sun/Moon theme toggle, a high-contrast **"Enroll / Inquire ↗"** CTA button, and a full-screen sliding mobile navigation drawer with touch-friendly links.
- **`ThemeContext.jsx` & `useTheme.js`**: Provides seamless Dark Mode and Light Mode switching with persistence in `localStorage` and automatic fallback to system preferences (`prefers-color-scheme`). Toggling instantly updates the `data-theme` attribute on `document.documentElement`.

### 2. Hero & Dynamic Floating Badges
- **`Intro.jsx` & `Intro.css`**: Displays a cinematic welcoming hero banner with an automated 4-photo campus background slideshow. Includes:
  - 3 strategically positioned floating knowledge badges (e.g., *Academic Books*, *Science & STEM*, *Digital Tech*, *Knowledge & Ethics*, *Future Innovation*, *Campus Library*, *Creative Minds*).
  - Rotates every **30 seconds** with an organic staggered cadence across slots.
  - Features **3D perspective icon coin-flips** (`rotateY`), vertical **text roll & blur-dissolving** tickers, and a luminous **glass sheen sweep** across the capsule.

### 3. School History
- **`History.jsx` & `History.css`**: Presents the institutional narrative of Hazi Ahammad Ali High School established in 2012. Displays an overview metrics card (EIIN: 112513, 1,500+ Scholars, 100% SSC Dedication), a chronological milestone timeline (Genesis, First SSC Landmark, Science Labs, Digital Leap, Present Distinction), and an institutional philosophy quote card.

### 4. Daily Schedule & Timings
- **`Timings.jsx` & `Timings.css`**: Visualizes the school day with glassmorphism timetable cards. Breaks down morning assemblies, academic periods, tiffin breaks, and dismissal times with distinct period tags and clock badges.

### 5. Leadership & Faculty Directory
- **`Headmaster.jsx` & `Headmaster.css`**: Highlights the Headmaster's welcome address, educational philosophy, academic vision for Rupganj, verified credentials, and official signature.
- **`Teachers.jsx` & `Teachers.css`**: Comprehensive faculty roster with interactive department filter tabs (*All*, *Science & Math*, *Humanities*, *Commerce*, *General*). Each card displays the teacher's photo, designation, experience badge, key subjects, and a link to their personal dossier.
- **`TeacherDetail.jsx` & `TeacherDetail.css`**: Dynamic route (`/teacher/:id`) rendering a full-page dossier for each educator. Displays academic qualifications, full biography, verified status, contact details, social links, and quick navigation to colleague profiles.

### 6. Academic Achievers & Contacts
- **`Achievers.jsx` & `Achievers.css`**: Showcases top SSC graduates with GPA 5.0 distinction badges, passing years, and merit rankings.
- **`Contact.jsx` & `Contact.css`**: Offers a complete visitor and admissions inquiry center with official hotline numbers, physical address in Birabo, Rupganj, visiting hours, an interactive Google Maps embed, and a contact form.
- **`Footer.jsx` & `Footer.css`**: Closes the page with institutional branding, an emergency hotline pill, quick navigational anchors, and copyright credentials.

### 7. Global Design System & Polish
- **`index.css`**: Defines CSS tokens for both Light and Dark modes (`--primary`, `--primary-light`, `--accent`, `--bg-main`, `--bg-surface`, `--glass-bg`, `--glass-border`, etc.). Provides unified button styles (`.btn-primary`, `.btn-secondary`, `.btn-accent`), glassmorphic containers, and glowing ambient mesh blur utilities.
- **`SectionBlurBackdrop.jsx`**: Generates multi-colored glowing radial orbs (`blur(80px)`) behind each section to produce depth, richness, and visual polish without impacting page performance.

---

## 🛠️ Getting Started Locally

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/sadmanmahmudtaofiq/HAZI-AHAMMAD-ALI-HIGH-SCHOOL.git
   cd HAZI-AHAMMAD-ALI-HIGH-SCHOOL
   ```

2. Install project dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

---

## 📦 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server with Hot Module Replacement (HMR). |
| `npm run build` | Compiles and optimizes the application for production inside the `dist/` directory. |
| `npm run lint` | Executes ESLint to check for code quality, React 19 hook safety, and syntax adherence. |
| `npm run preview` | Runs a local web server to preview the generated production build. |

---

## 🌐 SEO & Accessibility Features
- **Semantic HTML5 Structure**: Proper hierarchy using `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>`.
- **Social Graph Optimization**: Includes OpenGraph and Twitter card meta tags with school branding.
- **High-Contrast Readability**: WCAG-compliant color contrast across both Light and Dark modes.
- **Keyboard Navigation & ARIA**: Interactive elements (modals, drawer, theme toggles, carousel buttons) include descriptive `aria-label` attributes and focus outlines.
- **Responsive Layout**: Fluid typography using `clamp()` and responsive CSS Grid/Flexbox for seamless viewing on mobile phones, tablets, laptops, and ultra-wide screens.

---

## 📜 License & Accreditation
Developed for **Hazi Ahammad Ali High School**, Birabo, Rupganj, Narayanganj.  
All campus photographs, teacher portraits, and institutional emblems belong to Hazi Ahammad Ali High School. All rights reserved.
