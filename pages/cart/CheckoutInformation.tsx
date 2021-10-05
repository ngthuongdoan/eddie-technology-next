import Button from '@components/UI/Button/Button';
import { Cart } from '@model/Cart';
import ClassNameProps from '@model/ClassNameProps';
import { toCurrency } from '@utils/index';
import React from 'react';
import { useRouter } from 'next/router';

interface Props {
  cart: Cart;
  isCheckout?: boolean;
}

const defaultProps = {
  isCheckout: false,
};

const CheckoutInformation: React.FC<Props & ClassNameProps> = (props): JSX.Element => {
  const history = useHistory();
  const checkout = () => {
    history.push('/checkout');
  };
  return (
    <div className={`rounded-none shadow-lg py-3 px-10 ${props.className}`}>
      <div className="my-3">
        {props.cart.products.map((product) => (
          <div key={product.id} className="text-sm font-normal flex w-full">
            <p className="flex-grow">{product.name}</p>
            <p className="justify-self-end">x{product.amount}</p>
          </div>
        ))}
      </div>
      <hr className="h-0.5 rounded-sm bg-gray-500" />
      <h1 className="font-bold text-lg my-3">
        <span className="text-red-600 mr-3">Tổng cộng :</span>
        {toCurrency(props.cart.total as number)}
      </h1>
      {!props.isCheckout && (
        <Button className="bg-red-700 text-white font-bold text-base w-full py-2" onClick={checkout}>
          Thanh toán
        </Button>
      )}
    </div>
  );
};

CheckoutInformation.defaultProps = defaultProps;
export default CheckoutInformation;
