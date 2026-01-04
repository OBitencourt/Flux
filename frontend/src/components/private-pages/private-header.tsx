import Image from "next/image"



export default function PrivateHeader () {

    return (
        <>
            <div className="h-20 w-full bg-foreground border-b border-border-muted flex justify-between py-5 pl-18 pr-18">
                <Image 
                    src="/images/flux-logo.png"
                    alt="logo"
                    unoptimized 
                    width={100}
                    height={50}
                    style={{
                        height: 'auto'
                    }}
                />

                <div className="w-[45%] bg-none border border-border-muted rounded-lg flex items-center pl-4 pr-1">
                    <img
                        src="/images/search-icon.svg"
                        alt="search-icon"
                        className="w-[20] h-[20] mr-4" 
                    />
                    <input
                        type="text"
                        placeholder="Busque por sessões, projetos ou tasks..."
                        className="focus:outline-none w-full text-sm"
                    />
                    <div className="border border-border-muted w-8 h-7 flex justify-center text-sm text-muted items-center rounded-md ">
                        /
                    </div>
                </div>

                <div className="flex justify-around gap-0 w-[7%]">
                    <div className="border border-border-muted w-[35%] rounded-md flex justify-center items-center hover:bg-border-muted/40 transition duration-100 ease-in-out">
                        <img
                            src="/images/notifications-icon.svg"
                            alt="notifications"
                            className="w-5"
                        />
                    </div>
                    <div className="bg-primary cursor-pointer hover:bg-primary/90 transition font-medium text-md text-foreground rounded-md text-center w-[35%] flex items-center justify-center">
                        AB
                    </div>
                </div>
            </div>        
        </>
    )
}

