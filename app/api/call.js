import twilio from "twilio";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { customerNumber } = req.body;
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = twilio(accountSid, authToken);

    try {
      const call = await client.calls.create({
        url: "http://demo.twilio.com/docs/voice.xml",
        to: customerNumber,
        from: "+201200400094",
      });
      res.status(200).json({ message: "Call initiated", callSid: call.sid });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
