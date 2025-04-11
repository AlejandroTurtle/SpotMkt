interface CustomButtonProps {
  title: string;
  width?: string;
  height?: string;
  onClick?: () => void;
  submit?: boolean;
}

const CustomButton = ({
  title,
  width = "w-60",
  height = "py-2",
  onClick,
  submit = false,
}: CustomButtonProps) => {
  return (
    <button
      className={`${width} ${height} rounded-lg mt-4 cursor-pointer bg-[#0095F6]`}
      onClick={onClick}
      type={submit ? "submit" : "button"}
    >
      <span className={"text-white"}>{title}</span>
    </button>
  );
};

export default CustomButton;
