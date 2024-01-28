/** @ type {import('next').NextConfig} */
/*const nextConfig = {}
module.exports = nextConfig*/
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = async (phase, { defaultConfig }) => {
    /**
     * @type {import('next').NextConfig}
     */
    const nextConfig = {
      /* config options here */
    }
    return nextConfig
}
