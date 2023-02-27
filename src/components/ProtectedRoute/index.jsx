import { Navigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import { Spinner } from "../common"

export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()

  if (loading) return <Spinner/>

  if (!user) return <Navigate to="/login" />

  return <>{children}</>
}