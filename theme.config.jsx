import { useRouter } from 'next/router'

export default {
    project: {
        link: 'https://github.com/ut-ras/robomaster'
    },
    logo: 
        <svg 
            height = "65"
            viewBox="0 0 1000 1000"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M739.51,534.32c-2.38-48.97-10.37-89.33-23.75-119.93-10.93-24.99-25.54-43.66-43.43-55.48-39.63-26.2-84.42-11.72-93-8.55-1.81.67-3.53,1.13-5.26,1.4-20.22,3.2-36.84-.88-49.39-12.12-23.82-21.35-27-64.04-25.47-96.1.27-5.63-2.61-10.48-7.71-12.97-5.06-2.47-10.61-1.76-14.84,1.89-27.71,23.87-39.99,72.03-49.32,115.3-9.84,45.59-7.37,75.86,7.53,92.55,14.05,15.73,40.7,21.04,83.89,16.72,4.13-.41,7.8,2.6,8.21,6.72.41,4.12-2.59,7.8-6.72,8.21-48.37,4.84-79.05-2.04-96.57-21.66-16.62-18.61-21.13-48.79-13.67-92.01-22.39,10.51-39.9,11.29-52.15,2.28-19.35-14.23-22.88-51.06-10.49-109.46,1.52-7.17-2.39-12.27-6.55-14.66-4.21-2.42-10.67-3.22-16.16,1.77-22.21,20.21-44.61,54.14-58.45,88.57-15.6,38.81-18.77,73.02-8.93,96.34,11.23,26.58,39.33,38.7,83.52,36,10.05-.61,19.49,3.98,25.24,12.29,5.76,8.32,6.75,18.78,2.64,27.99-23.38,52.4-103.81,138.97-137.31,173.76-3.27,3.4-4.58,8.11-3.49,12.59,7.46,30.75,50.36,81.27,106.66,109.27,3.02,1.5,6.51,1.8,9.82.84,41.87-12.18,146.3-73.79,177.31-92.38,4.52-2.71,9.64-4.06,14.75-4.06,5.59,0,11.17,1.61,15.97,4.82l158.47,105.93c3.83,2.56,8.47,3.04,12.73,1.32,4.27-1.72,7.29-5.28,8.28-9.78,15.89-71.93,7.73-265.46,7.64-267.41ZM698.5,688.5c-11.03,0-20-8.97-20-20,0-1.03.08-2.05.23-3.04l-90.86-41.64c-3-1.38-4.75-4.55-4.31-7.82l5.32-39.42-52.61-25.13-37.61,21.1c-1.71.96-3.72,1.21-5.61.7l-41.37-11.07-76.42,52.98c-2.88,2-6.75,1.73-9.33-.63-2.58-2.36-3.19-6.19-1.47-9.24l37.5-66.14c1.68-2.97,5.16-4.43,8.46-3.55l83.55,22.35,38.34-21.51c2.13-1.19,4.7-1.28,6.9-.23l61.05,29.16c2.94,1.4,4.63,4.54,4.2,7.77l-5.3,39.33,87.32,40.02c3.35-2.52,7.51-4.02,12.01-4.02,11.03,0,20,8.97,20,20s-8.97,20-20,20Z"/>
        </svg>,
    useNextSeoProps() {
        const { asPath } = useRouter()
        if (asPath !== '/') {
          return {
            titleTemplate: '%s - Stampede Docs'
          }
        }
    },
    primaryHue: 27,
    primarySaturation: 85,
    docsRepositoryBase: 'https://github.com/eddieliao/robomaster_docs/tree/main/',
    feedback: {
        content: null
    },
    head: (
        <>
            <link rel="icon" href="/favicon.svg?" type="image/svg+xml" />
            <link rel="icon" href="/favicon.png?" type="image/png" />
        </>
    ),
    footer: {
        text: (
          <span>
            Stampede © {new Date().getFullYear()}
          </span>
        )
    }
    // ... other theme options
}