const categories = [
  {
    name: "Danger",
    value: "bg-danger",
  },
  {
    name: "Success",
    value: "bg-success",
  },
  {
    name: "Primary",
    value: "bg-primary",
  },
  {
    name: "Info",
    value: "bg-info",
  },
  {
    name: "Dark",
    value: "bg-dark",
  },
  {
    name: "Warning",
    value: "bg-warning",
  },
];

const calendarEvents = [
  {
    id: 1,
    title: "Javascipt interview",
    start: new Date().setDate(new Date().getDate() + 2),
    className: "bg-warning text-white",
  },
  {
    id: 2,
    title: "Python interview",
    start: new Date().setDate(new Date().getDate() - 5),
    end: new Date().setDate(new Date().getDate() - 3),
    className: "bg-success text-white",
  },
  {
    id: 4,
    title: "Algorithms interview",
    start: new Date().setDate(new Date().getDate() + 4),
    className: "bg-primary text-white",
  },
];

export { categories, calendarEvents };
