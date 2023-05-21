export function Button1({ text, onClick }) {
  //state

  //comportements

  //affichage
  return (
    <button
      className="min-w-[80px] bg-purple-500 p-2 rounded rounded-md flex justify-center items-center drop-shadow-md text-white border border-2 border-purple-500
                           hover:bg-pruple-600 hover:drop-shadow-sm hover:border-purple-600
                           active:bg-white active:border active:border-2 active:border-purple-600 active:text-purple-600"
      href=""
      onClick={onClick}
    >
      {text}
    </button>
  );
}
