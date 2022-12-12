
const ToggleButton = ({children, className, onClick}) => {
    return (
        <button
            className={`p-1 rounded-xl hover:scale-110 duration-300 h-[25px] w-[25px] mt-[-2px] ${className}`}
        onClick={onClick
        }>{children}</button>
    );
};

export default ToggleButton;