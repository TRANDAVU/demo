import Image from 'next/image'
import { Inter } from 'next/font/google'
import Title from '@/pages/components/title'
import Manual from '@/pages/components/manual'
const inter = Inter({ subsets: ['latin'] })

export default function Folder() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Title title={'Template'} />

      <div className="content-container">
        <div className="content">
          <h1><center>Tạo 1 trang cơ bản</center></h1>
          <p>
            <b>B1:</b>Tạo 1 folder trong folder <b>src/Pages</b> và đặt tên cho folder(Tên folder là tên page).
          </p>
          <p>
            <b>B2:</b>Tạo 1 file <b>index.tsx</b>(là file khởi chạy) <br />
          </p>
          <i>Lưu ý: có thể tạo 1 folder component để lưu các thành phần cấu tạo page</i> <br />
          {/* Thêm nội dung văn bản tại đây */}
          Ví dụ Tạo 1 trang /user/about:
          <p>-Tạo folder users</p>
          <p>
            - tạo folder about tương ứng với link <b>/users/about</b> <br />
            <Image
              src="/images/I1.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </p>

          <p>
            -Tạo 1 folder component(Lưu các thành phần cấu tạo page) <br />
            -tạo 1 file index.tsx lưu code và là file chạy chính <br />
            <Image
              src="/images/I2.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </p>
          <p>
            <p>-Code component</p>
            <Image
              src="/images/code_component.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
            <br />
            <p>Code page About</p>
            <Image
              src="/images/code_about_index.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </p>

        </div>
      </div>



      <Manual />

    </main>
  )
}
