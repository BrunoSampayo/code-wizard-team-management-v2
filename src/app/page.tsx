import { LoginForm } from '@/components/auth/login-form'

export default function Home() {
  return (
    <main className=" ">
      <div className="text-custom-orange my-16">
        <h1 className="text-center font-bold text-5xl">
          Code Wizard Team Management
        </h1>
      </div>
      <LoginForm />
    </main>
  )
}
