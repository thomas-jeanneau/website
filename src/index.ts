import "dotenv/config";
import App from "@safidea_/engine";
import { home } from "./pages/home";

const { PORT } = process.env;

if (!PORT) throw new Error("PORT is required");

const app = new App();
await app.start({
  name: "Thomas JEANNEAU's website",
  pages: [home],
  server: {
    port: PORT,
  },
});
