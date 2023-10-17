import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import CategoriesPreview from "../Categories-preview/categories-preview.component";
import Category from "../Category/category.component";
import { getCategoriesAndDocuments } from "../../Utils/Firebase/firebase.utils";
import { setCategoriesMap } from "../../Store/Categories/category.action";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      dispatch(setCategoriesMap(categoryMap));
    };
    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
