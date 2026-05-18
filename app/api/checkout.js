export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, price } = req.body;

    const payload = {
      merchantRefNum: "01200400089",
      customerMobile: "01200400094",
      amount: price,
      description: `Purchase of ${name}`,
      currency: "EGP",
      returnUrl: "https://el-bendary-pharmacy.vercel.app/cart",
    };

    const paymentUrl = `https://www.instabpay.com/pay?ref=${payload.merchantRefNum}&amount=${payload.amount}`;

    res.status(200).json({ paymentUrl });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
