

export default function Projects () {
    return (
        <>
            <div className="flex flex-col gap-8 pl-24 pr-20 py-12 w-full">
                <h2 className="text-(--text-light) text-4xl font-semibold">
                    Projects
                </h2>
                <div className="flex gap-4">
                    <div className="rounded-lg border-1 border-(--muted) py-2 px-4 hover:bg-(--dark-bg) transition duration-100 ease-in-out cursor-default">
                        Frontend
                    </div>
                    <div className="rounded-lg border-1 border-(--muted) py-2 px-4 hover:bg-(--dark-bg) transition duration-100 ease-in-out cursor-default">
                        Backend
                    </div>
                    <div className="rounded-lg border-1 border-(--muted) py-2 px-4 hover:bg-(--dark-bg) transition duration-100 ease-in-out cursor-default">
                        Fullstack
                    </div>
                </div>

                <div className="flex gap-8 flex-wrap wrap-normal">
                    <div className="bg-(--foreground-color) hover:brightness-120 transition duration-100 ease-in-out rounded-xl p-6 flex gap-10">
                        <div className="flex flex-col">
                            <h3 className="font-semibold text-2xl mb-3 text-(--text-light)">
                                Project Flux
                            </h3>
                            <div className="mb-4">
                                <h6 className="text-lg font-medium text-(--muted)">Iniciado no dia: 12/05/2025</h6>
                                <h6 className="text-lg font-medium text-(--muted)">Prazo: 12/08/2025</h6>
                            </div>
                            <div className="mt-3 flex gap-3 items-center">
                                <div className="flex justify-center items-center p-3 border-1 border-(--border-muted) rounded-lg bg-(--dark-bg)">
                                    CS
                                </div>
                                <div className="flex justify-center items-center p-3 border-1 border-(--border-muted) rounded-lg bg-(--dark-bg)">
                                    HT
                                </div>
                                <div className="flex justify-center items-center p-3 border-1 border-(--border-muted) rounded-lg bg-(--dark-bg)">
                                    JS
                                </div>
                                <div className="rounded-full bg-(--dark-bg) text-(--cp) px-3 py-2 border-1 border-(--border-muted)">
                                    +1
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 items-end">
                            <div className="border-(--border) border-1 px-3 py-1.5 rounded-lg text-(--border)">
                                Fullstack
                            </div>
                            <div className="border-(--border) border-1 px-3 py-1.5 rounded-lg text-(--border) w-min">
                                Solo
                            </div>
                        </div>
                    </div>
                    <div className="bg-(--foreground-color) hover:brightness-120 transition duration-100 ease-in-out rounded-xl p-6 flex justify-center items-center gap-10  border-dashed border-1 border-(--border) w-1/4">
                        <div className="flex flex-col">
                            <h3 className="font-semibold text-2xl mb-3 text-(--text-light)">
                                Add project
                            </h3>
                            <span className="font-semibold text-4xl mb-3 text-(--text-light) text-center">
                                +
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
