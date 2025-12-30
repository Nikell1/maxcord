import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Link } from "react-router";
import { ROUTES } from "@/constants/routes";
import { useAuthStore } from "@/store/auth";

export default function RegisterBlock() {
  const signup = useAuthStore((state) => state.signup);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const isFormValid =
    email.length > 3 && password.length > 3 && username.length > 1;

  return (
    <Card className="bg-secondary">
      <CardHeader>
        <CardTitle className="text-center text-xl">
          Создать учетную запись
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <FieldGroup>
            <Field>
              <FieldLabel
                className="after:content-['*'] after:text-destructive"
                htmlFor="email"
              >
                Email
              </FieldLabel>
              <Input
                className="bg-custom-accent-secondary"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                type="email"
                placeholder="m@example.com"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="name">Отображаемое имя</FieldLabel>
              <Input
                className="bg-custom-accent-secondary"
                type="text"
                placeholder="John Doe"
              />
            </Field>
            <Field>
              <FieldLabel
                className="after:content-['*'] after:text-destructive"
                htmlFor="name"
              >
                Имя пользователя
              </FieldLabel>
              <Input
                className="bg-custom-accent-secondary"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="John Doe"
              />
            </Field>
            <Field>
              <FieldLabel
                className="after:content-['*'] after:text-destructive"
                htmlFor="password"
              >
                Пароль
              </FieldLabel>
              <Input
                className="bg-custom-accent-secondary"
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Field>
            <FieldGroup>
              <Field>
                <Button
                  className="bg-custom-accent hover:bg-custom-accent/90 text-white cursor-pointer"
                  type="submit"
                  disabled={!isFormValid}
                  onClick={() => signup()}
                >
                  Создать учетную запись
                </Button>
                <FieldDescription className="px-6 text-center">
                  Уже есть аккаунт?
                  <Link
                    to={ROUTES.LOGIN}
                    className="text-custom-accent ml-2 cursor-pointer "
                  >
                    Войти
                  </Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
