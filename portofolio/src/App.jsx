import DataImage from './data'
function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 item-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md"/>
            <q>Continuously Developing Myself 😊</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi, I am Izmi Nabilah</h1>
          <p className="text-base/loose mb-6 opacity-50">
            A fresh graduate student of Gunadarma University, majoring in Informatics, who has real experience on real
            projects in backend development and front-end development. In the execution project, I have mastered
            PHP programming language, Golang, SQL, and JavaScript. I am a person who loves to try new things, so I
            like to learn new technology.
          </p>
          <div className="flex item-center sm:gap-4 gap-2">
            <a href="#" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-500">
              Download CV <i className="ri-download-2-fill ri-lg"></i>
            </a>
            <a href="#"  className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-500">
              See Project <i className="ri-arrow-down-fill ri-lg"></i>
            </a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto" />
      </div>
    </>
  )
}

export default App
