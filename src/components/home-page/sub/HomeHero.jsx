



export default function HomeHero() {



  return (
    <div id="home-hero" className="hero min-h-[90vh]" style={{backgroundImage: "url(images/home/home-hero.jpg)"}}>
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-white">
        <div className="max-w-4xl space-y-5">
          <h1 className="text-5xl font-bold drop-shadow-medium2">Unlock Your Full <br/>Workday Potential</h1>
          <p className="drop-shadow-dark2">
            As Workday's Services Partner, we're committed to enhancing your Workday experience.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  )
}