import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../../context/AuthContext"
import { Alert } from "../../../components"
import { Button, Container, Form, Row } from "react-bootstrap"

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

      <Form>
        <Form.Group className="mb-4">
          <Form.Label>
            Email
          </Form.Label>
          <Form.Input
            type="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="youremail@company.tld"
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Password</Form.Label>
          <Form.Input
            type="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="*************"
          />
        </Form.Group>
        <Form.Group>
          <Button 
            onClick={handleSubmit}
            className="btn-dark w-25"
          >
          Registrarse
          </Button>
        </Form.Group>
      </Form>
      <Row>
        <p className="my-4 text-sm flex justify-between px-3">
          ¿Ya tienes una cuenta?
          <Link to="/login" className="text-blue-700 hover:text-blue-900">
            Login
          </Link>
        </p>
      </Row>
    </Container>
  )
}