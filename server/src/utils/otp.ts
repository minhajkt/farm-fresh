import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID!;
const authToken = process.env.TWILIO_AUTH_TOKEN!;
const client = twilio(accountSid, authToken);

export async function sendOtp(phone: string, otp: string): Promise<void> {
  await client.messages.create({
    body: `Your OTP is ${otp}`,
    from: process.env.TWILIO_PHONE_NUMBER!,
    to: phone,
  });
}

export function generateOtp(): string {
  const otp = Math.floor(100000 + Math.random() * 9000).toString();
  console.log('otp : ', otp )
  return otp
}
