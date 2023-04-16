const CompletedButton = () => {
  return (
    <button className="border-2 h-9 hover:bg-indigo-100 duration-100">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 pr-1 pl-1 "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l6 6 9-13.5"
        />
      </svg>
    </button>
  );
};
export default CompletedButton;
