import React from "react";

class ThemeSwitcher extends React.Component {
  render() {
    return (
      <header className="flex between">
        <h1>Todo</h1>
        <button
          className="theme-switcher"
          onClick={() => {
            this.props.setTheme();
          }}
        >
          <img
            src={
              this.props.theme
                ? "./images/icon-sun.svg"
                : "./images/icon-moon.svg"
            }
            alt="icon-sun"
          />
        </button>
      </header>
    );
  }
}

export default ThemeSwitcher;
