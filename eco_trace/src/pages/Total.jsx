export default function Total() {
	const total = localStorage.getItem('total');

  return (
    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-black-600 md:text-5xl lg:text-6xl dark:text-white">
      Your estimated CO2 trace is ~ <span class="text-gray-400">{total}</span> kg.
    </h1>
  );
}
