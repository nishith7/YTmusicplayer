import SongCards from "./SongCards";

export default function Categories(){
    return (
    <div>
    <div className="flex space-x-6">
  <div>
  <button className="bg-inherit opacity-80 hover:bg-transparent hover:opacity-20 text-white text-opacity-100 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
  Energize
</button>
</div>

<div>
<button className="bg-inherit opacity-80 hover:bg-transparent hover:opacity-20  text-white text-opacity-100 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
  Relax
</button>
</div>
<div>
<button className="bg-inherit opacity-80 hover:bg-transparent hover:opacity-20  text-white text-opacity-100 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
  Workout
</button>
</div>
<div>
<button className="bg-inherit opacity-80 hover:bg-transparent hover:opacity-20  text-white text-opacity-100 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
  Commute
</button>
</div>
<div>
<button className="bg-inherit opacity-80 hover:bg-transparent hover:opacity-20  text-white text-opacity-100 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
  Focus
</button>
</div>

</div>
<div className="flex my-20">
<SongCards/>
</div>

</div>






    )
}