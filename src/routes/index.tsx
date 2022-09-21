import { component$, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
// import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  const store = useStore({ count: 0 });

  return (
    <div className="text-center py-8 space-y-4">
      <p className="text-2xl text-white">Count: {store.count}</p>
      <button
        className="bg-slate-200 px-16 py-4 rounded-md mx-4 font-bold text-lg"
        onClick$={() => store.count++}
      >
        Click
      </button>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
};
