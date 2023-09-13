import Image from 'next/image'
import { Inter } from 'next/font/google'
import Title from '@/pages/components/title'
import Manual from '@/pages/components/manual'
const inter = Inter({ subsets: ['latin'] })

export default function Folder() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 `}
    >
      <Title title={'Folder'} />

      <div className="content-container">
        <div className="content">
          <h1><center>Cấu trúc folder Next</center></h1>
          <div>
            <Image
              src="/images/I3.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>

          <div>
            <b>-public</b>: chứa các hình ảnh và js(nếu có) của dự án. <br />
            <b>-components</b>:Lưu các thành phần có thể dùng lại ở tất cả các trang header,footer... <br />
            <b>-users(custom)</b>:Folder lưu các thư mục con tương ứng với root của các trang con bên trong<br />
            <b>-users {'->'} about(custom)</b>:Trang con trong folder có thể tạo các component dùng cho trang con<br />
            <b>_app.tsx</b>:Khai báo css custom<br />
            <Image
              src="/images/I4.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>


        </div>
      </div>



      <Manual />

    </main>
  )
}
