const FilterBar = ({ selectedCategory, setSelectedCategory, sortBy, setSortBy }) => {
  const categories = ["men's clothing", "jewelery", "electronics", "women's clothing"];

  return (
    <div className="w-[95%] mx-auto flex flex-col md:flex-row justify-end items-center gap-4 mb-6">
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="dark:text-white border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-teal-500 outline-none ">
        <option className="" value="">
          All Categories
        </option>
        {categories.map((cat) => (
          <option className="dark:text-gray-950" key={cat} value={cat}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </option>
        ))}
      </select>
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="dark:text-white border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-teal-500 outline-none">
        <option className="dark:text-gray-950" value="">
          Default Sort
        </option>
        <option className="dark:text-gray-950" value="priceLow">
          Price: Low to High
        </option>
        <option className="dark:text-gray-950" value="priceHigh">
          Price: High to Low
        </option>
        <option className="dark:text-gray-950" value="rating">
          Rating
        </option>
        <option className="dark:text-gray-950" value="name">
          Name (A-Z)
        </option>
      </select>
    </div>
  );
};

export default FilterBar;
