export default function App() {
  return (
    <>
      <header className="bg-slate-800">
        <div className="mx-auto max-w-6xl py-6">
          <h1 className="text-4xl font-extrabold text-white">
            Administrador de Productos
          </h1>
        </div>
      </header>
      <main className="mt-10 mx-auto max-w-6xl p-10 bg-white shadow rounded-xl">
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-3xl font-bold text-black">Registrar producto</h2>
          <button className="mt-4 bg-purple-600 hover:bg-purpuple-700 text-white font-bold py-2 px-4 rounded">
            Ver lista de Productos
          </button>
        </div>
        <form className="flex flex-col">
          <div className="flex flex-col gap-3 mt-2">
            <label
              htmlFor="nombre"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nombre del producto
            </label>
            <input
              id="nombre"
              name="nombre"
              placeholder="Introduce el nombre del producto aqui"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <label
              htmlFor="precio"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Precio
            </label>
            <input
              type="text"
              id="precio"
              name="precio"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Introduce el precio del producto"
            />
          </div>
          <button
            type="submit"
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Registrar
          </button>
        </form>
      </main>
    </>
  );
}
