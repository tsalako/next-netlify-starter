import Image from "next/image";
import Header from '@components/Header'

export default function Banner() {
  return (
    <>
      <Image src="/SSS.png" width={400} height={400} />
      <Header title="Scavenger Hunt" />
    </>
  )
}
