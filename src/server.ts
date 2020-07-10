import express from "express";

const app = express();

console.log("[Starting Server...]", new Date());

app.get("/", (request, response) => {
  return response.json({ message: "Home page" });
});

app.listen(3333, () => {
  console.log("🚀 [Server started] On Port: 3333");
});
