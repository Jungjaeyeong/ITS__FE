import AuthModal from 'components/modal/AuthModal'
import useModal from 'hooks/useModal'
import { HeaderContainer } from './Header.styled'
import Logo from './Logo'

const Header = () => {
	const { ModalPortal, onCloseModal, onOpenModal } = useModal()

	return (
		<>
			<HeaderContainer>
				<Logo />
				<button onClick={onOpenModal} className="header__button">
					로그인 | 회원가입
				</button>
			</HeaderContainer>
			<ModalPortal>
				<AuthModal onCloseModal={onCloseModal} />
			</ModalPortal>
		</>
	)
}

export default Header
