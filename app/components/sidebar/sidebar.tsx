"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Badge, CircleUser, HomeIcon, LineChart, Menu, Package, Package2, Search, ShoppingCart, Users } from "lucide-react"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"
import { usePathname } from "next/navigation"



const links = [
    { href: '/', name: 'Dashboard', icon: 'HomeIcon' },
    { href: '/classification', name: 'Classification', icon: 'LineChart' },
]

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <>
            <div className="hidden border-r bg-muted/40 md:block">
                <div className="flex h-full max-h-screen flex-col gap-2">
                    <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                        <Link href="/" className="flex items-center gap-2 font-semibold">
                            <Package2 className="h-6 w-6" />
                            <span className="text-primary">GPRC <span className="text-slate-900">Mangroves</span></span>
                        </Link>
                    </div>
                    <div className="flex-1">
                        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                            { links.map((link, index) => {
                                return (
                                    <Link
                                        key={ index }
                                        href={ link.href }
                                        className={ `flex items-center gap-3 rounded-lg px-3 py-2 transition-all 
                                        ${pathname === link.href ? "bg-primary text-primary-foreground hover:text-muted" : "text-muted-foreground hover:text-primary"}` }
                                    >
                                        {/* <HomeIcon className="h-4 w-4" /> */ }
                                        { link.name }
                                    </Link>
                                )
                            }) }
                            {/* <Link
                                href="#"
                                className="flex items-center gap-3 bg-primary text-primary-foreground rounded-lg px-3 py-2 transition-all hover:text-muted"
                            >
                                <HomeIcon className="h-4 w-4" />
                                Dashboard
                            </Link>
                            <Link
                                href="#"
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            >
                                <LineChart className="h-4 w-4" />
                                Charts
                            </Link> */}
                        </nav>
                    </div>
                </div>
                <div className="flex flex-col">
                    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    size="icon"
                                    className="shrink-0 md:hidden"
                                >
                                    <Menu className="h-5 w-5" />
                                    <span className="sr-only">Toggle navigation menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="flex flex-col">
                                <nav className="grid gap-2 text-lg font-medium">
                                    <Link
                                        href="#"
                                        className="flex items-center gap-2 text-lg font-semibold"
                                    >
                                        <Package2 className="h-6 w-6" />
                                        <span className="sr-only">Acme Inc</span>
                                    </Link>
                                    <Link
                                        href="#"
                                        className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                                    >
                                        <HomeIcon className="h-5 w-5" />
                                        Dashboard
                                    </Link>
                                    <Link
                                        href="#"
                                        className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                                    >
                                        <ShoppingCart className="h-5 w-5" />
                                        Orders
                                        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                                            6
                                        </Badge>
                                    </Link>
                                    <Link
                                        href="#"
                                        className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                                    >
                                        <Package className="h-5 w-5" />
                                        Products
                                    </Link>
                                    <Link
                                        href="#"
                                        className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                                    >
                                        <Users className="h-5 w-5" />
                                        Customers
                                    </Link>
                                    <Link
                                        href="#"
                                        className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                                    >
                                        <LineChart className="h-5 w-5" />
                                        Analytics
                                    </Link>
                                </nav>
                                <div className="mt-auto">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Upgrade to Pro</CardTitle>
                                            <CardDescription>
                                                Unlock all features and get unlimited access to our
                                                support team.
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <Button size="sm" className="w-full">
                                                Upgrade
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </div>
                            </SheetContent>
                        </Sheet>
                        <div className="w-full flex-1">
                            <form>
                                <div className="relative">
                                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        type="search"
                                        placeholder="Search products..."
                                        className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                                    />
                                </div>
                            </form>
                        </div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="secondary" size="icon" className="rounded-full">
                                    <CircleUser className="h-5 w-5" />
                                    <span className="sr-only">Toggle user menu</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Settings</DropdownMenuItem>
                                <DropdownMenuItem>Support</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Logout</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </header>
                </div>
            </div>
        </>
    )
}

export default Sidebar