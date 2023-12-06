import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function article3() {

    return (
    <div className='p-5'>
        <div className='w-[90%] mx-auto'>
            <Link href={'/'}><p className='font-bold text-xl'>Back</p></Link>
            <div className='flex justify-center'>
            <Image
            src="/sura-dan-sulu.jpg"
            width={500}
            height={300}
            alt="Picture of the author"
            />
            </div>
        <div className='flex gap-3 justify-center mt-1'>
            <p className='text-slate-500 text-xs'>ilham fikriansyah - detikNews</p>
            <p className='text-slate-500 text-xs'>5 Des 2023</p>
        </div>

        <div className='mt-10'>
            <h1 className='text-5xl font-bold text-center'>Jadwal Lengkap Tahapan Pemilu 2024 dari Awal Sampai Akhir</h1>
            <p className='mt-10'>Sebentar lagi Indonesia akan menggelar Pemilihan Umum (Pemilu) yang berlangsung di tahun 2024. Selain memilih Presiden dan Wakil Presiden, Pemilu digelar untuk menentukan anggota DPR, anggota DPRD Provinsi, anggota DPRD kabupaten/kota, dan anggota DPD.
            Sebagai informasi, Indonesia melaksanakan Pemilu setiap lima tahun sekali. Pemilu sebelumnya digelar pada tahun 2019 yang berhasil dimenangkan oleh pasangan Joko Widodo (Jokowi) dan K.H. Ma'ruf Amin.
            <br/>
            <br/>
            Lima tahun berselang, tepatnya pada Februari 2024, seluruh masyarakat Indonesia akan kembali menentukan siapa Presiden dan Wakil Presiden selanjutnya yang menjabat untuk periode 2024-2029. Tapi, sebelum sampai di hari-H pemungutan suara, ada banyak tahapan yang dilakukan oleh Komisi Pemilihan Umum (KPU). Lantas, seperti apa tahapan Pemilu 2024? Simak selengkapnya berikut ini.</p>

            <h3 className='font-bold text-lg mt-5'>Tahapan Pemilu 2024</h3>
            <p className='mt-5'>
            Meski Pemilu baru dilaksanakan tahun depan, namun sejumlah persiapan telah dilakukan oleh KPU sejak dini. Simak jadwal tahapan Pemilu 2024 secara lengkap di bawah ini:
            </p>
            <ul className='mt-5'>
                <li>4 Juni 2022 - 14 Juni 2024: Perencanaan program dan anggaran</li>
                <li>14 Juni 2022 - 14 Desember 2023: Penyusunan peraturan pelaksanaan penyelenggaraan Pemilu oleh KPU</li>
                <li>14 Oktober 2022 - 21 Juni 2023: Pemutakhiran data pemilih dan penyusunan daftar pemilih</li>
                <li>29 Juli 2022 - 13 Desember 2022: Pendaftaran dan verifikasi peserta Pemilu</li>
                <li>14 Desember 2022 - 14 Februari 2022: Penetapan peserta Pemilu</li>
                <li>14 Oktober 2022 - 9 Februari 2023: Penetapan jumlah kursi dan penetapan daerah pemilihan</li>
                <li>6 Desember 2022 - 5 November 2023: Pencalonan anggota DPD</li>
                <li>24 April 2023 - 25 November 2023: Pencalonan anggota DPR, DPRD Provinsi, DPRD Kabupaten/Kota</li>
                <li>19 Oktober 2023 - 25 November 2023: Pencalonan Presiden dan Wakil Presiden</li>
                <li>28 November 2023 - 10 Februari 2024: Masa kampanye Pemilu</li>
                <li>11 Februari 2024 - 13 Februari 2024: Masa tenang</li>
                <li>14 Februari 2024: Pemungutan suara</li>
                <li>14 Februari 2024 - 15 Februari 2024: Penghitungan suara</li>
                <li>15 Februari 2024 - 20 Maret 2024: Rekapitulasi hasil penghitungan suara</li>
                <li>Disesuaikan dengan akhir masa jabatan masing-masing anggota DPRD kabupaten/kota: Pengucapan sumpah/janji DPRD kabupaten/kota</li>
                <li>Disesuaikan dengan akhir masa jabatan masing-masing anggota DPRD Provinsi: Pengucapan sumpah/janji DPRD Provinsi</li>
                <li>1 Oktober 2024: Pengucapan sumpah/janji DPR dan DPD</li>
                <li>20 Oktober 2024: Pengucapan sumpah/janji Presiden dan Wakil Presiden.</li>
            </ul>
            <p className='mt-5'>Sebagai informasi, penetapan jadwal Pemilu 2024 telah diatur dalam Peraturan Komisi Pemilihan Umum No. 3 Tahun 2022 tentang Tahapan dan Jadwal Penyelenggaraan Pemilihan Umum Tahun 2024.</p>
            <h3 className='font-bold text-lg mt-5'>Nomor Urut Capres dan Cawapres Pemilu 2024</h3>
            <p className='mt-5'>Seperti kita ketahui, ada tiga calon presiden dan calon wakil presiden yang mendaftar untuk Pemilu 2024. Kemudian, KPU melakukan pengundian dan penetapan nomor urut capres dan cawapres untuk Pemilu 2024 di Kantor KPU, Selasa (14/11/2023) malam. Simak hasil pengundiannya di bawah ini:</p>
            <ul className='mt-5'>
                <li>Nomor Urut 1: Anies Baswedan - Muhaimin Iskandar (Cak Imin)</li>
                <li>Nomor Urut 2: Prabowo Subianto - Gibran Rakabuming Raka</li>
                <li>Nomor Urut 3: Ganjar Pranowo - Mahfud Md</li>
            </ul>
            <p className='mt-5'>Perihal nomor urut capres dan cawapres pada Pemilu 2024, hal tersebut sudah termaktub dalam Keputusan KPU Nomor 1644 tahun 2023 tentang Nomor Urut Pasangan Calon Peserta Pilpres 2024. Itu dia jadwal lengkap tahapan Pemilu 2024 dari awal sampai akhir. Semoga artikel ini dapat menambah informasi detikers.</p>
        </div>
        <p className='mt-10'>Resource : https://news.detik.com/pemilu/d-7073659/jadwal-lengkap-tahapan-pemilu-2024-dari-awal-sampai-akhir</p>
        </div>
    </div>
    )
}

export default article3