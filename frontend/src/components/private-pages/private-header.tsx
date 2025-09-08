import Image from "next/image"



export default function PrivateHeader () {

    return (
        <>
            <div className="h-26 w-full bg-(--foreground-color) border-b-[1px] border-(--border-muted) flex justify-between pt-7 pb-7 pl-18 pr-18">
                <Image 
                    src="/images/flux-logo.png"
                    alt="logo"
                    width={110}
                    height={30}
                    style={{
                        height: 'auto'
                    }}
                />

                <div className="w-[45%] bg-none border-1 border-(--border-muted) rounded-lg flex items-center pl-4 pr-2">
                    <img
                        src="/images/search-icon.svg"
                        alt="search-icon"
                        className="w-[30px] h-[30px] mr-4" 
                    />
                    <input
                        type="text"
                        placeholder="Busque por sessões, projetos ou tasks..."
                        className="focus:outline-none w-full"
                    />
                    <div className="border-1 border-(--border-muted) w-10 h-8 flex justify-center items-center rounded-md ">
                        /
                    </div>
                </div>

                <div className="flex justify-between gap-4 w-[7%]">
                    <div className="border-1 border-(--border) w-[50%] rounded-xl flex justify-center items-center hover:bg-(--border-muted) transition duration-100 ease-in-out">
                        <img
                            src="/images/notifications-icon.svg"
                            alt="notifications"
                            className="w-[25px]"
                        />
                    </div>
                    <div className="bg-(--cp) font-medium text-xl text-(--foreground-color) rounded-xl text-center w-[50%] flex items-center justify-center">
                        AB
                    </div>
                </div>
            </div>        
        </>
    )
}

