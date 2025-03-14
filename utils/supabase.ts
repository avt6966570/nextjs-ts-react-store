import { createClient } from '@supabase/supabase-js'

const bucket = 'main-bucket'

export const supabase = createClient(
    process.env.SUPABASE_URL as string,
    process.env.SUPABASE_KEY as string
)

export const uploadImage = async (image: File) => {
    const timestamp = Date.now()
    const newName = `${timestamp}-${image.name}`
    const { data, error } = await supabase.storage.from(bucket).upload(newName, image, {
        cacheControl: '3600',
    })

    return data
        ? supabase.storage.from(bucket).getPublicUrl(newName).data.publicUrl
        : 'Image upload failed!'
}

export const deleteImage = (url: string) => {
    const imageName = url.split('/').pop()
    if (!imageName) throw new Error('Invalid URL')
    return supabase.storage.from(bucket).remove([imageName])
}
