interface SearchProps {
  value:string;
  onChange: (value:string)=> void;
}
function SearchBar(Props : SearchProps) {
  const {value,onChange} =Props
  return (
    <>
    <input type="text" 
    value={value}
    onChange={(e)=>onChange(e.target.value)}
    placeholder="search by name..."
    className="px-4  rounded-lg border-b border-b-teal-300"
    />
    </>
  )
}

export default SearchBar