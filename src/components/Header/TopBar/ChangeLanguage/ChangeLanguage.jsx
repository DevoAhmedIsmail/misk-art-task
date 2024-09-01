"use client"
import {useLocale} from "next-intl"
import { useRouter } from "next/navigation"
import { useTransition } from "react"

const ChangeLanguage = () => {
  const [isPending ,startTransition] = useTransition()
  const router = useRouter();
  const localActive = useLocale()

  const onChangeLanguage = () => {
      const nextLocale = localActive === "en" ? "ar" : "en"
      startTransition(() => {
          router.replace(`/${nextLocale}`)
      })    
  }
  return (
    <div className="text-[var(--Neutrals-500)] text-[12px] font-[600] cursor-pointer ms-[12px] px-[16px] py-[10px]" onClick={onChangeLanguage}>
      {
        localActive === "en" ? (
          <>
            <span className="hidden min-[1000px]:block">العربية</span>
            <span className="block min-[1000px]:hidden">ع</span>
          </>
        ) : (
          <>
            <span className="hidden min-[1000px]:block">English</span>
            <span className="block min-[1000px]:hidden">Eng</span>
          </>
        )
      }
    </div>
  )
}

export default ChangeLanguage
