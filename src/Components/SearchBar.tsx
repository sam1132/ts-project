interface SearchProps {
  value:string;
  onChange: (value:string)=> void;
  placeholder:string;
}
function SearchBar(Props : SearchProps) {
  const {value,onChange,placeholder="Search by name..."} =Props
  return (
    <>
    <input type="text" 
    value={value}
    onChange={(e)=>onChange(e.target.value)}
    placeholder={placeholder}
    className="px-4  rounded-lg border-b border-b-teal-300"
    />
    </>
  )
}

export default SearchBar