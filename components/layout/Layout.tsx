import { ReactNode } from 'react'
import { Content } from './Content'
import { Footer } from './Footer'
import { Header } from './Header'

export const Layout = (props: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <Content>{props.children}</Content>
      <Footer />
    </div>
  )
}
