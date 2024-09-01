import Image from "next/image"
import HomeIcon from "/public/assets/icons/Home.svg"
import Link from "next/link"

const Breadcrumbs = ({ links }) => {
  return (
    <div className="flex items-center gap-[8px]">
      <Link href="/">
        <Image
          src={HomeIcon}
          alt="Home Icon"
          width={24}
          height={24}
        />
      </Link>

      {
        links.map((link, index) => (
          link.href ? (
            <Link href={link.href} key={index} className="flex items-center gap-[8px]">
              <span className="text-[var(--Primary-200)]">/</span>
              <span className="text-[var(--Primary-200)]">{link.name}</span>
            </Link>
          ) : (
            <div key={index} className="flex items-center gap-[8px]">
              <span className="text-[var(--Primary-200)]">/</span>
              <span className="text-[var(--Primary-25)]">{link.name}</span>
            </div>
          )
        ))
      }
    </div>
  )
}

export default Breadcrumbs
