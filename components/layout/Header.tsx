import { theme } from '../theme'

export const Header = () => {
  return (
    <div className="root">
      <div className="label">Tea</div>
      <style jsx>{`
        .root {
          display: flex;
          align-items: center;
          height: 56px;
          background-color: ${theme.color.primary};
        }
        .label {
          color: ${theme.font.inverted};
          padding: 10px;
          font-size: 1.5rem;
        }
      `}</style>
    </div>
  )
}
