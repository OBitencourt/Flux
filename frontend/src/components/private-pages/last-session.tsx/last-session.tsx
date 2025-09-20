

export default function LastSession () {
    return (
        <>
            <div className="w-[90%] py-6 px-5 border-1 border-(--border-muted) rounded-3xl ">
                <div className="flex flex-col">

                    <div className="flex justify-between mb-4">
                        <h3>Última sessão</h3>

                        <h6 className="opacity-80">Há 12 horas</h6>

                    </div>

                    <div className="border-t-1 border-(--border-muted) py-4 hover:brightness-125 transition duration-150 ease-in-out cursor-pointer">
                        <div className="bg-(--foreground-color) py-3 px-5 rounded-xl flex flex-col">
                            <div className="flex justify-between items-center">

                                <h3 className="font-medium opacity-80">Criando sessão de contatos</h3>
                                <div className="bg-(--cp) p-2 text-(--foreground-color) rounded-md text-sm font-semibold">
                                    57:32
                                </div>

                            </div>
                            <div className="mt-3 flex gap-3 items-center">
                                <div className="flex justify-center items-center p-2 border-1 border-(--border-muted) rounded-md">
                                    CS
                                </div>
                                <div className="flex justify-center items-center p-2 border-1 border-(--border-muted) rounded-md">
                                    HT
                                </div>
                                <div className="flex justify-center items-center p-2 border-1 border-(--border-muted) rounded-md">
                                    JS
                                </div>
                                <div className="rounded-2xl text-(--cp) border-1 border-(--cp) flex items-center justify-center px-3 py-2 hover:bg-(--dark-bg) transition duration-75 ease-in text-sm">
                                    Frontend
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}