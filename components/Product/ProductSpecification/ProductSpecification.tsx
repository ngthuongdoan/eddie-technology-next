import React from 'react';
import { ProductProps } from '@model/Product';
import Specifications from '@model/Specifications';
import shortid from 'shortid';

const ProductSpecification: React.FC<ProductProps> = ({ product }): JSX.Element => {
  return (
    <div>
      <h1 className="font-bold text-2xl mb-8">Thông số cấu hình</h1>
      <table className="specifications">
        {product.specifications.map((globalSpec) => (
          <>
            <thead key={shortid.generate()}>
              <tr className="header ">
                <th colSpan={2}>{globalSpec.title}</th>
              </tr>
            </thead>
            <tbody>
              {(globalSpec.value as Specifications[]).map((specs) => (
                <tr key={shortid.generate()}>
                  <th>{specs.title}</th>
                  <td>
                    <ul>
                      {specs.value.map((s) => (
                        <li key={shortid.generate()}>{s}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </>
        ))}
      </table>
    </div>
  );
};

export default ProductSpecification;
