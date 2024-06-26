import { Line, Text } from '@/components/shared';
import { TextareaField } from '@/components/post';
import { ChangeEvent } from 'react';
import { ArticleDetail } from '@/types';
import getCategoryName from '@/utils/getCategoryName';

import * as S from './styles';

type DescriptonForm = Pick<ArticleDetail, 'category' | 'title' | 'content' | 'condition'>;

type DescriptionBoxProps = {
  page: 'post' | 'detail';
  onChange?: (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
} & DescriptonForm;

const DescriptionBox = (props: DescriptionBoxProps) => {
  return <S.Container>{renderComponent(props)}</S.Container>;
};

// 조건에 따라 컴포넌트를 랜더링 함 (detail과 post 두가지 page에서 모두 사용 가능)
const renderComponent = ({
  page,
  category,
  title,
  content,
  condition,
  onChange,
}: DescriptionBoxProps) => {
  switch (page) {
    case 'detail':
      return (
        <>
          <Text typography="t2">{`${getCategoryName(category)} > ${title}`}</Text>
          <S.DetailContentBox>
            <Text typography="t3" bold="bold">
              {title}
            </Text>
            <textarea readOnly={true} value={content} />
            <Line />
            <textarea readOnly={true} value={condition} />
          </S.DetailContentBox>
        </>
      );
    case 'post':
      return (
        <S.PostContentBox>
          <S.Title
            type="text"
            placeholder="제목을 입력해주세요"
            name="title"
            value={title}
            onChange={onChange as (event: ChangeEvent<HTMLInputElement>) => void}
          />
          <TextareaField
            label="본문 내용"
            name="content"
            value={content}
            onChange={onChange as (event: ChangeEvent<HTMLTextAreaElement>) => void}
          />
          <Line />
          <TextareaField
            label="조건 내용"
            name="condition"
            value={condition}
            onChange={onChange as (event: ChangeEvent<HTMLTextAreaElement>) => void}
          />
        </S.PostContentBox>
      );
  }
};

export default DescriptionBox;
