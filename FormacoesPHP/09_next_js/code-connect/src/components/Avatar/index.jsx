import Image from 'next/image';
export const Avatar = ({ name, imageSrc }) => {
  return (
    <ul>
        <li>
            <Image src={imageSrc} width={28} height={28}/>
        </li>
        <li>
            @{name}
        </li>
    </ul>
  )
}
