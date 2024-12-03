const http = require("http"); // core package uchun dependencine ichida korinmaydi bu nodejsni ozi bilan kealdi 
const mongodb = require("mongodb"); // asosiy masqsadi database bilan connection amalga oshirish

let db;
const connectionString = "mongodb+srv://khayotbek:emDqAos4g8lqk4hp@cluster0.uafjf.mongodb.net/Reja";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("MongoDB connectin succed");
      module.exports = client;
      const app = require("./app"); // express orqali backend serevrimizi quryapmiz /app ichida
      const server = http.createServer(app);
      let PORT = process.env.PORT || 4006;
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);

// backend apilarni ishlatish uchun kerak boladi

