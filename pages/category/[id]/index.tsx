import React from 'react';
import { useSelector } from 'react-redux';
import queryString from 'query-string';
import NoValue from '@components/Common/NoValue/NoValue';
import Product from '@model/Product';
import { getAllProductsWithCategory } from '@services/product.service';
import ProductList from '@components/Product/ProductList/ProductList';
import { PhoneFilters } from '@model/Filter';
import FilterContainer from '@components/Filter/FilterContainer/FilterContainer';
import { useRouter } from 'next/router';
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next';
import { getAllCategory } from '@services/category.service';
import { serialize } from '@utils/serializeAsJson';

interface Props {
  products: Product[];
  query: PhoneFilters & { page: number };
}

const CategoryPage: React.FC<Props> = ({ products, query }): JSX.Element => {
  const { brands, colors, os, page } = query;
  const router = useRouter();
  const onPageChange = (current: number) => {
    router.push(`${router.pathname}?${queryString.stringify({ brands, colors, os, page: current })}`);
  };

  return (
    <>
      <div className="w-full min-h-screen py-10 bg-white">
        <FilterContainer className="px-10 mb-10"></FilterContainer>
        <hr className="w-full bg-background h-5" />
        {products && (products as Product[]).length !== 0 ? (
          <ProductList onPageChange={onPageChange} currentPage={!page ? 1 : +page} products={products as Product[]}></ProductList>
        ) : (
          <NoValue>Không có sản phẩm</NoValue>
        )}
      </div>
    </>
  );
};
// export const getStaticPaths: GetStaticPaths = async (ctx) => {
//   const categories = await getAllCategory();
//   const paths = categories.map((c) => ({ params: { id: c.id } }));

//   return {
//     fallback: 'blocking',
//     paths,
//   };
// };

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const query = ctx.query!;
  console.log('🚀 ------------------------------------------------------------------------------------');
  console.log('🚀 ~ file: index.tsx ~ line 53 ~ constgetStaticProps:GetStaticProps= ~ params', ctx);
  console.log('🚀 ------------------------------------------------------------------------------------');
  const products = await getAllProductsWithCategory(query.id as string, { brands: query.brands, colors: query.color, os: query.os } as PhoneFilters);
  if (!products) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      products: serialize(products),
      query,
    },
  };
};

export default CategoryPage;
