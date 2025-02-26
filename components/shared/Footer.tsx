import Image from "next/image"
import Link from "next/link"

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer className="border-t">
            <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
                {/* <Link href="/">
                    <Image
                        src="/assets/images/logo.svg"
                        width={128}
                        height={38}
                        alt="Monty Events Logo"
                    />
                </Link> */}
                <Link href="/" className="w-36 font-bold text-xl">
                    {/* <Image src="/assets/images/logo.svg" width={128} height={38} alt="Monty Events Logo" /> */}
                    MONTY EVENTS
                </Link>

                <p>&copy;{year} Monty Events. All Rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
