import { Button } from "@/components/ui/button"
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"
import Image from "next/image"

export default function Page() {
  return (
   <div className="flex min-h-svh">
    <Empty>
    <EmptyHeader>
      <EmptyMedia>
        <Image src={"/logo.png"} alt="logo" height={48} width={48}/>
      </EmptyMedia>
      <EmptyTitle className="text-2xl">
        What should we build today?
      </EmptyTitle>
      <EmptyDescription>
        Build your own racers, shooters, puzzles, and whole worlds using your own words. If you can describe it, you can play it.
      </EmptyDescription>
    </EmptyHeader>
   </Empty>
   </div>
  )
}
