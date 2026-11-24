const courses = [
  { _id: "1234", name: "Web Development", number: "CS5610", term: "Fall 2026" },
  { _id: "2345", name: "Database Management Systems", number: "CS5200", term: "Fall 2026" },
  { _id: "3456", name: "Programming Design Paradigm", number: "CS5010", term: "Fall 2026" },
];

const modules = [
  { _id: "m101", course: "1234", name: "Week 1 - HTML", lessons: ["Intro", "What is HTML"] },
  { _id: "m102", course: "1234", name: "Week 2 - CSS", lessons: ["Flexbox", "Grid"] },
  { _id: "m103", course: "1234", name: "Week 3 - JavaScript", lessons: ["Variables", "Functions"] },
  { _id: "m201", course: "2345", name: "Week 1 - Relational Model", lessons: ["Tables", "Keys"] },
  { _id: "m202", course: "2345", name: "Week 2 - SQL", lessons: ["SELECT", "Joins"] },
];

export default function Courses(app) {
  app.get("/api/courses", (req, res) => res.json(courses));
  app.get("/api/courses/:courseId/modules", (req, res) => {
    const { courseId } = req.params;
    res.json(modules.filter((m) => m.course === courseId));
  });
}
