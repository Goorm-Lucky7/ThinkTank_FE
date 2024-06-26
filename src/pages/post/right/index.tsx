import { useModalContext } from '@/contexts/ModalContext';
import { CodeBox } from '@/components/post';
import { useNavigate } from 'react-router-dom';
import { postFormStore } from '@/stores/post';
import { Icon, StyledButton } from '@/components/shared';
import { postArticle } from '@/apis/article';
import { useState } from 'react';

import * as S from './styles';

const PostRight = () => {
  const navigate = useNavigate();
  const { open } = useModalContext();
  const postForm = postFormStore((state) => state.postForm);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <S.Container>
      <Icon
        value="cancel"
        css={S.IconCss}
        onClick={() =>
          open({
            title: '게시글 작성을 그만두시겠습니까?',
            description: '이전 페이지로 돌아가게 됩니다.',
            onButtonClick: () => navigate(-1),
            hasCancelButton: true,
            buttonLabel: '뒤로가기',
          })
        }
      />
      <CodeBox />
      <StyledButton
        onClick={() =>
          open({
            title: '게시글을 올리겠습니까?',
            onButtonClick: () => {
              setIsLoading(true);
              postArticle(postForm)
                .then(() => navigate('/'))
                .catch((error) => console.log(error))
                .finally(() => setIsLoading(false));
            },
            hasCancelButton: true,
            buttonLabel: '확인',
          })
        }
        css={S.testButton}
        disabled={isLoading}
        size="large"
      >
        Post
      </StyledButton>
    </S.Container>
  );
};

export default PostRight;
