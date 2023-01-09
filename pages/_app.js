import 'styles/globals.css'
import Layout from 'components/layout'

function MyApp({ Component, pagePros }) {
  return (
    <Layout>
      <Component {...pagePros} />
    </Layout>
  )
}

export default MyApp
