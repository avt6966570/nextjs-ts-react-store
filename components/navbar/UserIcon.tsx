import { currentUser } from '@clerk/nextjs/server'
import { LuUser } from 'react-icons/lu'

export default async function UserIcon() {
    const user = await currentUser()
    const profileImage = user?.imageUrl
    return profileImage ? (
        <img src={profileImage} className="w-6 h-6 rounded-full object-cover" />
    ) : (
        <LuUser className="w-6 h-6 bg-primary rounded-full text-white" />
    )
}
