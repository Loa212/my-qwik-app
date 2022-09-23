import {
  component$,
  createContext,
  Slot,
  useContextProvider,
  useStore,
} from "@builder.io/qwik";
import Header from "../components/header/header";

export interface BaseLayoutState {
  drawerOpen: boolean;
}
export const CTX = createContext<BaseLayoutState>("baseLayout");

export default component$(() => {
  const store = useStore({ drawerOpen: false });

  useContextProvider(CTX, store);

  return (
    <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-pink-600">
      <main className="">
        <Header />
        <section className="max-w-7xl mx-auto">
          <div
            className={
              " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
              (store.drawerOpen
                ? " transition-opacity opacity-100 duration-500 translate-x-0  "
                : " transition-all delay-500 opacity-0 translate-x-full  ")
            }
          >
            <section
              className={
                " w-[80vw] max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
                (store.drawerOpen ? " translate-x-0 " : " translate-x-full ")
              }
            >
              <article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
                <button
                  className="flex items-center gap-x-1 absolute top-3 right-2 px-6 py-2"
                  onClick$={() => {
                    store.drawerOpen = false;
                  }}
                >
                  <CloseIcon /> close
                </button>
                <header className="p-4 font-bold text-lg">Header</header>
                <ul>
                  <li>miao</li>
                  <li>bau</li>
                </ul>
              </article>
            </section>
            <section
              className=" w-screen h-full cursor-pointer "
              onClick$={() => {
                store.drawerOpen = false;
              }}
            ></section>
          </div>
          <Slot />
        </section>
      </main>
      <footer className="text-white absolute bottom-0 w-full flex items-center justify-center">
        <a href="https://www.builder.io/" target="_blank">
          Made with ♡ by Builder.io
        </a>
      </footer>
    </div>
  );
});

export const CloseIcon = ({ size = 24, color = "currentColor", ...props }) => (
  <svg
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="m13.41 11.996 4.3-4.29a1.004 1.004 0 1 0-1.42-1.42l-4.29 4.3-4.29-4.3a1.004 1.004 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a.999.999 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1.001 1.001 0 0 0 1.639-.325 1 1 0 0 0-.22-1.095l-4.3-4.29Z" />
  </svg>
);
