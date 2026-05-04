const express = require("express");
const cors = require("cors");
const companyRoutes = require("./routes/companies/company.routes")
const productRoutes = require("./routes/restaurants/productRoutes")

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", companyRoutes)
app.use("/api", productRoutes)


app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "Backend smarttex ativo 🟢" });
});



module.exports = app;
