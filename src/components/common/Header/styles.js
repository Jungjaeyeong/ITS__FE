import styled from 'styled-components'
import colors from 'styles/colors'
import theme from 'styles/fonts'

export const HeaderContainer = styled.div`
	height: 80px;
	color: white;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 14.5%;
	border-bottom: 1px solid ${colors.gray_f1};
	position: sticky;
	top: 0;
	z-index: 11;
	background-color: white;
	.header__menus {
		display: flex;
		gap: 20px;

		a {
			text-decoration: none;
			color: ${colors.gray_77};
			font-size: ${theme.fontSizes.xl};
			font-weight: 500;
			transition: 0.3s;
			&:hover {
				filter: brightness(80%);
			}
			@media ${theme.device.NoteBook} {
				font-size: ${theme.fontSizes.lg};
			}
			@media ${theme.device.tabletL} {
				font-size: ${theme.fontSizes.base};
			}
			@media ${theme.device.mobileL} {
				font-size: ${theme.fontSizes.small};
			}
		}
		.current__page {
			color: ${colors.primary};
			transition: 0.3s;
			&:hover {
				filter: brightness(80%);
			}
		}
	}
	.header__user_btn {
		font-size: ${theme.fontSizes.base};
		border: none;
		background-color: ${colors.primary};
		color: white;
		border-radius: 8px;
		padding: 8px 12px;
		font-family: Noto Sans, Noto Sans KR;
		cursor: pointer;
		transition: 0.3s;
		&:hover {
			filter: brightness(80%);
		}
		@media ${theme.device.NoteBook} {
			font-size: ${theme.fontSizes.small};
		}
		@media ${theme.device.tabletL} {
			font-size: ${theme.fontSizes.xsmall};
		}
		@media ${theme.device.mobileL} {
			font-size: ${theme.fontSizes.xxsmall};
		}
	}
`
