export const PREDICTION_SUMMARY = [
  {
    id: 'prediction',
    label: 'Prediction',
    value: '178',
    unit: 'AQI',
    status: { text: 'Deteriorating', tone: 'critical' },
    caption: 'Peak expected at +24 hours',
    icon: 'trending',
  },
  {
    id: 'confidence',
    label: 'Confidence',
    value: '92',
    unit: '%',
    status: { text: 'Stable', tone: 'good' },
    caption: 'Model agreement across runs',
    icon: 'gauge',
  },
  {
    id: 'risk-level',
    label: 'Risk Level',
    value: 'High',
    status: { text: 'Action advised', tone: 'critical' },
    caption: 'Sensitive groups affected',
    icon: 'alerts',
  },
]

export const FORECAST_SERIES = [
  { point: 'Now', aqi: 156 },
  { point: '+6 Hours', aqi: 162 },
  { point: '+12 Hours', aqi: 170 },
  { point: '+18 Hours', aqi: 175 },
  { point: '+24 Hours', aqi: 178 },
]

export const MODEL_FACTORS = [
  { id: 'trend', label: 'Historical AQI Trend', value: 'Rising', icon: 'trend' },
  { id: 'pm25', label: 'PM2.5 Concentration', value: '84 µg/m³', icon: 'particles' },
  { id: 'humidity', label: 'Humidity', value: '61%', icon: 'humidity' },
  { id: 'wind', label: 'Wind Conditions', value: '12 km/h', icon: 'wind' },
]

export const AI_ASSESSMENT =
  'Based on historical AQI trends, PM2.5 concentration, humidity, and wind conditions, the AI model predicts a continued increase in pollution levels over the next 24 hours. Preventive mitigation measures are recommended.'

export const RECOMMENDATIONS = [
  'Restrict construction dust emissions',
  'Increase roadside water sprinkling',
  'Issue health advisory for sensitive groups',
]
