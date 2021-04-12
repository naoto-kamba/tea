import { Layout } from '../components/layout/Layout'
import { useRouter } from 'next/dist/client/router'

const CalcResult = () => {
  const router = useRouter()
  const { leaf, hotWater, tea } = router.query
  const leafNum = Number(leaf)
  const hotWaterNum = Number(hotWater)
  const teaNum = Number(tea)
  const ratio = teaNum / hotWaterNum

  return (
    <Layout>
      <div>完成量: {teaNum} ml</div>
      <div>湯: {hotWaterNum * ratio} ml</div>
      <div>葉: {leafNum * ratio} g</div>
    </Layout>
  )
}

export default CalcResult
