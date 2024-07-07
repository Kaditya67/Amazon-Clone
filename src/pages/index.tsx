// import Image from "next/image";
// import { Inter } from "next/font/google";
// import Header from "@/components/header/Header";
// import HeaderBottom from "@/components/header/HeaderBottom";
// import Footer from "@/components/Footer";
import Products from "@/components/Products";
import Banner from "@/components/Banner";
import { ProductProps } from "../../type";

interface Props {
  prodData: ProductProps[];
}

export default function Home({ prodData }: Props) {
  console.log(prodData);
  return (
    <main>
      <Banner />
      <Products prodData={prodData} />
    </main>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const prodData: ProductProps[] = await res.json();
  return {
    props: { prodData },
  };
};
