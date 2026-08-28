import './index.css';

function HomePage() {
  return (
    <div>
      <h1>hello! i'm yoonie :)</h1>
      <div className="my-8 mr-80 min-w-md outline outline-2 outline-(--accent-cyan)/0 p-5 pb-10 mb-20 rounded-xl bg-(--bg)/80">
        <p>you've reached my personal website. thanks for stopping by!</p>
        <br />
        <p>i decided to make this before starting my last semester of school
          -- partly to get some practice coding without an agent, but mostly
          because i like making pretty things.
        </p>
        <br />
        <p>this is an extreme work in progress, but feel free to poke around!</p>
      </div>
    </div>
  )
}

export default HomePage;