import { createApp } from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg component

// register globally
createApp({}).component('SvgIcon', SvgIcon)

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)