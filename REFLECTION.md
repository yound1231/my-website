# Reflection

- **Model/provider:** Big Pickle (OpenCode Zen, free)
- **Useful prompt:** "I want a one-page website called 'Bioinformatics for Data Science Students' ... Read AGENTS.md and propose a file list and steps. Don't write code yet." Asking for a plan first let me review the file list and section structure before any code was written.
- **Observed tool action:** OpenCode used the Write tool to create AGENTS.md (shown as "Used 4 Read, Shell, Write"). I confirmed the file existed by running `cat AGENTS.md` in my terminal. Later it used Write again to create index.html, style.css, script.js, and README.md.
- **Issue checked before/after:** Before, the design was plain and the theme toggle was a small, easy-to-miss button. I asked OpenCode for a friendlier pastel design with rounded cards, emoji icons, and a larger pill-shaped toggle while keeping contrast and focus visible. After the change, I checked that text is readable in both light and dark themes, the toggle shows a visible focus outline when I press Tab, and the layout still works at 360px wide.
- **How the interaction works:** Clicking the theme button (or pressing Enter/Space when it is focused) runs a function in script.js that toggles a theme class on the root element. CSS variables in style.css change colors based on that class, and the choice is saved in localStorage so it stays after a refresh.
