import { createBrowserRouter, Navigate } from 'react-router-dom'
import AppLayout from '../components/AppLayout'
import Dashboard from '../pages/Dashboard'
import AiPrediction from '../pages/AiPrediction'
import AlertManagement from '../pages/AlertManagement'
import Reports from '../pages/Reports'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'ai-prediction', element: <AiPrediction /> },
      { path: 'alert-management', element: <AlertManagement /> },
      { path: 'reports', element: <Reports /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
])
