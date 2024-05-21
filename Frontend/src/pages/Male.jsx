import { useState, useEffect } from "react";
import { datas } from "../Api"; // Assuming datas includes gender information
import Cards from "../components/Cards";

export default function Male() {
  const [data, setData] = useState(datas);
  const [searchTerm, setSearchTerm] = useState("");

  function onSearch(e) {
    const value = e.target.value;
    setSearchTerm(value);
  }

  useEffect(() => {
    const filterData = () => {
      let filteredData = datas.filter((item) => item.gender === "male");

      // Filter by search term
      if (searchTerm !== "") {
        filteredData = filteredData.filter((item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      setData(filteredData);
    };

    const delay = 600;
    let timer = setTimeout(filterData, delay);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  function valueChange(e) {
    const value = e.target.value;

    if (value === "High-To_Low") {
      setData(
        data
          .slice()
          .sort(
            (a, b) =>
              (b.salePrice || b.originalPrice) -
              (a.salePrice || a.originalPrice)
          )
      );
    }

    if (value === "Low-To-High") {
      setData(
        data
          .slice()
          .sort(
            (a, b) =>
              (a.salePrice || a.originalPrice) -
              (b.salePrice || b.originalPrice)
          )
      );
    }

    if (value === "Ratings") {
      setData(data.slice().sort((a, b) => b.rating - a.rating));
    }
  }

  return (
    <>
      <div className="products-container section-spacing">
        <div className="max-width">
          <div className="row">
            <h1 className="title">Male Products</h1>
            <div className="filter-items">
              <select id="select" defaultValue="default" onChange={valueChange}>
                <option value="default" disabled>
                  Sort By
                </option>
                <option value="High-To_Low">High-To-Low</option>
                <option value="Low-To-High">Low-To-High</option>
                <option value="Ratings">Ratings</option>
              </select>
              <input
                type="search"
                className="search"
                placeholder=" Search Items Here"
                onChange={onSearch}
              ></input>
            </div>
          </div>

          {data.length === 0 ? (
            <div className="grid">
              <p>No matching result</p>
            </div>
          ) : (
            <div className="grid">
              {data.map((data) => (
                <Cards key={data.id} items={data} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
