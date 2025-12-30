import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { ROUTES } from "@/constants/routes";
import { useAuthStore } from "@/store/auth";
import { useState } from "react";
import { Link } from "react-router";

export default function LoginBlock() {
  const login = useAuthStore((state) => state.login);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = email.length > 3 && password.length > 3;

  return (
    <div className="flex flex-col gap-6">
      <Card className="bg-secondary">
        <CardHeader>
          <CardTitle className="text-xl text-center">С возвращением!</CardTitle>
          <CardDescription className="text-center">
            Мы так рады видеть вас снова!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
              <Field>
                <FieldLabel
                  className="after:content-['*'] after:text-destructive"
                  htmlFor="email"
                >
                  Адрес электронной почты или номер телефона
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
                <div className="flex items-center">
                  <FieldLabel
                    className="after:content-['*'] after:text-destructive"
                    htmlFor="password"
                  >
                    Пароль
                  </FieldLabel>
                  <span className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                    Забыли пароль?
                  </span>
                </div>
                <Input
                  className="bg-custom-accent-secondary"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  type="password"
                />
              </Field>
              <Field>
                <Button
                  className="bg-custom-accent hover:bg-custom-accent/90 text-white cursor-pointer"
                  type="submit"
                  onClick={() => login()}
                  disabled={!isFormValid}
                >
                  Войти
                </Button>
                <FieldDescription className="text-center">
                  Нужна учетная запись?
                  <Link
                    to={ROUTES.REG}
                    className="text-custom-accent ml-2 cursor-pointer"
                  >
                    Зарегистрироваться
                  </Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
