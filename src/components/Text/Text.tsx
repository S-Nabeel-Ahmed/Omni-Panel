import styled, { css, DefaultTheme } from 'styled-components'
import { space, typography } from 'styled-system'
import getThemeValue from '../../utils/getThemeValue'
import { TextProps } from './types'

interface ThemedProps extends TextProps {
  theme: DefaultTheme
}

const getColor = ({ color, theme }: ThemedProps) => {
  return getThemeValue(`colors.${color}`, color)(theme)
}

const getFontSize = ({ fontSize, small }: TextProps) => {
  return small ? '14px' : fontSize || '16px'
}

export const TextStyle = css`
  color: ${getColor};
  font-size: ${getFontSize};
  font-weight: ${({ bold }) => (bold ? 600 : 400)};
  line-height: 1.5;
  ${({ textTransform }) => textTransform && `text-transform: ${textTransform};`}
  ${space}
  ${typography}
  display: ${({ inline }) => (inline ? 'inline-block' : 'block')}
`

const Text = styled.div<TextProps>`
  ${TextStyle}
`

Text.defaultProps = {
  color: 'text',
  small: false,
}

export default Text
