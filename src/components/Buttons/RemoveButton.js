const RemoveButton = () => {
  return (
    <button className="border-2 h-9 border-l-0 hover:bg-indigo-100  duration-100">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 pr-1 pl-1 h-6 "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
};
export default RemoveButton;
