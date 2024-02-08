import { useRouter } from 'next/router'

export default {
    logo: <span>Stampede Docs</span>,
    docsRepositoryBase: 'https://github.com/eddieliao/robomaster_docs',
    project: {
      link: 'https://github.com/ut-ras/robomaster'
    },
    useNextSeoProps() {
        const { asPath } = useRouter()
        if (asPath !== '/') {
          return {
            titleTemplate: '%s – Stampede Docs'
          }
        }
    }
    // ... other theme options
}