const Razorpay = require("razorpay");

var instance = new Razorpay({
  key_id: "rzp_test_p2fIXj2Ygz7phw",
  key_secret: "bfxmhO9bbHpZzP3Df5ncdWas",
});

const create = async (req, res) => {
  const { amount } = req.body;

  var params = await {
    amount: Number(amount) * 100,
    currency: "INR",
    receipt: "su001",
    payment_capture: "1",
  };
  await instance.orders
    .create(params)
    .then((data) => {
      return res.send({ sub: data, status: "success" });
    })
    .catch((error) => {
      console.log(error, "Razorpay");
      return res.send({ sub: error, status: "failed" });
    });
};

module.exports = {
  create,
};
