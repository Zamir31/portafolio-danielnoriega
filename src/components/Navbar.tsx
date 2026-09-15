const navItems = [
    {
        name: 'Home',
        href: '#'
    },
    {
        name: 'About',
        href: '#'
    },
    {
        name: 'Services',
        href: '#'
    },
    {
        name: 'Contact',
        href: '#'
    }
]

function Navbar() {
    return (
        <header className="bg-card sticky top-0 z-50">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <p className="text-primary text-2xl font-medium">DN</p>
                    <span className="h-4 w-px bg-foreground" aria-hidden="true"></span>
                    <p className="text-foreground text-xs">developer</p>
                </div>
                <ul className="flex items-center gap-4">
                    {navItems.map((item: { name: string; href: string }) => (
                        <li key={item.name}>
                            <a href={item.href} className="text-primary">{item.name}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Navbar