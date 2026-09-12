/* =====================================================
   ROOT / VARIABLES
===================================================== */

:root {
    --black: #020403;
    --dark: #050807;
    --panel: #08100c;
    --panel-2: #0b1510;

    --green: #00ff66;
    --green-soft: #00cc55;
    --cyan: #00eaff;
    --yellow: #ffe600;
    --red: #ff3158;

    --white: #e8fff0;
    --gray: #7f9b89;
    --muted: #61796a;

    --border: rgba(0, 255, 102, 0.18);

    --shadow:
        0 0 30px rgba(0, 255, 102, 0.06);

    --max-width: 1350px;
}


/* =====================================================
   RESET
===================================================== */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


html {
    scroll-behavior: smooth;
    scroll-padding-top: 90px;
}


body {
    background: var(--black);
    color: var(--white);

    font-family:
        "Courier New",
        Courier,
        monospace;

    line-height: 1.7;

    overflow-x: hidden;
}


img {
    max-width: 100%;
    display: block;
}


button,
a {
    font-family: inherit;
}


a {
    color: inherit;
}


::selection {
    background: var(--green);
    color: #000;
}


/* =====================================================
   UTILITY COLORS
===================================================== */

.green {
    color: var(--green);
}


.cyan {
    color: var(--cyan);
}


.white {
    color: #fff;
}


/* =====================================================
   BACKGROUND
===================================================== */

.matrix-bg {
    position: fixed;
    inset: 0;

    z-index: -3;

    opacity: 0.04;

    background-image:
        linear-gradient(
            rgba(0, 255, 102, 0.12) 1px,
            transparent 1px
        ),
        linear-gradient(
            90deg,
            rgba(0, 255, 102, 0.12) 1px,
            transparent 1px
        );

    background-size: 40px 40px;

    pointer-events: none;
}


.scanlines {
    position: fixed;
    inset: 0;

    z-index: 999;

    pointer-events: none;

    background:
        repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.04),
            rgba(0, 0, 0, 0.04) 1px,
            transparent 1px,
            transparent 3px
        );
}


/* =====================================================
   TERMINAL TOP BAR
===================================================== */

.terminal-bar {
    height: 34px;

    display: flex;
    align-items: center;

    gap: 15px;

    padding: 0 20px;

    background: #0a0d0b;

    border-bottom:
        1px solid var(--border);

    font-size: 12px;

    color: var(--gray);
}


.terminal-dots {
    display: flex;
    gap: 7px;
}


.dot {
    width: 9px;
    height: 9px;

    border-radius: 50%;
}


.dot.red {
    background: var(--red);
}


.dot.yellow {
    background: var(--yellow);
}


.dot.green {
    background: var(--green);
}


.terminal-title {
    color: #688070;
}


/* =====================================================
   NAVIGATION
===================================================== */

.navbar {
    position: sticky;
    top: 0;

    z-index: 100;

    min-height: 70px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 30px;

    padding: 0 7%;

    background:
        rgba(2, 4, 3, 0.94);

    backdrop-filter: blur(15px);

    border-bottom:
        1px solid var(--border);
}


.nav-logo {
    display: flex;
    align-items: center;

    gap: 10px;

    color: var(--green);

    font-weight: bold;

    letter-spacing: 2px;

    text-decoration: none;

    white-space: nowrap;
}


.terminal-symbol {
    color: var(--cyan);
}


nav {
    display: flex;

    flex-wrap: wrap;

    justify-content: flex-end;

    gap: 18px;
}


nav a {
    color: #809b8a;

    font-size: 11px;

    text-decoration: none;

    transition:
        color 0.2s ease,
        text-shadow 0.2s ease;
}


nav a:hover,
nav a:focus-visible {
    color: var(--green);

    text-shadow:
        0 0 10px var(--green);

    outline: none;
}


/* =====================================================
   HERO
===================================================== */

.hero {
    min-height: calc(100vh - 104px);
    display: flex;
    align-items: center;
    padding:100px 7%;
}

.hero-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
}

