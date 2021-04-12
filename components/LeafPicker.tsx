type LeafPickerProps = {
  onClick: (value: number) => void
}
export const LeafPicker = ({ onClick }: LeafPickerProps) => {
  const onClickA = () => {
    onClick(2.75)
  }
  const onClickB = () => {
    onClick(3.25)
  }
  return (
    <div>
      推奨茶葉量(g)
      <div>
        <button onClick={onClickA}>2.5g~3.0g</button>
      </div>
      <div>
        <button onClick={onClickB}>3.0g~3.5g</button>
      </div>
    </div>
  )
}
