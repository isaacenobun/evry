import { MagnifyingGlass } from "./icons";

const Search = ({
    setIsFocused,
  }: {
    setIsFocused: (focused: boolean) => void;
  }) => {
    return (
      <div className="w-full md:w-[85%]">
        <form className="relative flex justify-center focus-within:border-blue-500 focus-within:text-blue-500">
          <input
            type="text"
            placeholder="Search for a task"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="rounded-[2rem] border-gray-500 border-2 lg:w-[65%] md:[70%] w-[80%] h-16 my-4 text-center mb-8 md:placeholder:text-2xl placeholder:text=lg outline-none hover:border-blue-500 focus:border-blue-500 focus:text-black text-gray-700 text-xl"
          />
          <MagnifyingGlass />
        </form>
      </div>
    );
  };
  
  export default Search;