.terminal-command {
    color: #aac5b3;
    margin-bottom: 25px;
    font-size: 14px;
}

.typing::after {
    content: "_";
    color: var(--green);
    animation:cursor-blink 1s infinite;
}

@keyframes cursor-blink {

    0%,45% {
        opacity: 1;
    }

    46%, 100% {
        opacity: 0;
    }
}

.hero h1 {
    margin-bottom: 10px;
    font-size: clamp(48px, 9vw, 110px);
    line-height: 1;
    letter-spacing: -4px;
}

.hero h2 {
    margin-bottom: 15px;
    font-size:clamp(18px, 3vw, 30px);
    line-height: 1.3;
}

.hero-description {
    width: 100%;
    max-width: 1300px;
    margin-bottom: 30px;
    color: #8fa99a;
    font-size: 16px;
    line-height: 1.9;
}

.hero-description strong {
    color: var(--cyan);
    font-weight: 600;
}

.command-output {
    margin: 30px 0;
    padding-left: 20px;
    border-left: 2px solid var(--green);
    color: #9cb8a6;
}
.command-output div {
    margin: 5px 0;
}

/* =====================================================
   GLITCH
===================================================== */

.glitch {
    position: relative;
    display: inline-block;
    color: var(--green);
    text-shadow: 0 0 8px rgba(0, 255, 102, 0.5);
}


.glitch::before,
.glitch::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    pointer-events: none;
}


.glitch::before {
    color: var(--cyan);
    transform: translate(2px, 0);
    clip-path:
        polygon(
            0 0,
            100% 0,
            100% 35%,
            0 35%
        );
    opacity: 0.6;
}


.glitch::after {
    color: #ff0055;
    transform: translate(-2px, 0);
    clip-path:
        polygon(
            0 65%,
            100% 65%,
            100% 100%,
            0 100%
        );
    opacity: 0.5;
}


/* =====================================================
   BUTTONS  display: flex;
    flex-wrap: wrap;
    gap: 15px;
===================================================== */
.hero-buttons{
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
}

.contact-buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 15px;
    width: 100%;
    margin: 30px auto 0;
}


.terminal-button {
    display: inline-block;
    padding: 13px 22px;
    color: var(--green);
    background: rgba(0, 255, 102, 0.04);
    border: 1px solid var(--green);
    font-size: 13px;
    text-decoration: none;
    transition:
        color 0.25s ease,
        background 0.25s ease,
        box-shadow 0.25s ease,
        transform 0.25s ease;
}

.terminal-button:hover,
.terminal-button:focus-visible {
    color: #000;

    background: var(--green);

    box-shadow:
        0 0 25px rgba(0, 255, 102, 0.25);

    transform: translateY(-2px);

    outline: none;
}


.terminal-button.secondary {
    color: var(--cyan);

    border-color:
        rgba(0, 234, 255, 0.35);
}


.terminal-button.secondary:hover,
.terminal-button.secondary:focus-visible {
    color: #000;

    background: var(--cyan);

    box-shadow:
        0 0 25px rgba(0, 234, 255, 0.2);
}


/* =====================================================
   SECTIONS
===================================================== */

.section {
    padding:
        110px 7%;
}


.dark-section {
    background:
        rgba(3, 9, 6, 0.75);

    border-top:
        1px solid rgba(0, 255, 102, 0.08);

    border-bottom:
        1px solid rgba(0, 255, 102, 0.08);
}


.section-header {
    max-width: var(--max-width);

    display: flex;

    align-items: center;

    gap: 15px;

    margin:
        0 auto 45px;
}


.section-number {
    color: var(--green);

    font-weight: bold;
}


.section-command {
    color: #71917c;

    font-size: 14px;
}


.section-command::before {
    content: "$ ";

    color: var(--cyan);
}


/* =====================================================
   TERMINAL WINDOW
===================================================== */

.terminal-window {
    max-width: var(--max-width);

    margin: 0 auto;

    background: var(--panel);

    border:
        1px solid var(--border);

    box-shadow: var(--shadow);
}


