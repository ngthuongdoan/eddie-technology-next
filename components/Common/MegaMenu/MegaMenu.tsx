import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Category from '@model/Category';
import ClassNameProps from '@model/ClassNameProps';
import { RootState } from '@model/ReduxType';

interface Props {}

const MegaMenu: React.FC<Props & ClassNameProps> = (props): JSX.Element => {
  const categories = useSelector<RootState>((state) => state.cached.category) as Category[];

  const router = useRouter();
  const to = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, category: Category, brand: string = '') => {
    e.preventDefault();
    const url = `/category/${category.id}`;
    if (brand !== '') {
      router.push(`${url}?brands=${brand}`);
    } else {
      router.push(url);
    }
  };

  return (
    <div className={`${props.className} absolute mega-menu`}>
      <div className="main-menu">
        <ul>
          {categories &&
            categories.map((category) => (
              <div key={category.id}>
                <li className="menu-item">
                  <a className="px-3" onClick={(e) => to(e, category)} aria-hidden="true">
                    {category.icon && <FontAwesomeIcon className="justify-self-center w-4 mr-2" icon={category.icon} size="lg" />}
                    <span>{category.label}</span>
                  </a>
                  {category.brands.length !== 0 && (
                    <ul className="sub-menu">
                      {category.brands.map((brand, index) => (
                        <li key={index} aria-hidden="true">
                          <a onClick={(e) => to(e, category, brand)} aria-hidden="true">
                            {brand}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </div>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default React.memo(MegaMenu);
