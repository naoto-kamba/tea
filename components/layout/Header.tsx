export const Header = () => {
  const onClickTop = () => {
    location.assign('/')
  }
  return (
    <div className="flex items-center p-2 h-12 border-b">
      <div className="text-2xl text-black cursor-pointer" onClick={onClickTop}>
        Tea-Calc
      </div>
    </div>
  )
}
