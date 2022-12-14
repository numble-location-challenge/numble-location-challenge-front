import styled from 'styled-components'
import { IoAddOutline, IoChevronBack } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

interface I_Header_Prop {
  tabName: string
  isBack?: boolean
  isAdd?: boolean
  isAddFunc?: () => void
}

export default function Header({ tabName, isBack = false, isAdd, isAddFunc }: I_Header_Prop) {
  const navigate = useNavigate()

  return (
    <HeaderWrap>
      <TempLogo />
      {isBack ? (
        <BackTab>
          <IoChevronBack onClick={() => navigate(-1)} size={22} />
          <TabName>{tabName}</TabName>
        </BackTab>
      ) : (
        <TabName>{tabName}</TabName>
      )}
      {isAdd && (
        <AddSocialBtn onClick={() => navigate('/social/create')}>
          <IoAddOutline size={22} />
        </AddSocialBtn>
      )}
    </HeaderWrap>
  )
}

const HeaderWrap = styled.header`
  width: 100%;
  height: 85px;
  padding: 12px 16px;
  display: flex;
  flex-flow: column;
  border-bottom: 1px solid #d7d7d7;
  position: fixed;
  top: 0;
  max-width: 720px;
  background-color: white;
`

const TempLogo = styled.div`
  width: 100%;
  height: 36px;
`

const TabName = styled.div`
  font-weight: 700;
  font-size: 17px;
  line-height: 25px;
  color: #242424;
`

const BackTab = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    position: absolute;
    left: 5px;
    cursor: pointer;
  }
`

const AddSocialBtn = styled.button`
  position: absolute;
  cursor: pointer;
  border: none;
  background-color: white;
  top: 50px;
  right: 10px;
  z-index: 20;
`
