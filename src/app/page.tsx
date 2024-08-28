import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Leaf, Palmtree, Scissors, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Component() {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='px-4 lg:px-6 h-14 flex items-center'>
        <Link className='flex items-center justify-center' href='#'>
          <Palmtree className='h-6 w-6' />
          <span className='sr-only'>
            {process.env.NEXT_PUBLIC_COMPANY_NAME}
          </span>
        </Link>
        <nav className='ml-auto flex gap-4 sm:gap-6'>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#'
          >
            Home
          </Link>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#'
          >
            Services
          </Link>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#'
          >
            Gallery
          </Link>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#'
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className='flex-1'>
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-blend-darken bg-[url('/landscape.webp?height=600&width=800')] bg-cover bg-center">
          <div className='container px-4 md:px-6 bg-primary py-12'>
            <div className='flex flex-col items-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white'>
                  Transform Your Desert Landscape
                </h1>
                <p className='mx-auto max-w-[700px] text-white md:text-xl'>
                  `Expert tree trimming, weed control, and landscaping services
                  for your {process.env.NEXT_PUBLIC_COMPANY_NAME}.``
                </p>
              </div>
              <Button
                className='bg-white text-black hover:bg-gray-200'
                size='lg'
              >
                Get a Free Quote
              </Button>
            </div>
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32 bg-gray-100'>
          <div className='container px-4 md:px-6'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8'>
              Our Services
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <Card>
                <CardContent className='flex flex-col items-center p-6'>
                  <Scissors className='h-12 w-12 mb-4' />
                  <h3 className='text-lg font-bold mb-2'>Tree Trimming</h3>
                  <p className='text-center text-sm text-gray-500'>
                    Expert pruning and shaping for healthy, beautiful trees.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className='flex flex-col items-center p-6'>
                  <Leaf className='h-12 w-12 mb-4' />
                  <h3 className='text-lg font-bold mb-2'>Weed Control</h3>
                  <p className='text-center text-sm text-gray-500'>
                    Effective solutions to keep your landscape weed-free.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className='flex flex-col items-center p-6'>
                  <Palmtree className='h-12 w-12 mb-4' />
                  <h3 className='text-lg font-bold mb-2'>Desert Landscaping</h3>
                  <p className='text-center text-sm text-gray-500'>
                    Create a beautiful, water-efficient desert garden.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8'>
              What Our Clients Say
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <CardContent className='p-6'>
                    <div className='flex mb-4'>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className='h-5 w-5 fill-yellow-400 text-yellow-400'
                        />
                      ))}
                    </div>
                    <p className='text-sm text-gray-500 mb-2'>
                      `{process.env.NEXT_PUBLIC_COMPANY_NAME} transformed our
                      yard into a beautiful, low-maintenance desert garden.
                      Highly recommended!``
                    </p>
                    <p className='font-semibold'>- Satisfied Customer {i}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32 bg-gray-100'>
          <div className='container px-4 md:px-6'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8'>
              Our Work
            </h2>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Image
                  key={i}
                  src={`/garden-${i}.webp?height=300&width=400`}
                  alt={`Landscaping example ${i}`}
                  width={400}
                  height={300}
                  className='rounded-lg object-cover'
                />
              ))}
            </div>
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32 bg-green-800 text-white'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                  Ready to Transform Your Landscape?
                </h2>
                <p className='mx-auto max-w-[700px] md:text-xl'>
                  Get a free quote for your desert landscaping project today.
                </p>
              </div>
              <div className='w-full max-w-sm space-y-2'>
                <form className='flex flex-col space-y-4'>
                  <Input
                    className='bg-white'
                    placeholder='Your Name'
                    type='text'
                  />
                  <Input
                    className='bg-white'
                    placeholder='Your Email'
                    type='email'
                  />
                  <Input
                    className='bg-white'
                    placeholder='Your Phone'
                    type='tel'
                  />
                  <Textarea
                    className='bg-white'
                    placeholder='Tell us about your project'
                  />
                  <Button
                    className='bg-white text-green-800 hover:bg-gray-200'
                    type='submit'
                  >
                    Get Your Free Quote
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
        <p className='text-xs text-gray-500'>
          © 2023 {process.env.NEXT_PUBLIC_COMPANY_NAME}. All rights reserved.
        </p>
        <nav className='sm:ml-auto flex gap-4 sm:gap-6'>
          <Link className='text-xs hover:underline underline-offset-4' href='#'>
            Terms of Service
          </Link>
          <Link className='text-xs hover:underline underline-offset-4' href='#'>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
