import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../../context/AuthContext"
import { Alert } from "../../../components"
import { Container, Form, Button } from "react-bootstrap"

export function Register() {
  const { signup } = useAuth()

  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    try {
      await signup(user.email, user.password)
      navigate("/")
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <Container className="my-3 w-50 align-items-center">
      {error && <Alert message={error} />}

      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-4">
          <Form.Label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </Form.Label>
          <Form.Control
            type="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="youremail@company.tld"
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="*************"
          />
        </Form.Group>

        <Button className="btn-dark w-25" type="submit">
          Registrar
        </Button>
      </Form>
      <p className="my-4 text-sm flex justify-between px-3">
        ¿Ya tienes una cuenta?
        <Link to="/login" className="text-blue-700 hover:text-blue-900">
          Login
        </Link>
      </p>
    </Container>
  )
}