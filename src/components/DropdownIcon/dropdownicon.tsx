import React from 'react'
import { Dropdown } from 'react-bootstrap'
import {
  FacebookShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookIcon,
  TelegramIcon,
  WhatsappIcon,
  LinkedinIcon,
  TwitterIcon,
} from 'react-share'
import styled from 'styled-components'

const StyledDropdown = styled(Dropdown)`
  position: absolute;
  top: 10px;
  right: 20px;
  color: #cacad4;
  background-color: #122e55;
  border: 1px solid #dbbd5a;
  border-radius: 8px;

  @media (max-width: 1023px) {
    top: 10px;
    right: 20px;
  }
  @media (max-width: 767px) {
    top: 10px;
    right: 20px;
  }
`
const StyledDropdownToggle = styled(Dropdown.Toggle)`
  @media (max-width: 1023px) {
    padding: 5px 15px;
  }
  @media (max-width: 767px) {
    padding: 4px 12px;
  }
`
const StyledDropDownAlt = styled.i`
  color: #cacad4;
  font-size: 22px;

  @media (max-width: 1023px) {
    padding: 0px;
    font-size: 20px;
  }
  @media (max-width: 767px) {
    padding: 0px;
    font-size: 15px;
  }
`
const StyledDropdownMenu = styled(Dropdown.Menu)`
  background: none;
  border: none;
`
const StyledDropdownItem = styled.div`
  padding: 0px 0px 3px 0px;
  display: flex;
  justify-content: flex-end;

  &:hover {
    background: none;
  }
`

interface HomeDropdownIconProps {
  title?: string
  text?: string
  hashtags?: string[]
}

const HomeDropdownIcon: React.FC<HomeDropdownIconProps> = ({ title, text, hashtags }) => {
  const page = `https://marketplace.omni-psi.com${window.location.pathname}`
  const fullText = `${title}${title && text ? ' - ' : ''}${text}`
  return (
    <div>
      <StyledDropdown>
        <StyledDropdownToggle>
          <StyledDropDownAlt className="fal fa-share-alt mt-1" />
        </StyledDropdownToggle>
        <StyledDropdownMenu>
          <StyledDropdownItem className="dropdown-item">
            <FacebookShareButton url={page} quote={text} hashtag={hashtags ? hashtags[0] : null}>
              <FacebookIcon size={22} round />
            </FacebookShareButton>
          </StyledDropdownItem>
          <StyledDropdownItem className="dropdown-item">
            <TelegramShareButton url={page} title={title}>
              <TelegramIcon size={22} round />
            </TelegramShareButton>
          </StyledDropdownItem>
          <StyledDropdownItem className="dropdown-item">
            <WhatsappShareButton url={page} title={title}>
              <WhatsappIcon size={22} round />
            </WhatsappShareButton>
          </StyledDropdownItem>
          <StyledDropdownItem className="dropdown-item">
            <LinkedinShareButton url={page} title={title} summary={text} source="OMNI Real Estate">
              <LinkedinIcon size={22} round />
            </LinkedinShareButton>
          </StyledDropdownItem>
          <StyledDropdownItem className="dropdown-item">
            <TwitterShareButton url={page} title={fullText} hashtags={hashtags}>
              <TwitterIcon size={22} round />
            </TwitterShareButton>
          </StyledDropdownItem>
        </StyledDropdownMenu>
      </StyledDropdown>
    </div>
  )
}

export default HomeDropdownIcon
