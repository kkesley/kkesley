import React from 'react';

function App() {
  return (
    <div className="App">
      <section className="hero is-success is-link is-fullheight">
        <div className="hero-header">
          <div className="container">
            <nav className="navbar is-transparent">
              <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                  <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
                </a>
                <div className="navbar-burger burger" data-target="navbar-main">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>

              <div id="navbar-main" className="navbar-menu">
                <div className="navbar-end">
                  <a className="navbar-item" href="https://bulma.io/">
                    Home
                  </a>
                  <a className="navbar-item" href="https://bulma.io/">
                    Test
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Fullheight title
            </h1>
            <h2 className="subtitle">
              Fullheight subtitle
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
