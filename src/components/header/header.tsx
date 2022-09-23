import { component$, useContext } from "@builder.io/qwik";
import { CTX } from "~/routes/layout";
import { QwikLogo } from "../icons/qwik";

export default component$(() => {
  const store: { drawerOpen: boolean } = useContext(CTX);

  return (
    <header className="flex items-center justify-between max-w-7xl mx-2 xl:mx-auto bg-slate-200/80 px-4 py-2 rounded-md ring ring-slate-700/20 mt-4">
      <div class="logo">
        <a href="https://qwik.builder.io/" target="_blank">
          <QwikLogo />
        </a>
      </div>
      <ul className="flex items-center gap-x-4">
        <li className="hidden xl:block">
          <a
            href="https://qwik.builder.io/docs/components/overview/"
            target="_blank"
          >
            Docs
          </a>
        </li>
        <li className="hidden xl:block">
          <a
            href="https://qwik.builder.io/examples/introduction/hello-world/"
            target="_blank"
          >
            Examples
          </a>
        </li>
        <li className="hidden xl:block">
          <a
            href="https://qwik.builder.io/tutorial/welcome/overview/"
            target="_blank"
          >
            Tutorials
          </a>
        </li>
        <li>
          <button
            className="p-2 hover:ring ring-slate-700 rounded-md"
            onClick$={() => (store.drawerOpen = true)}
          >
            <MenuIcon />
          </button>
        </li>
      </ul>
    </header>
  );
});

export const MenuIcon = ({ size = 28, color = "currentColor", ...props }) => (
  <svg
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M3 5.25v1.5h18v-1.5H3Zm0 6v1.5h18v-1.5H3Zm0 6v1.5h18v-1.5H3Z" />
  </svg>
);
