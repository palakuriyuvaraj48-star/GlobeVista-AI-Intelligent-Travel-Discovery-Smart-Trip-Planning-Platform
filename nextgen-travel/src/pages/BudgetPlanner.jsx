import { useState, useMemo } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { jsPDF } from 'jspdf'
import Card from '../components/Card'
import { calculateBudget } from '../utils/budgetCalculator'

ChartJS.register(ArcElement, Tooltip, Legend)

const defaultValues = { days: 5, hotelCost: 5000, mealsPerDay: 2000, transport: 1000, activities: 3000 }

export default function BudgetPlanner() {
  const [days, setDays] = useState(defaultValues.days)
  const [hotelCost, setHotelCost] = useState(defaultValues.hotelCost)
  const [mealsPerDay, setMealsPerDay] = useState(defaultValues.mealsPerDay)
  const [transport, setTransport] = useState(defaultValues.transport)
  const [activities, setActivities] = useState(defaultValues.activities)

  const result = useMemo(
    () => calculateBudget({ days, hotelCost, mealsPerDay, transport, activities }),
    [days, hotelCost, mealsPerDay, transport, activities]
  )

  const chartData = {
    labels: result.breakdown.map((b) => b.label),
    datasets: [
      {
        data: result.breakdown.map((b) => b.value),
        backgroundColor: result.breakdown.map((b) => b.color),
        borderWidth: 0,
      },
    ],
  }

  const overBudget = result.total > 100000

  const downloadPDF = () => {
    const doc = new jsPDF()
    doc.setFontSize(18)
    doc.text('Budget Planner - NextGen Travel Explorer', 20, 20)
    doc.setFontSize(12)
    doc.text(`Trip duration: ${days} days`, 20, 35)
    doc.text(`Hotel total: ₹${result.totalHotel.toLocaleString()}`, 20, 45)
    doc.text(`Meals total: ₹${result.totalMeals.toLocaleString()}`, 20, 55)
    doc.text(`Transport total: ₹${result.totalTransport.toLocaleString()}`, 20, 65)
    doc.text(`Activities total: ₹${result.totalActivities.toLocaleString()}`, 20, 75)
    doc.text(`Total: ₹${result.total.toLocaleString()}`, 20, 90)
    doc.text(`Daily average: ₹${result.daily.toLocaleString()}`, 20, 100)
    if (overBudget) doc.text('Warning: Total exceeds ₹1,00,000', 20, 115)
    doc.save('budget-planner.pdf')
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">Budget Planner</h1>
        <p className="text-slate-600 mt-1">Days, hotel, meals, transport, activities</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6">
          <h2 className="font-semibold text-slate-800 mb-4">Inputs</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Days</label>
              <input
                type="number"
                min={1}
                value={days}
                onChange={(e) => setDays(Number(e.target.value) || 1)}
                className="w-full rounded-xl border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Hotel cost per night (₹)</label>
              <input
                type="number"
                min={0}
                value={hotelCost}
                onChange={(e) => setHotelCost(Number(e.target.value) || 0)}
                className="w-full rounded-xl border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Meals per day (₹)</label>
              <input
                type="number"
                min={0}
                value={mealsPerDay}
                onChange={(e) => setMealsPerDay(Number(e.target.value) || 0)}
                className="w-full rounded-xl border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Transport per day (₹)</label>
              <input
                type="number"
                min={0}
                value={transport}
                onChange={(e) => setTransport(Number(e.target.value) || 0)}
                className="w-full rounded-xl border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Activities per day (₹)</label>
              <input
                type="number"
                min={0}
                value={activities}
                onChange={(e) => setActivities(Number(e.target.value) || 0)}
                className="w-full rounded-xl border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
        </Card>

        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="font-semibold text-slate-800 mb-4">Outputs</h2>
            <p className="text-2xl font-bold text-indigo-600">Total: ₹{result.total.toLocaleString()}</p>
            <p className="text-slate-600 mt-2">Daily breakdown: ₹{result.daily.toLocaleString()}/day</p>
            <ul className="mt-4 space-y-1 text-sm text-slate-600">
              <li>Hotel: ₹{result.totalHotel.toLocaleString()}</li>
              <li>Meals: ₹{result.totalMeals.toLocaleString()}</li>
              <li>Transport: ₹{result.totalTransport.toLocaleString()}</li>
              <li>Activities: ₹{result.totalActivities.toLocaleString()}</li>
            </ul>
            {overBudget && (
              <p className="mt-4 px-4 py-2 rounded-xl bg-amber-100 text-amber-800 font-medium">
                Warning: Total exceeds ₹1,00,000
              </p>
            )}
            <button
              type="button"
              onClick={downloadPDF}
              className="mt-4 w-full py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-medium hover:opacity-90 transition"
            >
              Download PDF
            </button>
          </Card>
          <Card className="p-6">
            <h2 className="font-semibold text-slate-800 mb-4">Cost breakdown</h2>
            <div className="h-64">
              <Pie data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
