import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="center">
        <header class="flex between">
          <h1>Todo</h1>
          <button class="theme-switcher">
            <img src="./images/icon-sun.svg" alt="icon-sun" />
          </button>
        </header>
        <main>
          <form id="todo-form" class="flex">
            <span></span>
            <input type="text" id="add" placeholder="Create new todo ...." />
          </form>
          <section id="tasks-management">
            <div id="tasks-wrap">
              <div class="single-task flex between">
                <div class="flex">
                  <form class="checked">
                    <input type="checkbox" class="state" />
                  </form>
                  <p>new task</p>
                </div>
                <button class="delete">
                  <img src="./images/icon-cross.svg" alt="icon-cross" />
                </button>
              </div>
            </div>
            <hr />
            <div class="filters flex between">
              <div>
                <span id="active-number">0</span>
                <span>items left</span>
              </div>
              <div class="filter-btn">
                <button class="all">All</button>
                <button class="active">Active</button>
                <button class="completed">Completed</button>
              </div>
              <button class="clear-completed">Clear Completed</button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
