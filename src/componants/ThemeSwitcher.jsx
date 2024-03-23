const ThemeSwitcher = ({ setTheme, theme }) => {
  return (
    <header className={`flex between `}>
      <h1>Todo</h1>
      <button
        className="theme-switcher"
        onClick={() => {
          setTheme((prev) => !prev);
        }}
      >
        {/** <!-- Theme switcher button with a sun icon --> */}
        <img
          src={theme ? "./images/icon-sun.svg" : "./images/icon-moon.svg"}
          alt="icon-sun"
        />
      </button>
    </header>
  );
};

export default ThemeSwitcher;
