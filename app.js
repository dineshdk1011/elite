var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
const Razorpay = require("razorpay");


var instance = new Razorpay({
  key_id: "rzp_test_p2fIXj2Ygz7phw",
  key_secret: "bfxmhO9bbHpZzP3Df5ncdWas",
});

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var productRouter = require("./routes/products");
var categoryRouter = require("./routes/category");
var swatchRouter = require("./routes/swatches");
var galleryRouter = require("./routes/gallery");
var cartRouter = require("./routes/cart");
var orderRouter = require("./routes/orders");
var razorpayRouter = require("./routes/razorpay");
var historyRouter = require("./routes/history");
var treeviewRouter = require("./routes/viewtree")

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/products", productRouter);
app.use("/category", categoryRouter);
app.use("/swatches", swatchRouter);
app.use("/gallery", galleryRouter);
app.use("/cart", cartRouter);
app.use("/order", orderRouter);
app.use("/razorpay", razorpayRouter);
app.use("/history", historyRouter);

app.use("/treeviewRouter", treeviewRouter );

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
