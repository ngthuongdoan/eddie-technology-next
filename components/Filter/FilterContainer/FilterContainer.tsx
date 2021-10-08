import React, { useMemo, useState } from 'react';
import { PHONE_FILTERS } from '@common/filters';
import ClassNameProps from '@model/ClassNameProps';
import Button from '@components/UI/Button/Button';
import TheFilter from '../TheFilter/TheFilter';
import { useRouter } from 'next/router';

interface Props {}

const FilterContainer: React.FC<Props & ClassNameProps> = (props): JSX.Element => {
  const criterias = useMemo(() => PHONE_FILTERS, []);
  const [filters, setFilters] = useState({});

  const onFilterChange = (key: string, value: string) => {
    setFilters((pre) => ({ ...pre, [key]: value }));
  };

  const router = useRouter();
  const filter = () => {
    router.push({
      pathname: router.pathname,
      query: { id: router.query.id, ...filters },
    });
  };

  return (
    <div className={`${props.className} mb-5`}>
      <h1 className="font-bold text-black text-xl mb-5">Bộ lọc</h1>
      <div>
        {criterias && (
          <ul className="flex flex-col gap-y-2">
            <TheFilter
              data={criterias.brands!}
              onFilterChange={(value) => onFilterChange('brands', value)}
              label="Thương hiệu"
              key="brand"
            ></TheFilter>

            <TheFilter data={criterias.os!} onFilterChange={(value) => onFilterChange('os', value)} label="Hệ điều hành" key="os"></TheFilter>
          </ul>
        )}
      </div>
      <Button className="bg-primary px-3 py-2 mt-4 text-base text-white font-bold rounded-lg" onClick={filter}>
        Filter
      </Button>
    </div>
  );
};

export default FilterContainer;