.window-header {
    padding: 12px 18px;

    color: var(--green);

    border-bottom:
        1px solid var(--border);

    font-size: 12px;
}


.window-header::before {
    content: "● ";

    color: var(--green);
}


.window-content {
    padding: 35px;
}


.window-content p {
    margin-bottom: 20px;

    color: var(--gray);
}


.window-content strong {
    color: var(--white);
}


/* =====================================================
   PROFILE STATS
===================================================== */

.profile-stats {
    display: grid;

    grid-template-columns:
        repeat(6, 1fr);

    gap: 15px;

    margin-top: 40px;
}


.stat-card {
    padding: 25px;

    background:
        rgba(0, 255, 102, 0.02);

    border:
        1px solid var(--border);
}


.stat-number {
    display: block;

    color: var(--green);

    font-size: 30px;

    line-height: 1.2;
}


.stat-label {
    display: block;

    margin-top: 8px;

    color: var(--muted);

    font-size: 10px;

    line-height: 1.4;
}


/* =====================================================
   SKILLS
===================================================== */

.skills-grid {
    max-width: var(--max-width);

    margin: 0 auto;

    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 20px;
}


.skill-card {
    padding: 30px;

    background: var(--panel);

    border:
        1px solid var(--border);

    transition:
        transform 0.25s ease,
        border-color 0.25s ease,
        box-shadow 0.25s ease;
}


.skill-card:hover {
    transform: translateY(-5px);

    border-color: var(--green);

    box-shadow:
        0 10px 30px
        rgba(0, 255, 102, 0.05);
}


.skill-icon {
    margin-bottom: 20px;

    color: var(--cyan);

    font-weight: bold;
}


.skill-card h3 {
    margin-bottom: 15px;

    color: var(--green);

    font-size: 19px;
}


.skill-card p {
    color: var(--gray);

    font-size: 13px;

    line-height: 1.8;
}


/* =====================================================
   EXPERIENCE TIMELINE
===================================================== */

.experience-timeline {
    max-width: var(--max-width);

    position: relative;

    margin: 0 auto;
}


.experience-timeline::before {
    content: "";

    position: absolute;

    top: 0;
    bottom: 0;
    left: 25px;

    width: 1px;

    background:
        linear-gradient(
            to bottom,
            var(--green),
            rgba(0, 255, 102, 0.05)
        );
}


.experience-item {
    position: relative;

    display: grid;

    grid-template-columns:
        70px 1fr;

    gap: 0;

    margin-bottom: 45px;
}


.experience-item:last-child {
    margin-bottom: 0;
}


.experience-marker {
    position: relative;

    z-index: 2;

    width: 50px;
    height: 50px;

    display: flex;

    align-items: center;
    justify-content: center;

    background: #050b07;

    border:
        1px solid var(--green);

    color: var(--green);

    font-size: 11px;

    font-weight: bold;

    box-shadow:
        0 0 15px
        rgba(0, 255, 102, 0.08);
}


.experience-content {
    padding: 30px 35px;

    background:
        rgba(6, 15, 10, 0.82);

    border:
        1px solid var(--border);

    transition:
        transform 0.25s ease,
        border-color 0.25s ease,
        box-shadow 0.25s ease;
}


.experience-content:hover {
    transform: translateX(5px);

    border-color:
        rgba(0, 255, 102, 0.45);

    box-shadow:
        0 10px 35px
        rgba(0, 255, 102, 0.06);
}


.experience-header {
    display: flex;

    align-items: flex-start;
    justify-content: space-between;

    gap: 20px;
}


.company-name {
    margin-bottom: 7px;

    color: var(--white);

    font-size: 24px;

    line-height: 1.3;
}


.position-title {
    margin-bottom: 6px;

    color: var(--green);

    font-size: 16px;

    font-weight: normal;
}


.experience-company-note {
    display: block;

    margin-bottom: 4px;

    color: #6f8c78;

    font-size: 10px;
}


.experience-location {
    display: block;

    margin-top: 5px;

    margin-bottom: 5px;

    color: var(--muted);

    font-size: 11px;
}


