export function Button1({ href, text, onClick }) {
  //state

  //comportements

  //affichage
  return (
    <a href={`/#${href}`}>
      <button
      className={`min-w-[80px] bg-purple-500 p-2 rounded-md flex justify-center items-center drop-shadow-md text-white border-2 border-purple-500
      hover:bg-pruple-600 hover:drop-shadow-sm hover:border-purple-600
      active:bg-white active:border-2 active:border-purple-600 active:text-purple-600`}
      onClick={onClick}
    >
      {text}
      </button>
    </a>
  );
}
