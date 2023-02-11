import './App.css';

function App() {
  return (
    <div className="w-full h-screen items-center flex-col justify-center ">
      <div className='text-center flex flex-col items-center justify-evenly h-1/4'>
        <h1 className=' text-3xl '>it's a delight to have you onboard</h1>
      <p className='text-sm font-bold text-gray-500'>Help us know you better</p>
      <p className='text-sm  text-gray-500'>(this is how we optimize wobot as per your business needs )</p>
      </div>
      <form action="" className='flex flex-col m-auto w-1/3 '>
        <div className='w-full'>

        <p className='capitalize'>your name</p>
        <input type="text" placeholder='e.g. jhon Smith' className='p-2 w-full rounded-md border-gray-700 border-[1px] focus:outline-none'/>
        </div>
        <div className='w-full my-7'>
          
        <p className='capitalize'>company name</p>
        <input type="text" placeholder='e.g. Alpha Inc.' className='p-2 w-full   rounded-md border-gray-700 border-[1px] focus:outline-none'/>
        </div>
        <div className='w-full'>
          
        <p className='capitalize'>industy</p>
        {/* <input type="s" className='p-2 w-full  rounded-md border-gray-700 border-[1px] focus:outline-none'/> */}
        <select name="industry" className=' capitalize w-full border-[1px] p-2 rounded-md border-gray-700' id=""><option  className='bg-white p-2'value="select">select</option></select>
        </div>
        <div className='w-full my-7'>
          <h1 >
            Number of locations
          </h1>
          <div className='w-full flex justify-between items-center'>
             <input className='hidden' type="radio" name="industry" id="first" />
             <label className='rounded-sm bg-gray-200 px-2 py-1' htmlFor="first">10-20</label>
             <input className='hidden' type="radio" name="industry" id="second" />
             <label className='rounded-sm bg-gray-200 px-2 py-1' htmlFor="second">21-50</label>
             <input className='hidden' type="radio" name="industry" id="third" />
             <label className='rounded-sm bg-gray-200 px-2 py-1' htmlFor="third">51-200</label>
             <input className='hidden' type="radio" name="industry" id="fourth" />
             <label className='rounded-sm bg-gray-200 px-2 py-1' htmlFor="fourth">201-500</label>
             <input className='hidden' type="radio" name="industry" id="fifth" />
             <label className='rounded-sm bg-gray-200 px-2 py-1'  htmlFor="fifth">500+</label>
          </div>
         
          <div>
            
          </div>
        </div>

        <button className='bg-blue-600 w-full p-2 text-white  capitalize rounded-md mt-7'>
          get started
        </button>
      </form>
      
    </div>
  );
}

export default App;
