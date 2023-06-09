import React, { useState } from "react";
import { fakeDataHandler } from "../../../utils/fakeDataHandler";
import { carrouselPagination } from "../../../utils/pagnationHandler";
import style from "./style.module.scss";
import jansport from "../../../assets/images/backpacks/jansport.svg";
import jansport2 from "../../../assets/images/backpacks/jansport2.svg";
import BackpackCard from "./BackpackCard";
import ArrowPagination from "../../../components/Pagination/ArrowPagination";

const Backpacks = () => {
  const products = fakeDataHandler();
  const [currentPage, setCurrentPage] = useState(1);
  const data = carrouselPagination(products, "mobile", currentPage);
  return (
    <div className={style.jansportContainer}>
      <div className={style.jansportImages}>
        <div className={style.jansportImage}>
          <img src={jansport} alt="jp" />
        </div>
        <img className={style.jansportImage2} src={jansport2} alt="jp" />
      </div>
      <div className={style.jansportBottomWrapper}>
        {data.currentProducts.map((product, i) => (
          <BackpackCard product={product} key={i} />
        ))}
        <ArrowPagination
          currentPage={currentPage}
          totalPages={data.totalPages}
          onPageChange={(page) => setCurrentPage(page)}
          reverse={true}
        />
      </div>
    </div>
  );
};

export default Backpacks;