.experience-period {
    display: block;

    color: var(--cyan);

    font-size: 11px;

    letter-spacing: 1px;
}


.experience-status {
    padding: 5px 10px;

    color: var(--green);

    border:
        1px solid rgba(0, 255, 102, 0.35);

    font-size: 9px;

    white-space: nowrap;
}


.experience-line {
    height: 1px;

    margin: 22px 0;

    background:
        rgba(0, 255, 102, 0.10);
}


.experience-description {
    margin-bottom: 25px;
}


.experience-label,
.tech-label {
    display: block;

    margin-bottom: 10px;

    color: var(--green);

    font-size: 10px;

    font-weight: bold;

    letter-spacing: 1.5px;
}


.experience-description p {
    max-width: 1150px;

    color: var(--gray);

    font-size: 13px;

    line-height: 1.8;
}


.experience-tech-section {
    padding-top: 5px;
}


.tech-label {
    color: var(--muted);

    font-size: 9px;
}


.experience-tech {
    display: flex;

    flex-wrap: wrap;

    gap: 8px;
}


.experience-tech span {
    padding: 5px 10px;

    color: var(--cyan);

    background:
        rgba(0, 234, 255, 0.025);

    border:
        1px solid rgba(0, 234, 255, 0.18);

    font-size: 9px;

    transition:
        color 0.2s ease,
        background 0.2s ease;
}


.experience-tech span:hover {
    color: #000;

    background: var(--cyan);
}


/* =====================================================
   PROJECTS
===================================================== */

.projects-grid {
    max-width: var(--max-width);

    margin: 0 auto;

    display: grid;

    grid-template-columns:
        repeat(2, 1fr);

    gap: 25px;
}


.project-card {
    position: relative;

    display: flex;

    flex-direction: column;

    padding: 30px;

    background: var(--panel);

    border:
        1px solid var(--border);

    overflow: hidden;

    transition:
        transform 0.3s ease,
        border-color 0.3s ease,
        box-shadow 0.3s ease;
}


.project-card::before {
    content: "";

    position: absolute;

    top: 0;
    left: 0;

    width: 3px;
    height: 0;

    background: var(--green);

    transition:
        height 0.3s ease;
}


.project-card:hover {
    transform: translateY(-6px);

    border-color:
        rgba(0, 255, 102, 0.45);

    box-shadow:
        0 12px 35px
        rgba(0, 255, 102, 0.05);
}


.project-card:hover::before {
    height: 100%;
}


.project-top {
    display: flex;

    align-items: center;
    justify-content: space-between;

    gap: 15px;

    margin-bottom: 25px;
}


.project-id {
    color: var(--green);

    font-size: 11px;
}


.status {
    color: #4c7558;

    font-size: 10px;

    text-align: right;
}


.project-card h3 {
    margin-bottom: 15px;

    color: var(--white);

    font-size: 22px;

    line-height: 1.35;
}


.project-card > p {
    color: var(--gray);

    font-size: 13px;

    line-height: 1.8;
}


.project-tech {
    display: flex;

    flex-wrap: wrap;

    gap: 8px;

    margin-top: 20px;
}


.project-tech span {
    padding: 4px 8px;

    color: var(--cyan);

    border:
        1px solid rgba(0, 234, 255, 0.2);

    background:
        rgba(0, 234, 255, 0.015);

    font-size: 10px;
}


.project-details {
    margin-top: 20px;

    padding-top: 12px;

    border-top:
        1px solid rgba(255, 255, 255, 0.12);
}


.project-details summary {
    display: flex;

    align-items: center;
    justify-content: space-between;

    cursor: pointer;

    color: #00ff9d;

    font-family: monospace;

    font-size: 13px;

    font-weight: 600;

    list-style: none;

    user-select: none;
}


.project-details summary::-webkit-details-marker {
    display: none;
}


.project-details summary:hover {
    color: #fff;
}


.expand-icon {
    color: var(--green);

    font-size: 20px;

    line-height: 1;

    transition:
        transform 0.2s ease;
}


