import Sidebar from '@/app/admin/Sidebar'
import { Separator } from '@/components/ui/separator'

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            <h2 className="text-2xl pl-4">Адм. панель</h2>
            <Separator className="mt-2" />
            <section className="grid lg:grid-cols-12 gap-12 mt-12">
                <div className="lg:col-span-2">
                    <Sidebar />
                </div>
                <div className="lg:col-span-10 px-4">{children}</div>
            </section>
        </>
    )
}
