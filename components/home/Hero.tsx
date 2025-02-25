import HeroCarousel from '@/components/home/HeroCarousel'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Hero() {
    return (
        <section className="grid gap-24 lg:grid-cols-2 items-center">
            <div>
                <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
                    Мы меняем представление о том как люди покупают!
                </h1>
                <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque et
                    voluptas saepe in quae voluptate, laborum maiores possimus illum
                    reprehenderit aut delectus veniam cum perferendis unde sint doloremque
                    non nam.
                </p>
                <Button asChild size="lg" className="mt-10">
                    <Link href="/products">Все товары</Link>
                </Button>
            </div>
            <HeroCarousel />
        </section>
    )
}
