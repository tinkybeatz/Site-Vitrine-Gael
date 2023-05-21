export function FirstBlock({ deploy }) {
  //state

  //comportements

  //affichage
  return (
    <div class="pt-4">
      <div class="grid grid-cols-2 place-items-center rounded-md bg-gray-100 transition-all duration-500 text-black dark:text-white dark:bg-zinc-600">
        <img src={deploy.image} alt="image" class="col-span-1" />
        <div class="col-span-1 bg-red-600 px-10 text-center">{deploy.text}</div>
      </div>
    </div>
  );
}
