export default function Header({ theme, setTheme }) {
  // 📌 theme options
  const themes = ["system", "light", "dark"];

  // 📌 icons
  const themeIcons = {
    system: "🖥️",
    light: "☀️",
    dark: "🌙",
  };

  // 📌 handler
  const handleThemeChange = (value) => {
    setTheme(value);
  };

  return (
    <div className="header">
      <div className="header-tag">✦ Sheryians Space ✦</div>

      <h1>
        In<span>kit</span>
      </h1>

      <p className="header-sub">Write Share and manage your thoughts.</p>

      {/* 🌗 Theme Toggle */}
      <div className="theme-toggle" data-active={theme}>
        {themes.map((t) => (
          <button key={t} onClick={() => handleThemeChange(t)}>
            {themeIcons[t]}
          </button>
        ))}
      </div>
    </div>
  );
}
