import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Filter() {
    const [searchParams,setsearchParams] = useSearchParams()
    const initGenerecParams = searchParams.getAll('genre')
    const initshortParams = searchParams.getAll('sort')
    const [category, setCategory] = useState( initGenerecParams || []);
    const [sort,setSort] = useState(initshortParams || '')

  const HandleChange = (e) => {
    const option = e.target.value;

    let newCategory = [...category];

    if (category.includes(option)) {
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      newCategory.push(option);
    }
    setCategory(newCategory);
  };

  const handelsortby = (e) => {
   setSort(e.target.value)
  }

  useEffect(()=>{
    if(category || sort){
        setsearchParams({genre: category, sort: sort})
    }
  },[category,sort])

  
  return (
    <div>
      <h2>Filter</h2>
      <div>
        <div>
          <input
            type="checkbox"
            value="K-Pop"
            onChange={HandleChange}
            defaultChecked={category.includes("K-Pop")}
          />
          <label>K-Pop</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Country"
            onChange={HandleChange}
            defaultChecked={category.includes("Country")}
          />
          <label>Country</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Pop"
            onChange={HandleChange}
            defaultChecked={category.includes("Pop")}
          />
          <label>Pop</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Holiday"
            onChange={HandleChange}
            defaultChecked={category.includes("Holiday")}
          />
          <label>Holiday</label>
        </div>
        <div>
          <input
            type="checkbox"
            defaultChecked={category.includes("Heavy Metal")}
            value="Heavy Metal"
            onChange={HandleChange}
          />
          <label>Heavy Metal</label>
        </div>
      </div>

        <h2>Sort</h2>
    <div onChange={handelsortby}> 
        <div>
            <input defaultChecked={sort === 'asc'} type="radio" name="sort" value='asc'/>
            <label >Ascending</label>
        </div>
        <div>
            <input defaultChecked={sort === 'asc'} type="radio" name="sort" value='desc' />
            <label >Decending</label>
        </div>
    </div>

    </div>
  );
}
