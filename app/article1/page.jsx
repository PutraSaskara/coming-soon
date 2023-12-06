import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function article1() {

    return (
    <div className='p-5'>
        <div className='w-[90%] mx-auto'>
            <Link href={'/'}><p className='font-bold text-xl'>Back</p></Link>
            <div className='flex justify-center'>
            <Image
            src="/kpu-image.jpeg"
            width={500}
            height={300}
            alt="Picture of the author"
            />
            </div>
        <div className='flex gap-3 justify-center mt-1'>
            <p className='text-slate-500 text-xs'>https://www.kpu.go.id</p>
            <p className='text-slate-500 text-xs'>9 Nov 2023</p>
        </div>

        <div className='mt-10'>
            <h1 className='text-5xl font-bold text-center'>KPU Siap Gelar Debat Capres 3 Kali dan Cawapres 2 Kali</h1>
            <p className='mt-10'>Jakarta, kpu.go.id - Sesuai amanah UU Nomor 7 Tahun 2017 tentang Pemilu, Komisi Pemilihan Umum (KPU) pada masa kampanye ini akan menggelar debat calon presiden dan calon wakil presiden peserta Pemilu Tahun 2024 sebanyak lima kali. Hal ini disampaikan Ketua KPU Hasyim Asyari saat membuka Focus Group Discussion Perumusan Tema dan Isu Strategis Pelaksanaan Debat Pasangan Calon Presiden dan Wakil Presiden Tahun 2024, di Ruang Rapat Utama Lantai 2, Gedung KPU, Rabu (29/11/2023).
            <br/>
            <br/>
            Pelaksanaan debat sebanyak 5 kali ini dengan komposisi debat calon presiden 3 kali dan debat calon wakil presiden 2 kali, tutur Hasyim yang hadir didampingi Anggota KPU August Mellaz, Idham Holik, Betty Epsilon Idroos, Yulianto Sudrajat, serta Deputi Teknis Eberta Kawima dan Plt. Deputi Bidang Administrasi Setjen KPU.
            <br/>
            <br/>

            Hasyim juga menyampaikan, kampanye pemilu merupakan salah satu tahapan penting, mengingat para peserta pemilu berusaha untuk menyakinkan pemilih. UU Nomor 7 Tahun 2017 juga mengamanatkan KPU untuk memfasilitasi metode kampanye, salah satunya, yaitu Debat Pasangan Calon Presiden dan Wakil Presiden.
            <br/>
            <br/>

            Sementara itu, Mellaz juga menjelaskan tujuan FGD ini untuk KPU mendapatkan saran dan masukan oleh narasumber yang berkompeten terkait rumusan tema debat, isu-isu strategis, dan format debat dalam debat pasangan calon presiden dan wakil presiden 2024.
            FGD juga dilanjutkan dengan pertemuan bersama perwakilan tim pasangan calon presiden dan wakil presiden. Pertemuan tersebut menyimpulkan 5 kali debat Capres dan Cawapres akan dilakukan pada tanggal 12 dan 22 Desember 2023, 7 dan 21 Januari 2024, serta 4 Februari 2024, yang keseluruhan berlokasi di Jakarta. (Humas KPU)</p>
        </div>
        <p className='mt-10'>Resource : https://www.kpu.go.id/</p>
        </div>
    </div>
    )
}

export default article1