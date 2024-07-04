'use client'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { Button } from '../ui/button'

interface CardWrapperProps {
  children: React.ReactNode
  headerLabel: string
  backButtonLabel: string
  backButtonHref: string
}
export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
}: CardWrapperProps) => {
  return (
    <Card className="bg-custom-gray w-2/6 max-w-[700px] border-none text-custom-white mx-auto py-14 px-14 ">
      <CardHeader>
        <CardTitle className="text-center text-4xl">{headerLabel}</CardTitle>
      </CardHeader>
      <CardContent className="mt-8 pb-0">{children}</CardContent>
      <CardFooter className="">
        <Button
          className="text-custom-white   font-semibold"
          variant="link"
          asChild
        >
          <Link href={backButtonHref}>{backButtonLabel}</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
