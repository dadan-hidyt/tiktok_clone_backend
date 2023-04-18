export default function Header(){
    return (
        <header className="bg-white shadow">
            <nav className="flex items-center w-10/12 mx-auto p-3 justify-between">
                <div className="text-lg font-bold" ><a href=""><span className="text-dark">Tiko</span><span className="text-red-400">Tok</span></a></div>
                <div className="hidden lg:block transition-all" id="search">
                    <form action="">
                       <div className="bg-[#dedede] w-[360px]  rounded-lg">
                       <input className="bg-[#dedede] w-[300px] rounded-lg p-2" type="search" />
                        <button className="border p-2 rounded-lg w-[60px]">🔍</button>
                       </div>
                    </form>
                </div>
                <div className="flex">
                    <button className="bg-white border border-[#dedede] px-5 mx-4 rounded text-[#5e5c5c] font-semibold">UPLOAD</button>
                    <button className="bg-red-500 text-white px-5 rounded font-semibold">LOGIN</button>
                </div>
            </nav>
        </header>
    )
}