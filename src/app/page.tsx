import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="bg-gradient-to-tr from-primary/20 to-primary/50 pb-14">
        <Header />
        <div className="container flex justify-between pt-10">
          <div className="flex flex-col justify-center gap-4">
            <h2 className="text-6xl font-bold bg-gradient-to-r from-primary-darker to-primary/80 bg-clip-text text-transparent">
              Welcome to NextCourse
            </h2>
            <div className="w-3/4">
              <p className="text-xl">
                A place to learn Next.js, Tailwind CSS, and Radix UI.
              </p>
            </div>
          </div>
          <Image
            src="/welcome.webp"
            alt="Welcome"
            width={500}
            height={350}
            quality={100}
          />
        </div>
      </div>
      {/* What you will learn */}
      <div className="container py-20">
        <h2 className="text-4xl font-bold mb-8">What you&apos;ll learn</h2>
        <Card>
          <CardContent className="flex pt-6 gap-8">
            <div className="flex gap-6">
              <Image
                src="/nextjs.svg"
                alt="Next.js"
                width={60}
                height={60}
                quality={100}
              />
              <div>
                <h3 className="text-2xl font-bold">Next.js</h3>
                <p>
                  Learn how to build a modern web application using Next.js.
                </p>
              </div>
            </div>
            <Separator orientation="vertical" className="h-20" />
            <div className="flex gap-6">
              <Image
                src="/tailwindcss.svg"
                alt="Tailwind CSS"
                width={70}
                height={70}
                quality={100}
              />
              <div>
                <h3 className="text-2xl font-bold">Tailwind CSS</h3>
                <p>Learn how to style your application using Tailwind CSS.</p>
              </div>
            </div>
            <Separator orientation="vertical" className="h-20" />
            <div className="flex gap-6">
              <Image
                src="/radixui.svg"
                alt="Radix UI"
                width={40}
                height={40}
                quality={100}
              />
              <div>
                <h3 className="text-2xl font-bold">Radix UI</h3>
                <p>Learn how to build accessible components using Radix UI.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Who is this for? */}
      <div className="bg-gradient-to-br from-primary/20 to-primary/50 py-20">
        <div className="container">
          <h2 className="text-4xl font-bold mb-8">Who is this for?</h2>
          <div className="flex gap-8">
            <div className="w-1/2">
              <h3 className="text-2xl font-bold mb-4">For beginners</h3>
              <p>
                If you&apos;re new to web development, this course is for you.
                You&apos;ll learn the basics of Next.js, Tailwind CSS, and Radix
                UI.
              </p>
            </div>
            <div className="w-1/2">
              <h3 className="text-2xl font-bold mb-4">
                For experienced developers
              </h3>
              <p>
                If you&apos;re an experienced developer, this course is for you.
                You&apos;ll learn how to build a modern web application using
                Next.js, Tailwind CSS, and Radix UI.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Courses */}
      <div className="container py-20">
        <h2 className="text-4xl font-bold mb-8">Courses</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Next.js</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Learn how to build a modern web application using Next.js. You
                will learn the basics of Next.js, how to create pages, and how
                to fetch data.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Tailwind CSS</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Learn how to style your application using Tailwind CSS. You will
                learn the basics of Tailwind CSS, how to style your application,
                and how to customize your styles.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Radix UI</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Learn how to build accessible components using Radix UI. You
                will learn the basics of Radix UI, how to create components, and
                how to make them accessible.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      {/* Testimonials */}
      <div className="bg-gradient-to-tr from-primary/20 to-primary/50 py-20">
        <div className="container">
          <h2 className="text-4xl font-bold mb-8">Testimonials</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>John Doe</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  This course is amazing! I learned so much about Next.js,
                  Tailwind CSS, and Radix UI. I highly recommend it to anyone who
                  wants to learn web development.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Jane Doe</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  I&apos;m an experienced developer and I learned a lot from
                  this course. I highly recommend it to anyone who wants to
                  build modern web applications.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>James Doe</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  I&apos;m new to web development and I learned so much from this
                  course. I highly recommend it to anyone who wants to learn web
                  development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      {/* FAQ */}
      <div className="container py-20">
        <h2 className="text-4xl font-bold mb-8">FAQ</h2>
        <div className="grid grid-cols-1 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>How long is this course?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                This course is self-paced. You can take as long as you need to
                complete it.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Is this course free?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Yes, this course is free. You don&apos;t need to pay anything to
                take it.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Do I need to know web development?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                No, you don&apos;t need to know web development. This course is
                for beginners and experienced developers.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      {/* Call to action */}
      <div className="bg-gradient-to-br from-primary/20 to-primary/50 py-20">
        <div className="container">
          <h2 className="text-4xl font-bold mb-8">Ready to get started?</h2>
          <Button>Enroll now</Button>
        </div>
      </div>
      {/* Footer */}
      <div className="bg-primary-darker py-10">
        <div className="container flex flex-col gap-4">
          <p className="text-center">
            NextCourse is a place to learn Next.js, Tailwind CSS, and Radix UI.
          </p>
          <p className="text-center">
            &copy; 2024 NextCourse. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
