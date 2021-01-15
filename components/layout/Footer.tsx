import { theme } from '../theme'

export const Footer = () => {
  return (
    <div className="root">
      <style jsx>{`
        .root {
          height: 56px;
          background-color: ${theme.color.primary};
        }
      `}</style>
    </div>
  )
}
