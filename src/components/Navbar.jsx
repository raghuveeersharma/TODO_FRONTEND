const Navbar = () => {
  return (
    <div>
      <div className="navbar  bg-blue-300">
        <div className="flex-1">
          <a className=" text-2xl font-bold">Track your tasks</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a
                href="https://www.linkedin.com/in/raghuveer-sharma-810124252"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-300"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <details>
                <summary>GitHub</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <a
                      className="bg-blue-300"
                      href="https://github.com/raghuveeersharma/TODO_FRONTEND"
                    >
                      Frontend
                    </a>
                  </li>
                  <hr />
                  <li>
                    <a
                      className="bg-blue-300"
                      href="https://github.com/raghuveeersharma/TODO_BACKEND"
                    >
                      Backend
                    </a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
