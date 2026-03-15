import { useState } from 'react'
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts'
import Card from '../../components/ui/Card'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import Badge from '../../components/ui/Badge'

const bookingTrends = [
  { month: 'Jan', bookings: 120, revenue: 24000 },
  { month: 'Feb', bookings: 145, revenue: 29000 },
  { month: 'Mar', bookings: 189, revenue: 37800 },
  { month: 'Apr', bookings: 234, revenue: 46800 },
  { month: 'May', bookings: 278, revenue: 55600 },
  { month: 'Jun', bookings: 312, revenue: 62400 },
]

const destinationPopularity = [
  { name: 'Bali', visits: 450, growth: 12 },
  { name: 'Paris', visits: 380, growth: 8 },
  { name: 'Tokyo', visits: 320, growth: 15 },
  { name: 'Dubai', visits: 290, growth: 20 },
  { name: 'New York', visits: 260, growth: 5 },
]

const travelCategories = [
  { name: 'Adventure', value: 35, color: '#8B5CF6' },
  { name: 'Beach', value: 28, color: '#3B82F6' },
  { name: 'Cultural', value: 22, color: '#10B981' },
  { name: 'City', value: 15, color: '#F59E0B' },
]

const userDemographics = [
  { age: '18-24', users: 120 },
  { age: '25-34', users: 280 },
  { age: '35-44', users: 220 },
  { age: '45-54', users: 150 },
  { age: '55+', users: 80 },
]

const seasonalTrends = [
  { season: 'Winter', bookings: 180, avgSpend: 3200 },
  { season: 'Spring', bookings: 340, avgSpend: 4500 },
  { season: 'Summer', bookings: 420, avgSpend: 5200 },
  { season: 'Fall', bookings: 290, avgSpend: 3800 },
]

export default function AnalyticsDashboard() {
  const [timeRange, setTimeRange] = useState('6months')
  const [selectedMetric, setSelectedMetric] = useState('bookings')

  return (
    <Container>
      <Section
        title="Travel Analytics Dashboard"
        subtitle="Comprehensive insights into travel trends and user behavior"
      >
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Total Bookings</h3>
              <Badge className="bg-green-100 text-green-800">+23%</Badge>
            </div>
            <p className="text-2xl font-bold">1,278</p>
            <p className="text-sm text-gray-500 mt-1">Last 30 days</p>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Revenue</h3>
              <Badge className="bg-green-100 text-green-800">+18%</Badge>
            </div>
            <p className="text-2xl font-bold">$255.6K</p>
            <p className="text-sm text-gray-500 mt-1">Last 30 days</p>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Active Users</h3>
              <Badge className="bg-blue-100 text-blue-800">+31%</Badge>
            </div>
            <p className="text-2xl font-bold">8,492</p>
            <p className="text-sm text-gray-500 mt-1">Currently active</p>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Avg. Trip Value</h3>
              <Badge className="bg-purple-100 text-purple-800">+12%</Badge>
            </div>
            <p className="text-2xl font-bold">$4,280</p>
            <p className="text-sm text-gray-500 mt-1">Per booking</p>
          </Card>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Booking Trends */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Booking Trends</h3>
              <select 
                value={timeRange}
                onChange={e => setTimeRange(e.target.value)}
                className="text-sm border rounded px-2 py-1"
              >
                <option value="3months">3 Months</option>
                <option value="6months">6 Months</option>
                <option value="1year">1 Year</option>
              </select>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={bookingTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area 
                  type="monotone" 
                  dataKey="bookings" 
                  stroke="#8B5CF6" 
                  fill="#8B5CF6" 
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </Card>

          {/* Destination Popularity */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-6">Top Destinations</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={destinationPopularity}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="visits" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          {/* Travel Categories */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-6">Travel Categories</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={travelCategories}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {travelCategories.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              {travelCategories.map(cat => (
                <div key={cat.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }}></div>
                  <span className="text-sm">{cat.name}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* User Demographics */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-6">User Demographics</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={userDemographics}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="age" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="users" stroke="#10B981" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Seasonal Insights */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-6">Seasonal Travel Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-medium mb-4">Bookings by Season</h4>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={seasonalTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="season" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="bookings" fill="#F59E0B" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div>
              <h4 className="font-medium mb-4">Average Spend by Season</h4>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={seasonalTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="season" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="avgSpend" stroke="#EF4444" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Card>

        {/* AI Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600">🎯</span>
              </div>
              <h3 className="font-semibold">AI Prediction</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">Summer bookings expected to increase by 35%</p>
            <Badge variant="secondary">High Confidence</Badge>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600">💡</span>
              </div>
              <h3 className="font-semibold">Recommendation</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">Focus marketing on adventure travel segments</p>
            <Badge variant="secondary">Action Required</Badge>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600">📈</span>
              </div>
              <h3 className="font-semibold">Growth Opportunity</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">Luxury travel segment showing 45% YoY growth</p>
            <Badge variant="secondary">Emerging Trend</Badge>
          </Card>
        </div>
      </Section>
    </Container>
  )
}
