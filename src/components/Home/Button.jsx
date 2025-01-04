import "../../index.css";

const Button = (props) => {
  return (
    <button className="  bg-black py-2 px-4 rounded-md text-white font-normal ml-3 text-[24px]">
      {props.children}
    </button>
  );
};

export default Button;
