import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-[50vh]">
      <AiOutlineLoading3Quarters className="text-5xl text-teal-500 animate-spin" />
    </div>
  );
};

export default Loader