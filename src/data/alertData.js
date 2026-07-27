export const ENVIRONMENTAL_ALERTS = [
  { location: 'Anand Vihar', aqi: 198, severity: 'High', status: 'Active' },
  { location: 'Okhla', aqi: 182, severity: 'High', status: 'Monitoring' },
  { location: 'Rohini', aqi: 165, severity: 'Moderate', status: 'Active' },
  { location: 'Punjabi Bagh', aqi: 171, severity: 'Moderate', status: 'Monitoring' },
]

export const ALERT_SUMMARY = [
  { id: 'active', label: 'Active Alerts', value: '3', badge: 'Requires action', tone: 'critical' },
  { id: 'monitoring', label: 'Monitoring', value: '1', badge: 'Under watch', tone: 'info' },
  { id: 'resolved', label: 'Resolved Today', value: '5', badge: 'Closed', tone: 'good' },
]
