const projects = [
  {
    id: 1,
    title: "001 - First Step",
    date: "2025-07-21",
    link: "/"
  },
  {
    id: 2,
    title: "002 - Simple To-do",
    date: "2025-07-21",
    link: "https://002-simple-todo.vercel.app/"
  },
  {
    id: 3,
    title: "003 - To-do with redux",
    link: "003-todo-with-redux.vercel.app"
  }
];

function App() {

  return (
    <>
    <h1>React Workout</h1>
      <h2>Everything starts with a first step.</h2>
      <p>I learned react a few years ago. I haven't used it so much since my focus has been backend with Python. I decided it's time to master it. So, here are some little projects I coded in my journey to master Reactjs. Small projects are great for developing muscle memory! 🦾</p>
      {projects.map((project) => (
        <div key={project.id}>
          <a href={project.link}>{project.title} - {project.date}</a>
        </div>
      ))}
    </>
  )
}

export default App
