export const SUMMARY_CARDS = [
  {
    id: 'current-aqi',
    label: 'Current AQI',
    value: '156',
    status: { text: 'Moderate', tone: 'warning' },
    caption: 'National composite index',
    icon: 'gauge',
  },
  {
    id: 'tomorrow-prediction',
    label: 'Tomorrow Prediction',
    value: '178',
    status: { text: 'High Risk', tone: 'critical' },
    caption: 'Model forecast · 24 hours',
    icon: 'trending',
  },
  {
    id: 'monitoring-stations',
    label: 'Monitoring Stations',
    value: '42',
    status: { text: 'Active', tone: 'good' },
    caption: 'Reporting in last 60 minutes',
    icon: 'stations',
  },
  {
    id: 'active-alerts',
    label: 'Active Alerts',
    value: '3',
    status: { text: 'Open', tone: 'serious' },
    caption: 'Awaiting field response',
    icon: 'alerts',
  },
]

export const AQI_TREND = [
  { day: 'Mon', aqi: 142 },
  { day: 'Tue', aqi: 149 },
  { day: 'Wed', aqi: 155 },
  { day: 'Thu', aqi: 151 },
  { day: 'Fri', aqi: 156 },
  { day: 'Sat', aqi: 163 },
  { day: 'Sun', aqi: 178 },
]

export const RECENT_ALERTS = [
  { location: 'Anand Vihar', aqi: 198, severity: 'High', status: 'Active' },
  { location: 'Okhla', aqi: 182, severity: 'High', status: 'Monitoring' },
  { location: 'Rohini', aqi: 165, severity: 'Moderate', status: 'Active' },
]

export const POLLUTANT_BREAKDOWN = [
  { name: 'PM2.5', value: 52, color: '#005BAC' },
  { name: 'PM10', value: 24, color: '#009D9A' },
  { name: 'NO₂', value: 14, color: '#B26500' },
  { name: 'O₃', value: 10, color: '#6929C4' },
]

export const WEATHER_SNAPSHOT = [
  { id: 'temperature', label: 'Temperature', value: '34°C', icon: 'temperature' },
  { id: 'humidity', label: 'Humidity', value: '61%', icon: 'humidity' },
  { id: 'wind', label: 'Wind Speed', value: '12 km/h', icon: 'wind' },
]

export const AI_RECOMMENDATION =
  'Air quality is expected to deteriorate over the next 24 hours. Recommend restricting construction dust emissions, increasing roadside water sprinkling, and issuing public health advisories for vulnerable groups.'

export const LAST_UPDATED = 'Today • 09:30 AM'
