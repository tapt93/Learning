import { IRouter, IRouterRenderProps } from 'app/routes/models'
import RouterRender from 'app/routes/RouterRender'
import Header from '../Header'
import Footer from '../Footer'

interface Props extends IRouterRenderProps {
  routers: IRouter[];
}

const MainLayout = ({ routers }: Props) => {
  return (
    <>
      <Header />
      <RouterRender routers={routers} />
      <Footer />
    </>
  )
}

export default MainLayout