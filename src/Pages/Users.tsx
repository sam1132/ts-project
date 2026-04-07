import { useState } from "react"
import SearchBar from "../Components/SearchBar"
function Users() {
  const [search,setSearch] = useState("");
  return (
    <div className="flex justify-between">
      <h2 className="text-teal-300 font-semibold text-2xl ">Users</h2>
      <div>
        <SearchBar value={search} onChange={(value)=>setSearch(value)}/>
      </div>
    </div>
  )
}

export default Users