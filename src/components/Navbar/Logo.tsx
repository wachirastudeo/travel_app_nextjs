import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

const Logo = () => {
    return (
        <Link href="/" className="text-2xl">
            <Image
                src="/logo.png"
                alt="Logo"
                width={100}
                height={100}
            />
        </Link>

    );
};
export default Logo;