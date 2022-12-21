import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
 NextApiRequest,
   NextApiResponse
) {
    if ( NextApiRequest.query.secret !== process.env.NEXT_PUBLIC_REVALIDATE_SECRET) {
        return  NextApiResponse.status(401).json({ message: 'Invalid token' })
    }

    try {
        await NextApiRequest.unstable_revalidate('/galeria')
        return NextApiRequest.json({ revalidated: true })
    } catch (err) {

        return res.status(500).send('Error revalidating')
    }
}