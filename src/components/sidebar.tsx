import { ReactNode } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ children }: { children: ReactNode }) => {
  return (
    <div className="sticky flex h-screen flex-row gap-4 overflow-y-auto rounded-lg sm:overflow-x-hidden">
      <aside className="sidebar-sticky sidebar justify-start">
        <section className="sidebar-title items-center p-4">
          <svg
            fill="none"
            height="42"
            viewBox="0 0 32 32"
            width="42"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect height="100%" rx="16" width="100%"></rect>
            <path
              clipRule="evenodd"
              d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
              fill="currentColor"
              fillRule="evenodd"
            ></path>
          </svg>
          <div className="flex flex-col">
            <span>Acme</span>
            <span className="text-xs font-normal text-content2">Team Plan</span>
          </div>
        </section>
        <section className="sidebar-content min-h-[20rem]">
          <nav className="menu rounded-md">
            <section className="menu-section px-4">
              <span className="menu-title">Main menu</span>
              <ul className="menu-items">
                <Link to="/">
                  <li className="menu-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>Dashboard</span>
                  </li>
                </Link>
                <Link to="/product">
                  <li className="menu-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span>Products</span>
                  </li>
                </Link>
              </ul>
            </section>
          </nav>
        </section>
        <section className="sidebar-footer bg-gray-2 pt-2">
          <div className="divider my-0"></div>
          <div className="dropdown z-50 flex h-fit w-full cursor-pointer hover:bg-gray-4">
            <label
              className="whites mx-2 flex h-fit w-full cursor-pointer p-0 hover:bg-gray-4"
              tabIndex={0}
            >
              <div className="flex flex-row gap-4 p-4">
                <div className="avatar avatar-md">
                  <img src="https://i.pravatar.cc/150?img=30" alt="avatar" />
                </div>

                <div className="flex flex-col">
                  <span>Sandra Marx</span>
                  <span className="text-xs font-normal text-content2">
                    sandra
                  </span>
                </div>
              </div>
            </label>
            <div className="dropdown-menu-right-top dropdown-menu ml-2">
              <a className="dropdown-item text-sm">Profile</a>
              <a tabIndex={-1} className="dropdown-item text-sm">
                Account settings
              </a>
              <a tabIndex={-1} className="dropdown-item text-sm">
                Change email
              </a>
              <a tabIndex={-1} className="dropdown-item text-sm">
                Subscriptions
              </a>
              <a tabIndex={-1} className="dropdown-item text-sm">
                Change password
              </a>
              <a tabIndex={-1} className="dropdown-item text-sm">
                Refer a friend
              </a>
              <a tabIndex={-1} className="dropdown-item text-sm">
                Settings
              </a>
            </div>
          </div>
        </section>
      </aside>
      <div className="flex w-full flex-row flex-wrap gap-4 p-6">
        <div className="my-4 w-full">{children}</div>
      </div>
    </div>
  );
};

export default Sidebar;
