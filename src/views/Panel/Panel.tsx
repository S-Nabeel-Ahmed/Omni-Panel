import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import CreateProperty from './CreateProperty'
import ManageDocuments from './ManageDocuments'

import './Panel.scss'
import '../Detail/Detail.css'
import '../Home/Home.css'

const Panel: React.FC = () => {

  return (
    <div className='panel-page'>
            <Tabs className="panel-page-tabs" defaultActiveKey="Create Property">
              <Tab eventKey="Create Property" title="Create Property">
                <CreateProperty />
              </Tab>
              <Tab eventKey="Manage Documents" title="Manage Documents">
              <ManageDocuments />
                </Tab>
            </Tabs>
    </div>
  )
}

export default Panel
