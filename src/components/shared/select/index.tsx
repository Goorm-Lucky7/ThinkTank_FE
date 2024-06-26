import { MouseEvent, useState } from 'react';
import { CategoryOption, CategoryValues } from '@/consts/category';

import * as S from './styles';

interface CategoryProps<T extends CategoryOption> {
  optionData: T[];
  defaultValue?: boolean;
  type?: 'primary' | 'fill';
  onChange?: (value: string) => void;
}

const Select = <T extends CategoryOption>({
  optionData,
  type = 'primary',
  onChange,
  defaultValue = false,
}: CategoryProps<T>) => {
  const [isExpand, setIsExpand] = useState<boolean>(false);
  const [selected, setSelected] = useState<CategoryValues>(
    optionData[defaultValue ? 1 : 0].value,
  );

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsExpand((prev) => !prev);
  };
  return (
    <S.Container onBlur={() => setIsExpand(false)} onMouseDown={handleMouseDown}>
      <S.Select
        name="select"
        type={type}
        value={selected}
        onChange={(e) => {
          const value = e.target.value as CategoryValues;
          setSelected(value);
        }}
      >
        {optionData.length > 0 &&
          optionData.map(({ value, name }) => (
            <option value={value} key={value}>
              {name}
            </option>
          ))}
      </S.Select>
      <S.SelectIcon
        color="gray400"
        value="arrow"
        $active={false}
        $rotate={!isExpand}
        size={24}
      />
      {isExpand && (
        <S.SelectList>
          {optionData.length > 0 &&
            optionData.map(({ value, name }, index) => {
              if (!index) {
                return;
              }
              return (
                <li
                  value={value}
                  key={value}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    setSelected(value);
                    if (onChange) onChange(value);
                  }}
                >
                  {name}
                </li>
              );
            })}
        </S.SelectList>
      )}
    </S.Container>
  );
};

export default Select;

// click을 blur전에 사용하려고 할 때에는 onMuouseDown을 사용하면 된다.
// blur 이벤트까지 포함해 mouseDown > blur > mouseUp > click 순서로 일어난다.
