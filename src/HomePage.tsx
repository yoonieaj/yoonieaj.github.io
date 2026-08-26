import './index.css';

function HomePage() {
  return (
    <div>
      <h1>hello! i'm yoonie :)</h1>
      <div className="my-8 mr-80 min-w-md outline outline-2 outline-(--accent-cyan)/40 p-5 pb-10 mb-20 rounded-xl bg-(--bg)/80">
        <p>you've reached my personal website. thanks for stopping by!</p>
        <br />
        <p>i’m currently finishing up with my undergrad degree in computer science and astrophysics at the 
          university of toronto. in the slow days before i start my last semester of school, i decided to 
          make a personal website -- partly to brush up on my frontend skills, partly because i like making 
          pretty things.</p>
        <br/>
        <p>also, it’s fun to make a custom website just for yourself, even if it’s likely not many people 
          will see it.</p>
        <br/>
        <p>this is an extreme work in progress, but feel free to poke around. i hope you enjoy your time here!</p>
      </div>
    </div>
  )
}

export default HomePage;