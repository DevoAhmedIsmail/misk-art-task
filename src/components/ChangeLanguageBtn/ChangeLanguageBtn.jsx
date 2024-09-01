"use client"
import {useLocale} from "next-intl"
import { useRouter } from "next/navigation"
import { useTransition } from "react"

const ChangeLanguageBtn = () => {
    const [isPending ,startTransition] = useTransition()
    const router = useRouter();
    const localActive = useLocale()

    const onSelectChange = (e) => {
        const nextLocale = e.target.value
        startTransition(() => {
            router.replace(`/${nextLocale}`)
        })    
    }
  return (
    <div>
        <p>{localActive}</p>
        <select onChange={onSelectChange}>
            <option value="en">English</option>
            <option value="ar">Arabic</option>
        </select>
    </div>
  )
}

export default ChangeLanguageBtn
