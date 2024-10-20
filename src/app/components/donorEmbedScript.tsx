'use client'

import Script from 'next/script'

export default function DonateEmbedScript() {
  return (
    <>
      <Script
        src='https://raisedonorsprod.azureedge.net/embed/embed.js'
        data-rd='fde69dd7-9042-4cb0-9435-90c97728340d'
        data-organizationid='41264'
        strategy='beforeInteractive'
        onLoad={() => console.log('Script loaded')}
        onReady={() => console.log('Script ready')}
      />

    </>
  )
}
