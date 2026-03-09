import DataImage from './data'
import {listTools} from './data'
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
      
      {/* tentang */}
      <div className="tentang mt-32 py-10">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg">
          <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md mb-10 sm:hidden"></img>
          <p className="text-base/loose mb-10">
            Hi, my name is Izmi Nabilah Isnaini, a Full Stack Web Developer. I am passionate about 
            developing functional and efficient web applications that provide an optimal user experience.
            I always strive to build digital solutions that not only work well but are also easy to use.
          </p>
          <div className="flex items-center justify-between">
            <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block hidden"></img>
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  3<span className="text-violet-500">+</span>
                </h1>
                <p>Completed project</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  2<span className="text-violet-500">+</span>
                </h1>
                <p>Years of Experience</p>
              </div>
            </div>
          </div>
        </div>

        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            Tech Stack
          </h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50">
            Here are some of the tools I use for web development
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map(tool => (
              <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md 
              hover:bg-zinc-800 group" key={tool.id}>
              <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"/>
              <div>
                <h4 className="font-bold">{tool.nama}</h4>
                <p className="opacity-50">{tool.ket}</p>
              </div>
            </div>
            ))}



            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
