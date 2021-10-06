import React, { useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import queryString from 'query-string';
import NoValue from '@components/Common/NoValue/NoValue';
import Loading from '@components/UI/LoadingOverlay/LoadingOverlay';
import useFetch from '@hooks/use-fetch';
import Product from '@model/Product';
import { getAllProductsWithCategory } from '@services/product.service';
import ProductList from '@components/Product/ProductList/ProductList';
import { RootState } from '@model/ReduxType';
import { PhoneFilters } from '@model/Filter';
import FilterContainer from '@components/Filter/FilterContainer/FilterContainer';
import { useRouter } from 'next/router';

interface Props {}

const CategoryPage: React.FC<Props> = (props): JSX.Element => {
  const isLoading = useSelector<RootState>((state) => state.loading.isLoading);
  const router = useRouter();
  console.log('🚀 ----------------------------------------------');
  console.log('🚀 ~ file: index.tsx ~ line 20 ~ router', router);
  console.log('🚀 ----------------------------------------------');
  const query = router.query;
  const { id, brands, colors, os, page } = query;
  const { data: products } = useFetch<Product[]>(
    useCallback(() => getAllProductsWithCategory(id as string, { brands, colors, os } as PhoneFilters), [id, brands, colors, os])
  );

  const onPageChange = (current: number) => {
    router.push(`${router.pathname}?${queryString.stringify({ brands, colors, os, page: current })}`);
  };

  return (
    <>
      {isLoading && <Loading></Loading>}
      {!isLoading && (
        <div className="w-full min-h-screen py-10 bg-white">
          <FilterContainer className="px-10 mb-10"></FilterContainer>
          <hr className="w-full bg-background h-5" />
          {products && (products as Product[]).length !== 0 ? (
            <ProductList onPageChange={onPageChange} currentPage={!page ? 1 : +page} products={products as Product[]}></ProductList>
          ) : (
            <NoValue>Không có sản phẩm</NoValue>
          )}
        </div>
      )}
    </>
  );
};

export default CategoryPage;
