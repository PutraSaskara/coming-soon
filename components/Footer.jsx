

function Footer() {
  return (
    <div className="w-full bg-black h-[300px] flex justify-center items-center">
        <div className="w-[20%] bg-slate-500">
            <div >
                <h1 className="text-white">HARNOLD</h1>
                <p className="text-white">Political & Part Theme</p>
            </div>
            <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione vitae obcaecati quia dolores, distinctio quo?</p>
        </div>
        <div className="w-[20%] bg-yellow-500">
            <h1 className="text-white">Recent News Post</h1>
        </div>
        <div className="w-[20%] bg-red-800">
            <h1 className="text-white">Recent Event</h1>
        </div>
        <div className="w-[20%] bg-blue-600">
            <h1 className="text-white">Contact Us</h1>
        </div>
    </div>
  )
}

export default Footer