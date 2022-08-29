import React, { useEffect, useState } from 'react'
import { Modal, useModal } from 'components/Modal'
import legaldisclaimer from '../../images/legaldisclaimer.png'

const DisclaimerModal: React.FC = () => {
  const [presentDisclaimerModal] = useModal(
    <Modal title="Legal Disclaimer">
      <div className="disclaimer-legal">
        <div className="d-flex justify-content-center py-3">
          <img src={legaldisclaimer} alt="..." className="legal-disclaimer-img" />
        </div>
        <p className="text-center px-3 h5">Legal Disclaimer</p>
        <p className="text-center px-3" style={{ fontSize: '14px' }}>
          The properties offers have the best profitability conditions and the lowest risk. All this through the
          guarantee of being under the supervision of an ESI as stipulated in article 35.2 of the Securities Market Law.
        </p>
      </div>
    </Modal>,
    true,
  )

  const [modalActive, setModalActive] = useState(false)
  useEffect(() => {
    if (!modalActive) {
      presentDisclaimerModal()
      setModalActive(true)
    }
  }, [presentDisclaimerModal, modalActive])

  return null
}

export default DisclaimerModal
