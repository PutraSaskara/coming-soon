import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router';

function article(props) {

    const router = useRouter();
    const { id } = router.query;

    const {
        image, writer, date, title, resource
    } = props
    return (
    <div className='p-5'>
        <Link href={'/'}><p className='font-bold text-xl'>Back</p></Link>
        <div className='flex justify-center'>
        <Image
        src="/logoym1.png"
        width={400}
        height={300}
        alt="Picture of the author"
        />
        </div>
    <div className='flex gap-3'>
        <p className='text-slate-500'>penulis</p>
        <p className='text-slate-500'>5 Desember2023</p>
    </div>

    <div className='mt-10'>
        <h1 className='text-5xl font-bold'>Judul Artikel</h1>
        <p className='mt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed voluptatum laborum minus vero officiis perspiciatis illum eligendi inventore necessitatibus autem dignissimos, dolores obcaecati maxime corrupti repudiandae? Consequatur, aliquid, quia sequi suscipit sapiente fugit earum rem, perspiciatis pariatur similique minus molestiae inventore ad quod soluta maxime. Ducimus consequatur neque repellat dolores nam exercitationem omnis! Maiores adipisci quod voluptate iste eius natus neque laboriosam! Deserunt saepe fugiat illo, vitae debitis, reprehenderit magni dolore tempore, porro sint ducimus. Exercitationem, explicabo a est earum tempore natus vitae suscipit voluptatum temporibus praesentium harum velit porro doloribus rem error tenetur odit recusandae aut? Perferendis, nostrum minima!</p>
    </div>
    <p className='mt-10'>Resource : </p>
    </div>
    )
}

export default article