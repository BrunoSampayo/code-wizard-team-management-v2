'use client'
import { LoginSchema } from '@/schemas/login-schema'
import { CardWrapper } from './card-wrapper'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

export const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    console.log(values)
  }
  return (
    <CardWrapper
      headerLabel="Bem Vindo"
      backButtonLabel="Ainda não possui conta? Cadastre-se "
      backButtonHref="/"
    >
      <div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6  mx-auto  "
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="text-black  font-semibold rounded-2xl border-none bg-custom-slateWhite/90"
                      placeholder="E-mail"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      className="text-black font-semibold rounded-2xl border-none bg-custom-slateWhite/90"
                      placeholder="Senha"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              variant="default"
              type="submit"
              className="w-full  font-bold rounded-2xl"
            >
              Login
            </Button>
          </form>
        </Form>
        <Button
          className="text-custom-white mt-2  font-semibold"
          variant="link"
          asChild
        >
          <Link href="">Esqueceu sua senha ?</Link>
        </Button>
      </div>
    </CardWrapper>
  )
}
