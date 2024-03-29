import styled from 'styled-components';
import back from '../styles/assets/back.svg';

interface HeaderProps {
  title: string;
  onClickBack: React.MouseEventHandler<HTMLButtonElement>;
  isAdd?: boolean;
  onAdd?: React.MouseEventHandler;
}

export default function HeaderWithBack({ title, onClickBack, isAdd, onAdd }: HeaderProps) {
  return (
    <HeaderWrapper>
      <ButtonWrapper>
        <BackButton onClick={onClickBack}>
          <img src={back} alt="back" />
        </BackButton>
      </ButtonWrapper>
      <Text>{title}</Text>
      {isAdd ? <Complete onClick={onAdd}>완료</Complete> : null}
    </HeaderWrapper>
  );
}

export const HeaderWrapper = styled.header`
  height: 85px;
  width: 100%;
  max-width: 720px;
  padding: ${({ theme }) => `0 ${theme.margin} 12px ${theme.margin}`};
  display: flex;
  align-items: flex-end;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  position: fixed;
  top: 0;
  background-color: white;
  z-index: 1;
`;

export const ButtonWrapper = styled.div`
  position: relative;
`;

export const BackButton = styled.button`
  background-color: inherit;
  margin-bottom: 4px;
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 500%;
    height: 200%;
  }
`;

export const Text = styled.span`
  font-weight: 700;
  font-size: 1.7rem;
  line-height: 2.5rem;
  margin: 0 auto;
`;

const Complete = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 17px;
  line-height: 25px;
  cursor: pointer;
`;
