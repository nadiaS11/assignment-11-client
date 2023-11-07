import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Banner from "./../components/Banner";

import FoodCard from "../components/FoodCard";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import { Button, Spinner, button } from "@material-tailwind/react";
import GetAllfoods from "../utils/GetAllfoods";

const Menu = () => {
  const allFoods = GetAllfoods();
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState(null);
  const [seePaginations, setSeePaginations] = useState(true);
  const myAxios = useAxios();
  const getMenuItems = async () => {
    const res = await myAxios.get(
      `/foods/pages?page=${currentPage}&limit=${itemsPerPage}`
    );
    return res;
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["foods", currentPage, itemsPerPage],
    queryFn: getMenuItems,
  });

  const totalFoods = data?.data?.total;
  const totalPages = Math.ceil(totalFoods / itemsPerPage);

  const handleSelect = (e) => {
    setItemsPerPage(e.target.value);
    setCurrentPage(1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const [foods, setFoods] = useState(allFoods ? allFoods : []);

  useEffect(() => {
    setFoods(data?.data?.result);
  }, [data?.data?.result]);

  const handleSearch = () => {
    setSeePaginations(false);
    const lowerSearch = search.toLowerCase();
    const filtered = allFoods.filter(
      (food) =>
        food.foodname.toLowerCase().includes(lowerSearch) ||
        food.foodcategory.toLowerCase().includes(lowerSearch)
    );
    setFoods(filtered);
  };

  const handleReset = () => {
    setFoods(data?.data?.result);
    setSeePaginations(true);
  };

  if (isLoading) {
    return (
      <div className="mt-40 text-center  ">
        Loading...
        {/* <Spinner className="h-16 w-16 text-gray-900/50 mx-auto " /> */}
      </div>
    );
  }
  if (isError) {
    return <div className="mt-40">Something went wrong {error}</div>;
  }

  return (
    <div>
      <Banner handleSearch={handleSearch} setSearch={setSearch}>
        <img
          src="https://i.ibb.co/4JmBBHY/photo-1543353071-10c8ba85a904-auto-format-fit-crop-q-60-blend-000000-blend-alpha-10-blend-mode-norma.jpg"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
      </Banner>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto mt-10">
        {foods?.map((food) => (
          <FoodCard key={food._id} food={food}></FoodCard>
        ))}
      </div>

      {!seePaginations ? (
        <div className="text-center my-10">
          <Button onClick={handleReset} variant="gradient" size="md">
            Reset
          </Button>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-center gap-2 text-white mx-auto font-medium my-10">
            <button
              onClick={handlePrevious}
              className="px-4 py-2  bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300   rounded-md "
            >
              {`<`}
            </button>
            {Array(totalPages)
              .fill(0)
              .map((page, index) => {
                const pageNumber = index + 1;
                return (
                  <button
                    onClick={() => setCurrentPage(pageNumber)}
                    key={pageNumber}
                    className={`px-4 py-2  ${
                      pageNumber === currentPage ? "bg-gray-500" : "bg-gray-800"
                    } hover:bg-gray-900 focus:outline-none focus:ring-4 focus:bg-gray-500 rounded-md`}
                  >
                    {pageNumber}
                  </button>
                );
              })}
            <button
              onClick={handleNext}
              className="px-4 py-2  bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300   rounded-md"
            >
              {`>`}
            </button>
            <select
              onClick={handleSelect}
              className="px-4 border-blue-gray-900 border-2 py-2 rounded-md text-black "
            >
              Items
              <option value="9">9</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>
        </>
      )}
    </div>
  );
};

Menu.propTypes = {};

export default Menu;
