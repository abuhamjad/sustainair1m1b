export const REPORT_CARDS = [
  {
    id: 'daily-aqi',
    title: 'Daily AQI Report',
    description: 'Daily summary of monitored air quality across all stations.',
    meta: '27 Jul 2026',
    icon: 'daily',
  },
  {
    id: 'weekly-trend',
    title: 'Weekly Trend Analysis',
    description: 'Weekly AQI trend and pollutant comparison.',
    meta: 'Week 30 • 2026',
    icon: 'weekly',
  },
  {
    id: 'hotspot',
    title: 'Pollution Hotspot Assessment',
    description: 'Locations with consistently high pollution.',
    meta: 'Generated Today',
    icon: 'hotspot',
  },
  {
    id: 'ai-summary',
    title: 'AI Prediction Summary',
    description: '24-hour forecast generated using AI.',
    meta: 'Confidence: 92%',
    icon: 'ai',
  },
]

export const HISTORICAL_AQI = [
  { week: 'Week 1', aqi: 132 },
  { week: 'Week 2', aqi: 140 },
  { week: 'Week 3', aqi: 145 },
  { week: 'Week 4', aqi: 156 },
]

export const ABOUT_PROTOTYPE =
  'SustainAir is a frontend demonstration illustrating how artificial intelligence can support environmental authorities through air quality monitoring, forecasting, and decision support. All information displayed in this prototype uses static mock data.'