.project-details[open] .expand-icon {
    transform: rotate(45deg);
}


.responsibilities {
    margin-top: 15px;

    padding:
        5px 0 5px 15px;

    border-left:
        2px solid #00ff9d;

    color: #b8b8b8;

    line-height: 1.7;
}


.responsibilities p {
    margin-bottom: 10px;
}


.responsibilities p:last-child {
    margin-bottom: 0;
}


.project-command {
    margin-top: 25px;

    color: #557961;

    font-size: 11px;
}


/* =====================================================
   ARCHITECTURE
===================================================== */

.architecture-window {
    max-width: var(--max-width);

    margin: 0 auto;

    padding: 40px;

    background: var(--panel);

    border:
        1px solid var(--border);

    overflow-x: auto;
}


.architecture-title {
    margin-bottom: 40px;

    color: var(--green);

    font-size: 14px;

    letter-spacing: 1px;
}


.architecture-flow {
    min-width: 900px;

    display: flex;

    align-items: center;

    justify-content: center;
}


.architecture-node {
    min-width: 130px;
    min-height: 100px;

    display: flex;

    flex-direction: column;

    align-items: center;
    justify-content: center;

    gap: 10px;

    padding: 20px;

    background: #061009;

    border:
        1px solid #284132;

    text-align: center;
}


.architecture-node.highlight {
    border-color: var(--green);

    box-shadow:
        0 0 20px
        rgba(0, 255, 102, 0.08);
}


.node-icon {
    color: var(--cyan);

    font-size: 11px;
}


.architecture-node strong {
    font-size: 12px;
}


.arrow {
    padding: 0 10px;

    color: var(--green);

    white-space: nowrap;
}


.architecture-description {
    margin-top: 40px;

    padding-top: 25px;

    border-top:
        1px solid var(--border);

    color: var(--gray);

    font-size: 13px;
}


/* =====================================================
   CERTIFICATIONS
===================================================== */

.certification-grid {
    max-width: var(--max-width);

    margin: 0 auto;

    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 20px;
}


.certification-card {
    padding: 30px;

    background: var(--panel);

    border:
        1px solid var(--border);

    transition:
        transform 0.25s ease,
        border-color 0.25s ease;
}


.certification-card:hover {
    transform: translateY(-5px);

    border-color: var(--green);
}


.certificate-icon {
    margin-bottom: 20px;

    color: var(--green);

    font-size: 30px;
}


.certification-card h3 {
    color: var(--white);

    font-size: 18px;
}


.certification-card p {
    margin: 8px 0 20px;

    color: var(--gray);

    font-size: 13px;
}


.certification-card span {
    color: var(--green);

    font-size: 10px;
}


/* =====================================================
   CONTACT
===================================================== */

.contact-section {
    padding: 130px 7%;
    text-align: center;
}

.contact-terminal {
    max-width: 900px;
    margin: 0 auto;
    padding: 60px 30px;
    background: radial-gradient(circle at center, rgba(0, 255, 102, 0.05), transparent 65%);
    border: 1px solid var(--border);
}

.contact-terminal .terminal-command {
    margin-bottom: 0;
}

.contact-terminal h2 {
    margin: 30px 0;
    font-size: clamp(35px, 6vw, 70px);
    line-height: 1.1;
}

.contact-terminal > p {
    max-width: 650px;
    margin: 0 auto 35px;
    color: var(--gray);
}

.btn {
    display: inline-block;
    padding: 12px 22px;
    margin: 10px 5px;
    background-color: #2563eb;
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 600;
    transition: 0.3s;
}

.btn:hover {
    background-color: #1d4ed8;
    transform: translateY(-2px);
}


/* =====================================================
   FOOTER
===================================================== */

footer {
    padding: 30px 7%;
    color: #53685a;
    border-top: 1px solid var(--border);
    font-size: 11px;
    text-align: center;
}


footer p {
    margin-top: 10px;
}


/* =====================================================
   FOCUS ACCESSIBILITY
===================================================== */

