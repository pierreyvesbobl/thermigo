/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import type { Metadata } from 'next'
import config from '@payload-config'
import { RootLayout } from '@payloadcms/next/layouts'
import { importMap } from './admin/importMap'
import { serverFunction } from './admin/serverFunction'
import '@payloadcms/next/css'
import React from 'react'

export const metadata: Metadata = {
  title: 'Thermigo CMS',
}

type Args = {
  children: React.ReactNode
}

const Layout = ({ children }: Args) => (
  <RootLayout config={config} importMap={importMap} serverFunction={serverFunction}>
    {children}
  </RootLayout>
)

export default Layout
