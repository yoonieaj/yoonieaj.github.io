import './index.css';

function About() {
  return (
    <div className="flex flex-row flex-wrap gap-x-10">
      <div className="min-w-md">
        <h1>about me!</h1>
      </div>
      <div className="my-8 flex-4 p-5 rounded-xl bg-(--bg)/80">
        <p>
          my name's yoonie, and i'm currently a student at the university of toronto
          studying computer science and astrophysics. i'm hoping to be done with classes by the end of this year!
        </p>
        <br />
        <p>
          in my spare time, i’m a big fan of hobbies i can use as a creative outlet, like music, crafts,
          or journalling. i also foolishly drew all the backgrounds for this site, which took way too long
          and means i can’t animate them. (maybe later!)
        </p>
        <br />
        <p>
          currently my biggest regret is not picking a cooler username for my github account.
          ‘yoonieaj.github.io’ just feels like it’s missing a little something.
        </p>
      </div>
    </div>
  )
}

export default About;