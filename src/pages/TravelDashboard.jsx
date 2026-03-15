import { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import Card from '../components/ui/Card'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'

const destinationData = [
  { name: 'Paris', visits: 2400 },
  { name: 'Tokyo', visits: 1398 },
  { name: 'New York', visits: 9800 },
  { name: 'London', visits: 3908 },
  { name: 'Dubai', visits: 4800 },
]

const categoryData = [
  { name: 'Beach', value: 400, color: '#3B82F6' },
  { name: 'Mountain', value: 300, color: '#10B981' },
  { name: 'City', value: 300, color: '#F59E0B' },
  { name: 'Adventure', value: 200, color: '#EF4444' },
]

const budgetData = [
  { range: '0-10k', count: 45 },
  { range: '10-25k', count: 38 },
  { range: '25-50k', count: 52 },
  { range: '50k+', count: 31 },
]

export default function TravelDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState('month')

  return (
    <Container>
      <Section
        title="Travel Intelligence Dashboard"
        subtitle="Analytics and insights for your travel business"
      >
        {/* KPI CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <h3 className="text-sm font-medium text-gray-600">Total Bookings</h3>
            <p className="text-2xl font-bold mt-2">1,284</p>
            <p className="text-sm text-green-600 mt-1">+12% from last month</p>
          </Card>
          <Card className="p-6">
            <h3 className="text-sm font-medium text-gray-600">Revenue</h3>
            <p className="text-2xl font-bold mt-2">₹2.4M</p>
            <p className="text-sm text-green-600 mt-1">+8% from last month</p>
          </Card>
          <Card className="p-6">
            <h3 className="text-sm font-medium text-gray-600">Active Users</h3>
            <p className="text-2xl font-bold mt-2">8,492</p>
            <p className="text-sm text-green-600 mt-1">+23% from last month</p>
          </Card>
          <Card className="p-6">
            <h3 className="text-sm font-medium text-gray-600">Avg. Trip Value</h3>
            <p className="text-2xl font-bold mt-2">₹18,750</p>
            <p className="text-sm text-red-600 mt-1">-3% from last month</p>
          </Card>
        </div>

        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Popular Destinations</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={destinationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="visits" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Travel Categories</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-wrap gap-2 mt-4">
              {categoryData.map(cat => (
                <div key={cat.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }}></div>
                  <span className="text-sm">{cat.name}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Budget Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={budgetData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="range" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#10B981" />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Seasonal Trends</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Winter (Dec-Feb)</span>
                <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
                <span className="text-sm font-medium">65%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Spring (Mar-May)</span>
                <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <span className="text-sm font-medium">85%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Summer (Jun-Aug)</span>
                <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
                <span className="text-sm font-medium">95%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Fall (Sep-Nov)</span>
                <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <span className="text-sm font-medium">75%</span>
              </div>
            </div>
          </Card>
        </div>
      </Section>
    </Container>
  )
}
