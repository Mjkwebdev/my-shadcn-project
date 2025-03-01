
import BeachImgComponent from "../BeachImgComponent"
const Hero = () => {
  return (
    <div className='flex w-screen h-screen bg-[green]'>
      <div className='w-1/2 bg-[#AD8330] flex flex-col justify-center'>
        <h1 className='text-4xl font-bold p-10'> Experience the Perfect Beach Day with Ease</h1>
      <p className='text-lg'> Reserve sunbeds, enjoy add-ons, and relax without hassle</p>
      </div>
      <div className='w-1/2 bg-cover' style={{backgroundImage: `url(${BeachImgComponent})`}}>
    <img src="${beachImgComponent}" alt="" />
      </div>
    </div>
  )
}

export default Hero