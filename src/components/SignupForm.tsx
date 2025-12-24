import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

interface AuthFormProps {
  authOnclick: () => void;
}

export default function SignupForm({ authOnclick }: AuthFormProps) {
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
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                className="bg-custom-accent-secondary"
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="name">Отображаемое имя</FieldLabel>
              <Input
                className="bg-custom-accent-secondary"
                id="name"
                type="text"
                placeholder="John Doe"
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="name">Имя пользователя</FieldLabel>
              <Input
                className="bg-custom-accent-secondary"
                id="name"
                type="text"
                placeholder="John Doe"
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Пароль</FieldLabel>
              <Input
                className="bg-custom-accent-secondary"
                id="password"
                type="password"
                required
              />
            </Field>
            <FieldGroup>
              <Field>
                <Button
                  className="bg-custom-accent hover:bg-custom-accent/90 text-white cursor-pointer"
                  type="submit"
                >
                  Создать учетную запись
                </Button>
                <FieldDescription className="px-6 text-center">
                  Уже есть аккаунт?
                  <button
                    className="text-custom-accent ml-2 cursor-pointer"
                    type="button"
                    onClick={authOnclick}
                  >
                    Войти
                  </button>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
