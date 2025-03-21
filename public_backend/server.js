const app = require("./app");
const port = process.env.PORT || 4044;
app.listen(port, () => {
  console.log(
    "\x1b[96m%s\x1b[0m",
    `🚀 Server is running at:http://localhost:${port}`
  );
});
