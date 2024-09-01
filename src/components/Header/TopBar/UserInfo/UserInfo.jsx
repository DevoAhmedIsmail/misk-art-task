import Image from "next/image"
import {useTranslations} from 'next-intl';

import avatar from "/public/assets/icons/User Avatar Placholder.svg"
import Dropdown from "@/components/Shared/Dropdown/Dropdown"
const UserInfo = () => {
    const t = useTranslations('TopBar');
    return (
        <div>
            <Dropdown
                subElement={
                    [
                        {
                            name: t("personal-account"),
                            href: "/"
                        },
                        {
                            name: t("technical-file"),
                            href: "/"
                        },
                        {
                            name: t("logout"),
                            href: "/"
                        },
                    ]
                }
            >
                <div className="flex items-center gap-[8px]">
                    <Image
                        src={avatar}
                        width={32}
                        height={32}
                        alt="avatar"
                    />

                    <span className="text-[var(--Neutrals-purple-500)] font-[600]">{t("userName")}</span>
                </div>
            </Dropdown>
        </div>
    )
}

export default UserInfo
