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

interface AuthFormProps {
  regOnclick: () => void;
}

export default function AuthForm({ regOnclick }: AuthFormProps) {
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
                <FieldLabel htmlFor="email">
                  Адрес электронной почты или номер телефона
                </FieldLabel>
                <Input
                  className="bg-custom-accent-secondary"
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Пароль</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Забыли пароль?
                  </a>
                </div>
                <Input
                  className="bg-custom-accent-secondary"
                  id="password"
                  type="password"
                  required
                />
              </Field>
              <Field>
                <Button
                  className="bg-custom-accent hover:bg-custom-accent/90 text-white cursor-pointer"
                  type="submit"
                >
                  Войти
                </Button>
                <FieldDescription className="text-center">
                  Нужна учетная запись?
                  <button
                    className="text-custom-accent ml-2 cursor-pointer"
                    type="button"
                    onClick={regOnclick}
                  >
                    Зарегистрироваться
                  </button>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
