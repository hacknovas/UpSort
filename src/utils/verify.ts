export default function verifyToken(token: String | undefined) {
  const jwt = require("jsonwebtoken");

  const decode = jwt.verify(token, process.env.NEXT_PUBLIC_SECRET_KEY);

  return decode;
}
