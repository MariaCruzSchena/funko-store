import React, { useState } from "react";
import { carrouselPagination } from "../../../utils/pagnationHandler";
import creditcard from "../../../assets/images/ui/creditcard.svg";
import truck from "../../../assets/images/ui/truck.svg";
import motorcycle from "../../../assets/images/ui/motorcycle.svg";
import CarrouselCard from "../../../components/Cards/CarrouselCard/CarrouselCard";

const ShippingCarrousel = () => {
  const products = [
    {
      img: creditcard,
      title: "12 y 18 Cuotas",
      subtitle: "¡sin interés!",
    },
    { img: truck, title: "Evío gratis", subtitle: "En todas las compras" },
    {
      img: motorcycle,
      title: "Te llega en 24hs",
      subtitle: "Con costo adicional",
      imgName: "motorcycle",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const data = carrouselPagination(products, "mobile", currentPage);

  return (
    <CarrouselCard
      array={data.currentProducts}
      kind="shipping"
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      totalPages={data.totalPages}
    />
  );
};

export default ShippingCarrousel;
