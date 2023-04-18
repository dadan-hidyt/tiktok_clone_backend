import { Outlet } from "react-router-dom"
import Header from "./components/Header";
import "./index.css";
function App() {

  return (
    <>
      <Header />
      <div className="flex min-h-full">
        <aside className="w-2/12 p-2">
          <ul>
            <li className=" text-[#5a5a5a] text-[24px] lg:text-lg txt-center text-lg"><a className="hover:bg-[#dedede] rounded cursor-pointer transition-all font-bold block px-5 py-2" href="">🏠&nbsp;<span className="hidden lg:inline">Home</span></a></li>
            <li className=" text-[#5a5a5a] text-[24px] lg:text-lg txt-center text-lg"><a className="hover:bg-[#dedede] rounded cursor-pointer transition-all font-bold block px-5 py-2" href="">👪&nbsp;<span className="hidden lg:inline">Home</span></a></li>
            <li className=" text-[#5a5a5a] text-[24px] lg:text-lg txt-center text-lg"><a className="hover:bg-[#dedede] rounded cursor-pointer transition-all font-bold block px-5 py-2" href="">🧭&nbsp;<span className="hidden lg:inline">Home</span></a></li>
          </ul>
          <button className="w-full p-3 border border-red-600 mt-5 rounded">MASUK</button>

        </aside>
        <main className="w-8/12">
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default App
