export default function Lab5(app) {
  app.get("/lab5/welcome", (req, res) => {
    res.send("Welcome to Lab 5");
  });

  // Path parameters
  app.get("/lab5/add/:a/:b", (req, res) => {
    const { a, b } = req.params;
    res.send(`${parseInt(a) + parseInt(b)}`);
  });
  app.get("/lab5/subtract/:a/:b", (req, res) => {
    const { a, b } = req.params;
    res.send(`${parseInt(a) - parseInt(b)}`);
  });
  app.get("/lab5/multiply/:a/:b", (req, res) => {
    const { a, b } = req.params;
    res.send(`${parseInt(a) * parseInt(b)}`);
  });
  app.get("/lab5/divide/:a/:b", (req, res) => {
    const { a, b } = req.params;
    res.send(`${parseInt(a) / parseInt(b)}`);
  });

  // Query parameters
  app.get("/lab5/calculator", (req, res) => {
    const { operation } = req.query;
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    let result;
    switch (operation) {
      case "add": result = a + b; break;
      case "subtract": result = a - b; break;
      case "multiply": result = a * b; break;
      case "divide": result = a / b; break;
      default: result = "Unknown operation";
    }
    res.send(`${result}`);
  });

  // Remote object
  const assignment = {
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS", due: "2026-11-29", completed: false, score: 0,
  };
  app.get("/lab5/assignment", (req, res) => res.json(assignment));
  app.get("/lab5/assignment/title", (req, res) => res.send(assignment.title));

  const courseModule = {
    id: "M101", name: "Web Development", description: "Learn to build web apps",
    course: "CS5610", lessons: ["HTML", "CSS", "JavaScript"],
  };
  app.get("/lab5/module", (req, res) => res.json(courseModule));
  app.get("/lab5/module/name", (req, res) => res.send(courseModule.name));

  // Remote array
  const todos = [
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: true },
    { id: 3, title: "Task 3", completed: false },
    { id: 4, title: "Task 4", completed: true },
  ];
  app.get("/lab5/todos", (req, res) => {
    const { completed } = req.query;
    if (completed !== undefined) {
      res.json(todos.filter((t) => t.completed === (completed === "true")));
    } else {
      res.json(todos);
    }
  });
  app.get("/lab5/todos/:id", (req, res) => {
    const todo = todos.find((t) => t.id === parseInt(req.params.id));
    res.json(todo);
  });
}
