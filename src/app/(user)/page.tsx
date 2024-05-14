import Banner from "@/components/Banner";
import React from "react";
import { client } from "@/lib/sanityClient";
import { groq } from "next-sanity";

export const revalidate = 10;
const bannerQuery = groq`*[_type == 'banner']{
  image,
  _id
} | order(_createdAt asc)`;

const HomePage = async () => {
  const banners = await client.fetch(bannerQuery);
  return (
    <div>
      <Banner banners={banners} />
    </div>
  );
};

export default HomePage;
