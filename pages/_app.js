// /Users/admin/Desktop/life/pages/_app.js
// import { Analytics } from "@vercel/analytics/react"
import "regenerator-runtime/runtime"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      {/* <Analytics /> */}
    </div>
  )
}

export default MyApp
