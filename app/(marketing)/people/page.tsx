import Link from "next/link"
import Image from "next/image"

export const metadata = {
    title: "Pricing",
}

const people = ["服部", "吉添", "細川", "高野", "小川", "YIN"]

export default function ResearchPage() {
    return (
        <section className="container flex flex-col  gap-6 py-8 md:max-w-[64rem] md:py-12">
            <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]">
                <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                    People
                </h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    Who we are
                </p>
            </div>
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
                {people.map((person) => {
                    return (
                        <>
                            <div className="ml-4 mt-4 flex flex-col items-center bg-gray-50 drop-shadow-xl">
                                <Image className="flex-initial pt-4"
                                    src="/logo.png"
                                    alt="logo"
                                    width={128}
                                    height={128} />
                                <p className="max-w-[85%] pt-4 leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                                    {person}
                                </p>
                            </div>
                        </>
                    )
                })}
            </div>
        </section>
    )
}