import { Link } from "react-router-dom"

export default function Example() {
    return (
        <main className="backdrop-blur-[--blur] h-[calc(100svh_-_var(--navHeight))] ">
            <section className="grid min-h-full place-items-center px-6 text-[1rem] md:text-[1.2rem]">
                <div className="text-center">
                    {/* <p className="text-base font-semibold text-[#f31c1c]">404</p> */}
                    <h1 className="text-[1.75em] font-semibold tracking-tight text-balance dark:text-white">
                        Page not Found
                    </h1>
                    <p className="mt-[.5em] text-[1.025em] font-normal dark:text-gray-400 text-gray-800">
                        Sorry, we couldn’t find the page you’re looking for.
                    </p>
                    <div className="mt-[1.5em] flex items-center justify-center gap-x-6">
                        <Link to="/"
                            className="ar-one-sans linear-btn flex items-center gap-2 rounded-md px-6 py-2.5 text-sm font-medium text-white shadow-xs">
                            <span><svg className="w-[1.45em] h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="16" stroke-dashoffset="16" d="M19 12h-13.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="16;0" /></path><path stroke-dasharray="10" stroke-dashoffset="10" d="M5 12l5 5M5 12l5 -5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="1s" values="10;0" /></path></g></svg></span>
                           <span>Go back home</span>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}