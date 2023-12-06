import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function article2() {

    return (
    <div className='p-5'>
        <div className='w-[90%] mx-auto'>
            <Link href={'/'}><p className='font-bold text-xl'>Back</p></Link>
            <div className='flex justify-center'>
            <Image
            src="/ilustrasi-gedung-kpu.jpeg"
            width={500}
            height={300}
            alt="Picture of the author"
            />
            </div>
        <div className='flex gap-3 justify-center mt-1'>
            <p className='text-slate-500 text-xs'>Anggi Muliawati - detikNews</p>
            <p className='text-slate-500 text-xs'>6 Des 2023</p>
        </div>

        <div className='mt-10'>
            <h1 className='text-5xl font-bold text-center'>KPU Rapat Lagi Bersama Timses Paslon Siang Ini, Bahas Format Debat Pilpres</h1>
            <br/>
            <br/>
            <p>Jakarta - Komisi Pemilihan Umum (KPU) RI akan kembali menggelar rapat bersama masing-masing timses pasangan calon membahas format debat capres-cawapres. Rapat dijadwalkan berlangsung siang ini di Kantor KPU RI.
            "Pukul 14.00 WIB di kantor KPU," ujar Komisioner KPU August Melasz, kepada wartawan, Selasa (5/12/2023). Sebelumnya, Ketua KPU RI Hasyim Asy'ari mengatakan rencananya besok KPU akan membahas sejumlah dengan timses paslon. Di antaranya, terkait format debat hingga panelis debat.
            <br/>
            <br/>
            "Rencana rapat lanjutan Rabu 6 Desember 2024 siang. Nanti kita komunikasikan dengan tim paslon," kata Ketua KPU RI Hasyim Asy'ari kepada wartawan (5/12). "Rencana pembahasan, satu format debat. Dua, tema debat. Tiga, panelis. Empat, moderator," tuturnya.
            Untuk diketahui, KPU sebelumnya masih mematangkan format debat capres-cawapres 2024. KPU telah menggelar rapat perdana dengan timses paslon pada Rabu (29/11).
            </p>
        </div>
        <p className='mt-10'>Resource : https://news.detik.com/pemilu/d-7074594/kpu-rapat-lagi-bersama-timses-paslon-siang-ini-bahas-format-debat-pilpres</p>
        </div>
    </div>
    )
}

export default article2