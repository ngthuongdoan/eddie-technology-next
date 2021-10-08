import React from 'react';
import NoValue from '@components/Common/NoValue/NoValue';
import Product from '@model/Product';
import { getAllProductsWithCategory } from '@services/product.service';
import ProductList from '@components/Product/ProductList/ProductList';
import { PhoneFilters } from '@model/Filter';
import FilterContainer from '@components/Filter/FilterContainer/FilterContainer';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { serialize } from '@utils/serializeAsJson';

interface Props {
  products: Product[];
  query: PhoneFilters & { page: number };
}

const CategoryPage: React.FC<Props> = ({ products, query }): JSX.Element => {
  const { brands, colors, os, page } = query;
  const router = useRouter();
  const onPageChange = (current: number) => {
    router.push({
      pathname: router.pathname,
      query: { id: router.query.id, brands, colors, os, page: current },
    });
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const query = ctx.query!;
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
