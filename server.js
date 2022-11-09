require("dotenv").config();
const app = require("./app");
const port = process.env.PORT || 4001;

const server = app.listen(port, () => {
  console.log(`Server is on 🔥 on port ${port}`);
});
