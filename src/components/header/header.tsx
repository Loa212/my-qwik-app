import { component$ } from "@builder.io/qwik";
import { QwikLogo } from "../icons/qwik";

export default component$(() => {
  return (
    <header className="flex items-center justify-between max-w-7xl mx-2 xl:mx-auto bg-slate-200/80 px-4 py-2 rounded-md ring ring-slate-700/20 mt-4">
      <div class="logo">
        <a href="https://qwik.builder.io/" target="_blank">
          <QwikLogo />
        </a>
      </div>
      <ul className="flex items-center gap-x-4">
        <li>
          <a
            href="https://qwik.builder.io/docs/components/overview/"
            target="_blank"
          >
            Docs
          </a>
        </li>
        <li>
          <a
            href="https://qwik.builder.io/examples/introduction/hello-world/"
            target="_blank"
          >
            Examples
          </a>
        </li>
        <li>
          <a
            href="https://qwik.builder.io/tutorial/welcome/overview/"
            target="_blank"
          >
            Tutorials
          </a>
        </li>
      </ul>
    </header>
  );
});
