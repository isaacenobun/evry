import { Right } from "./icons";

type Props = {
  task: string;
  text: string;
  svg: React.ReactNode
  onClick?: () => void; // Ensure it's optional to avoid errors
};

const Box = ({ task, text, onClick, svg }: Props) => {
  return (
    <div
      className="border-2 border-gray-500 md:h-48 h-52 md:w-1/3 xs:w-[70%] my-4 box-border lg:p-8 md:p-4 p-6 rounded-3xl focus:border-blue-500 hover:border-blue-500 cursor-pointer relative"
      onClick={onClick}
    >
      <div className="flex justify-between">
        <p className="text-xl">{task}</p>
        {svg}
      </div>

      <div className="text-gray-400 text-lg leading-5 mt-4">{text}</div>
      <Right />
    </div>
  );
};

export default Box;
