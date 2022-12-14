import styled from 'styled-components';

interface ContentsProps {
  children?: React.ReactNode;
}

export default function ContentsArea({ children }: ContentsProps) {
  return <ContentsWrapper>{children}</ContentsWrapper>;
}

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => ` 0 ${theme.margin} 0 ${theme.margin}`};
`;
