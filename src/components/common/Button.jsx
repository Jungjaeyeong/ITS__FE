import { ButtonContainer } from './Button.styled'

//* fullSize: 너비가 100%로 설정 됩니다.
//* bgColor: 버튼의 색깔을 설정 합니다. (기본 값 primary)
//* color: 글씨 색깔을 설정 합니다. (기본 값 #333)
//* px, py: padding (상하, 좌우)의 값을 설정합니다.
const Button = props => {
	const {
		bgColor = 'primary',
		children,
		color = '#fff',
		fullSize = false,
		px,
		py,
		...btnProps
	} = props

	return (
		<ButtonContainer
			bgColor={bgColor}
			color={color}
			fullSize={fullSize}
			px={px}
			py={py}
			{...btnProps}
		>
			{children}
		</ButtonContainer>
	)
}

export default Button
