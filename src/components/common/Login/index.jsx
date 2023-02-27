import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { Alert } from "../../../components";
import { Button, Container, Form, Row } from "react-bootstrap";

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, loginWithGoogle, resetPassword } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!user.email) return setError("Escriba un correo electrónico para restablecer la contraseña");
    try {
      await resetPassword(user.email);
      setError('Te enviamos un correo electrónico. Revisa tu correo')
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Container className="my-3 w-75">
      {error && <Alert message={error} />}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            placeholder="algo@unmail.com"
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            placeholder="*************"
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Row>
            <Button type="submit">
              Iniciar Sesión
            </Button>
            <Button onClick={handleResetPassword}>
              ¿Has olvidado tu contraseña?
            </Button>
        </Row>
        <Row>
          <Button onClick={handleGoogleSignin}>
            Google login
          </Button>
        </Row>

      <p className="my-4 text-sm flex justify-between px-3">
      ¿No tienes una cuenta?
        <Link to="/register" className="text-blue-700 hover:text-blue-900">
          Registro
        </Link>
      </p>
      </Form>
    </Container>
  );
}