import React from 'react'
import styled from 'styled-components'
import Heading from '../Heading/Heading'
import Flex from '../Box/Flex'
import { ArrowBackIcon, CloseIcon } from '../Svg'
import { IconButton } from '../Button'
import { InjectedProps } from './types'

interface Props extends InjectedProps {
  title: string
  hideCloseButton?: boolean
  onBack?: () => void
  bodyPadding?: string
}

const StyledModal = styled.div`
  background: ${({ theme }) => theme.modal.background};
  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 32px;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndices.modal};
  overflow-y: auto;
  ${({ theme }) => theme.mediaQueries.xs} {
    width: auto;
    min-width: 360px;
    max-width: 100%;
  }
`

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e9eaeb;
  align-items: center;
  padding: 12px 24px;
`

const ModalTitle = styled(Flex)`
  align-items: center;
  flex: 1;
`

const Modal: React.FC<Props> = ({
  title,
  onDismiss,
  onBack,
  children,
  hideCloseButton = false,
  bodyPadding = '24px',
}) => (
  <StyledModal>
    <ModalHeader>
      <ModalTitle>
        {onBack && (
          <IconButton variant="text" onClick={onBack} area-label="go back" mr="8px">
            <ArrowBackIcon color="white" />
          </IconButton>
        )}
        <Heading className="mb-0 text-white">{title}</Heading>
      </ModalTitle>
      {!hideCloseButton && (
        <IconButton variant="text" onClick={onDismiss} aria-label="Close the dialog">
          <CloseIcon color="white" />
        </IconButton>
      )}
    </ModalHeader>
    <Flex flexDirection="column" p={bodyPadding}>
      {children}
    </Flex>
  </StyledModal>
)

export default Modal
