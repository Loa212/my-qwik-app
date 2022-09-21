import { component$, Slot } from "@builder.io/qwik";
import Header from "../components/header/header";

export default component$(() => {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-pink-600">
      <main className="">
        <Header />
        <section className="max-w-7xl mx-auto">
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
