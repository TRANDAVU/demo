import React, { useState } from 'react';
function Tabs() {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };
    return (
        <div className='custom'>
            <div className="tab-header">
                <button onClick={() => handleTabClick(0)} className={activeTab === 0 ? 'active' : ''}>Tab 1</button>
                <button onClick={() => handleTabClick(1)} className={activeTab === 1 ? 'active' : ''}>Tab 2</button>
                <button onClick={() => handleTabClick(2)} className={activeTab === 2 ? 'active' : ''}>Tab 3</button>
            </div>
            <div className="tab-content">
                {activeTab === 0 &&
                    <div>
                        <b>Next.js là gì và tại sao nên sử dụng nó cho dự án web của bạn?</b>
                        <br />
                        1. <b>Hiệu suất tốt</b> : Next.js cung cấp SSR và SSG, giúp tăng tốc độ tải trang, cải thiện trải nghiệm người dùng và tối ưu hóa SEO.<br />

                        2. <b>Quản lý route dễ dàng</b> : Next.js đi kèm với hệ thống route tự động, cho phép bạn tạo các route động và tĩnh một cách dễ dàng.<br />

                        3.<b>Tích hợp dễ dàng với React</b>: Next.js xây dựng trên React, nên bạn có thể sử dụng các thành phần React và thư viện liên quan một cách tự nhiên.<br />

                        4.<b>Hỗ trợ TypeScript</b>: Next.js hỗ trợ TypeScript nên bạn có thể sử dụng kiểm tra kiểu dữ liệu mạnh mẽ cho mã nguồn của bạn.<br />

                        5.<b>Phát triển nhanh chóng</b>: Next.js có cấu hình mặc định hợp lý, giúp bạn bắt đầu nhanh chóng và tập trung vào việc phát triển ứng dụng.<br />

                        6.<b>Cộng đồng mạnh mẽ</b>: Next.js có một cộng đồng lớn và phát triển đang ngày càng tăng, với nhiều tài liệu và hỗ trợ từ cộng đồng.<br />

                        7.<b>Dễ dàng triển khai</b> Next.js cho phép bạn triển khai ứng dụng dễ dàng, với tích hợp Vercel và nhiều dịch vụ khác.<br />
                    </div>
                }
                {activeTab === 1 &&
                    <div>
                        <b>**Khác biệt giữa client-side rendering (CSR) và server-side rendering (SSR) trong Next.js là gì và khi nào bạn nên sử dụng mỗi loại</b><br />

                        <strong>1. **Client-side Rendering (CSR)**:</strong><br />

                        <b>- **Khái niệm**</b>: Trong CSR, toàn bộ ứng dụng React được tải xuống trình duyệt của người dùng dưới dạng mã JavaScript. Trình duyệt sau đó tạo ra giao diện người dùng và xử lý các yêu cầu dữ liệu khi cần thiết thông qua các cuộc gọi API.
                        <br />
                        <b>- **Ưu điểm**:</b><br />
                        - Tốc độ tải trang nhanh ban đầu vì không cần chờ máy chủ xử lý.<br />
                        - Phù hợp cho các ứng dụng đơn giản hoặc ứng dụng yêu cầu tải dữ liệu động sau khi trang đã tải.<br />

                        <b>- **Nhược điểm**:</b><br />
                        - SEO kém hơn vì các công cụ tìm kiếm không chờ JavaScript để tạo nội dung.<br />
                        - Tốc độ trang có thể bị ảnh hưởng bởi việc tải và xử lý JavaScript trên trình duyệt.<br />

                        - **Khi nào sử dụng**: Sử dụng CSR khi bạn có một ứng dụng động, không quá phức tạp, và SEO không phải là ưu tiên hàng đầu.<br />

                        <strong>2. **Server-side Rendering (SSR)**:</strong><br />

                        <b>- **Khái niệm**</b>: Trong SSR, máy chủ tạo ra trang HTML hoàn chỉnh cùng với dữ liệu và gửi nó đến trình duyệt. JavaScript của ứng dụng React được tải và chạy sau đó, nhưng trang đã được hiển thị ngay lập tức.
                        <br />
                        <b>- **Ưu điểm**:</b><br />
                        - SEO tốt hơn vì nội dung đã được tạo trước và được gửi trực tiếp đến máy chủ tìm kiếm.<br />
                        - Tốc độ tải trang ban đầu nhanh và cải thiện trải nghiệm người dùng.<br />

                        <b>- **Nhược điểm**:</b><br />
                        - Cần tài nguyên máy chủ cao hơn vì máy chủ phải xử lý việc tạo trang cho mỗi yêu cầu.<br />
                        - Có thể không phù hợp cho các ứng dụng động và phức tạp yêu cầu nhiều tương tác người dùng.<br />

                        - **Khi nào sử dụng**: Sử dụng SSR khi SEO quan trọng, và bạn muốn cải thiện tốc độ tải trang ban đầu. Thích hợp cho các ứng dụng có nội dung động như tin tức, blog, hoặc cửa hàng trực tuyến.<br />
                    </div>
                }
                {activeTab === 2 &&
                    <div>
                        <b>Website tham khảo</b><br />
                        1.https://nextjs.org/docs/pages/api-reference/components/image-legacy <br />
                        2.https://www.material-tailwind.com <br />
                        3.https://codesandbox.io/examples/package/zmp-ui
                    </div>
                }
            </div>
            <style jsx>{`
        .tab-header {
          display: flex;
        }
        .tab-header button {
          padding: 10px 20px;
          background-color: #eee;
          border: none;
          cursor: pointer;
        }
        .tab-header button.active {
          background-color: #fff;
        }
        .tab-content {
          margin-top: 20px;
        }
      `}</style>
        </div>
    );
}

export default Tabs;