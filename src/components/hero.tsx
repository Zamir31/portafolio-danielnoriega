function Hero() {
    return (
        <section className="bg-background min-h-[calc(100dvh-64px)]">
            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col gap-4">
                    <h1 className="display-text text-primary">Hi, I'm Daniel Noriega</h1>
                    <span className="h-px w-1/2 bg-foreground block"></span>
                    <p className="text-foreground text-lg">I'm a software developer with a passion for building web applications.</p>
                </div>
            </div>
        </section>
    )
}

export default Hero