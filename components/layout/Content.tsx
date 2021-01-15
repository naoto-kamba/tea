import { ReactNode } from 'react'

export const Content = (props: { children: ReactNode }) => {
  return (
    <div className="root">
      {props.children}
      <style jsx>{`
        .root {
          min-height: 500px;
        }
      `}</style>
    </div>
  )
}
