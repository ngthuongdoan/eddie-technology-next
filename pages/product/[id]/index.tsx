import React from 'react';
import Product from '@model/Product';
import { getAllProducts, getProduct } from '@services/product.service';
import ProductDescription from '@components/Product/ProductDescription/ProductDescription';
import ProductOverview from '@components/Product/ProductOverview/ProductOverview';
import ProductSpecification from '@components/Product/ProductSpecification/ProductSpecification';
import { GetStaticPaths, GetStaticProps } from 'next';
import { serialize } from '@utils/serializeAsJson';

interface Props {
  product: Product;
}
const ProductDetail: React.FC<Props> = ({ product }): JSX.Element => {
  return (
    <>
      <div className="bg-white mx-14 my-5 p-10 rounded-lg shadow-lg">
        <ProductOverview product={product as Product} />
        <div className="flex items-start justify-start gap-10">
          <ProductDescription product={product as Product}></ProductDescription>
          <ProductSpecification product={product as Product}></ProductSpecification>
        </div>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await getAllProducts();
  const paths = products.map((p) => ({
    params: {
      id: p.id,
    },
  }));

  return {
    fallback: 'blocking',
    paths,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const id = ctx.params!.id;
  const product = await getProduct(id as string);

  return {
    props: {
      product: serialize(product),
    },
  };
};

export default ProductDetail;