a:focus-visible,
summary:focus-visible {
    outline: 2px solid var(--cyan);
    outline-offset: 4px;
}


/* =====================================================
   RESPONSIVE - 1200PX
===================================================== */

@media (max-width: 1200px) {
    .profile-stats {
        grid-template-columns:
            repeat(3, 1fr);
    }

    .skills-grid {
        grid-template-columns:
            repeat(2, 1fr);
    }

    .navbar {
        padding-left: 5%;
        padding-right: 5%;
    }

}


/* =====================================================
   RESPONSIVE - 900PX
===================================================== */

@media (max-width: 900px) {

    .navbar {
        flex-direction: column;
        justify-content: center;
        padding: 18px 5%;
        gap: 15px;
    }

    nav {
        justify-content: center;
        gap: 12px;
    }


    .hero {
        min-height: auto;
        padding: 90px 6%;
    }


    .section {
        padding:90px 6%;
    }


    .projects-grid {
        grid-template-columns: 1fr;
    }


    .certification-grid {
        grid-template-columns:
            repeat(2, 1fr);
    }


    .experience-content {
        padding: 25px;
    }

}


/* =====================================================
   RESPONSIVE - 700PX
===================================================== */

@media (max-width: 700px) {
    .terminal-title {
        display: none;
    }

    .terminal-bar {
        justify-content: center;
    }

    .navbar {
        position: relative;
    }

    .nav-logo {
        font-size: 13px;
    }

    nav {
        width: 100%;
    }

    nav a {
        font-size: 10px;
    }

    .hero {
        padding:
            70px 6%;
    }

    .hero h1 {
        letter-spacing:
            -2px;
    }

    .hero-description {
        font-size: 14px;
    }

    .profile-stats {
        grid-template-columns:
            repeat(2, 1fr);
    }

    .skills-grid {
        grid-template-columns: 1fr;
    }

    .certification-grid {
        grid-template-columns: 1fr;
    }

    .experience-item {
        grid-template-columns:
            55px 1fr;
    }

    .experience-timeline::before {
        left: 20px;
    }

    .experience-marker {
        width: 42px;
        height: 42px;
    }

    .experience-header {
        flex-direction: column;
    }

    .experience-status {
        align-self: flex-start;
    }

    .company-name {
        font-size: 20px;
    }

    .position-title {
        font-size: 15px;
    }

    .project-card {
        padding: 25px;
    }

    .architecture-window {
        padding: 25px;
    }

}


/* =====================================================
   RESPONSIVE - 500PX
===================================================== */

@media (max-width: 500px) {

    .section {
        padding:
            70px 5%;
    }


    .section-header {
        margin-bottom: 30px;
    }


    .section-command {
        font-size: 11px;
    }


    .window-content {
        padding: 25px 20px;
    }


    .profile-stats {
        grid-template-columns: 1fr;
    }


    .stat-card {
        padding: 20px;
    }


    .hero-buttons,
    .contact-buttons {
        flex-direction: column;
    }


    .terminal-button {
        width: 100%;

        text-align: center;
    }


    .experience-item {
        grid-template-columns:
            1fr;
    }


    .experience-timeline::before {
        display: none;
    }


    .experience-marker {
        margin-bottom: 12px;
    }


    .experience-content {
        padding: 22px 18px;
    }


    .experience-content:hover {
        transform: none;
    }


    .experience-tech {
        gap: 6px;
    }


    .experience-tech span {
        font-size: 8px;
        padding: 4px 7px;
    }

    .project-top {
        align-items: flex-start;
        flex-direction: column;
    }

    .status {
        text-align: left;
    }

    .project-card h3 {
        font-size: 19px;
    }

    .contact-section {
        padding: 90px 5%;
    }

    .contact-terminal {
        padding: 45px 20px;
    }

    footer {
        padding: 25px 5%;
    }

}


/* =====================================================
   REDUCED MOTION
===================================================== */

@media (prefers-reduced-motion: reduce) {
    html {
        scroll-behavior: auto;
    }


    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }

}
