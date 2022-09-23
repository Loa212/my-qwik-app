// export the compiled middleware where cloudflare pages can find it.
// for example use /functions/[[path]].ts or /functions/_middleware.ts
// to have qwik city handle all requests.

export { onRequest } from "../server/entry.server";
