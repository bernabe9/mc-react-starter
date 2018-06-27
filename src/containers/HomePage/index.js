import React, { PureComponent } from 'react'
import { RoundedBox } from 'mc-components'

import Logo from '../../components/common/Logo'

class HomePage extends PureComponent {
  render () {
    return (
      <div className='home-page'>
        <Logo />
        <RoundedBox
          header='MasterClass React Starter'
          subheader='Welcome'
        >
          <p>Welcome to MasterClass React Starter</p>
        </RoundedBox>
      </div>
    )
  }
}

export default HomePage
