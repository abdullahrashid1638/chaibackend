import express from "express";

const app = express();
const port = process.env.PORT || 3000;
// app.use(express.static('dist'));

// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

// get a list of 5 jokes
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Knock Knock Joke",
      content: "Knock knock." +
        "Who's there?" +
        "Interrupting cow." +
        "Interrupting cow who?" +
        "Interrupting cow I was telling you a joke!"
    },
    {
      id: 2,
      title: "Punny Joke",
      content: "I tried starting a hot air balloon business, but it never took off."
    },
    {
      id: 3,
      title: "Dad Joke",
      content: "I tried starting a hot air balloon business, but it never took off."
    },
    {
      id: 4,
      title: "Knock Knock Joke 2",
      content: "Knock knock." +
        "Who's there?" +
        "Lettuce." +
        "Lettuce who?" +
        "Lettuce in, it's cold out there!"
    },
    {
      id: 5,
      title: "Punny Joke 2",
      content: "I tried starting a hot air balloon business, but it never took off."
    }
  ];
  
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);  
});
