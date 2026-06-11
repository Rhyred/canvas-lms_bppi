import React from 'react'
import { render } from '@canvas/react'
import ready from '@instructure/ready'
import App from './src/App'

ready(() => {
  console.log('BPPI Home Page: Initializing...')
  const mountPoint = document.getElementById('home-page-mount')
  if (mountPoint) {
    console.log('BPPI Home Page: Mount point found, rendering...')
    render(<App />, mountPoint)
  } else {
    console.error('BPPI Home Page: Mount point #home-page-mount not found!')
  }
})
