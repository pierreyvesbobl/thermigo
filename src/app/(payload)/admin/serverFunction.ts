'use server'

import { handleServerFunctions } from '@payloadcms/next/layouts'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const serverFunction: any = async (args: any) => {
  'use server'
  return handleServerFunctions(args)
}
