import Banner from "@/components/Banner";
import React from "react";
import { client } from "@/lib/sanityClient";
import { groq } from "next-sanity";
import NewArrival from "@/components/NewArrival";
import BestSellers from "@/components/BestSellers";

export const revalidate = 10;
const bannerQuery = groq`*[_type == 'banner']{
  image,
  _id
} | order(_createdAt asc)`;

const newArrivalQuery = groq`*[_type == 'product' && position == 'New Arrivals']{
  ...
} | order(_createdAt asc)`;

const bestSellersQuery = groq`*[_type == 'product' && position == 'Bestsellers']{
  ...
 } | order(_createdAt asc)`;

const HomePage = async () => {
  const banners = await client.fetch(bannerQuery);
  const newArrivalProducts = await client.fetch(newArrivalQuery);
  const bestSellersProducts = await client.fetch(bestSellersQuery);
  return (
    <main className="text-sm overflow-hidden min-h-screen">
      <Banner banners={banners} />
      <NewArrival products={newArrivalProducts} />
      <BestSellers products={bestSellersProducts} title="Our Bestsellers" />
    </main>
  );
};

export default HomePage;
