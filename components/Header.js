import Image from "next/image";
import { useMoralis } from "react-moralis"
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

function Header() {
    const { user } = useMoralis();
    return (
        <div className="sticky top-0  z-50 pb-4 bg-black shadow-sm border-b-2 border-pink-700 text-pink-500">
            <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
                <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
                    <Image
                        className="rounded-full"
                        src="http://t2.gstatic.com/images?q=tbn:ANd9GcQE9t8YJ-uczMVGeGMvhWSo2tjVKQcdVeeGN42ugw_8Uya8DAjZ"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="text-left lg:text-center col-span-4">
                    <div className="h-48 w-48 relative lg:mx-auto border-pink-500 border-8 rounded-full">
                        <Avatar logoutOnPress />
                    </div>

                    <h1 className="text-3xl">Welcomet to Programmers Metaverse</h1>
                    <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>

                    <ChangeUsername />
                </div>
            </div>
        </div>
    )
}

export default Header
