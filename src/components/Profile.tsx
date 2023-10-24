import Image from 'next/image'
import LogoAdilio from '../assets/LogoAdilio.svg'

export default function Profile() {
  return (
    <div className="m-4 flex items-center justify-center bg-[url(../assets/bg-stars.svg)] bg-cover">
      <div className="h-[320px] w-[300px] justify-center rounded-full">
        <Image src={LogoAdilio} alt="perfil" width={400} height={400} />
      </div>
    </div>
  )
}
