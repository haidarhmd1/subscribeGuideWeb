interface IPrimaryButton {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const PrimaryButton = ({ children, onClick }: IPrimaryButton) => {
  return (
    <button
      onClick={onClick}
      className="text-xs py-2 px-2 text-white rounded-md border-0 font-medium bg-blue-400 hover:bg-blue-200 transition-all min-w-[125px]"
    >
      {children}
    </button>
  );
};

export const SecondaryButton = ({ children, onClick }: IPrimaryButton) => {
  return (
    <button
      onClick={onClick}
      className="text-xs py-2 px-2 text-gray-400 rounded-md border-0 font-medium bg-gray-100 hover:bg-gray-200 transition-all min-w-[125px]"
    >
      {children}
    </button>
  );
};
