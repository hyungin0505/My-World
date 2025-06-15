/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,       // 디렉토리/페이지 형태 URL 생성
  images: { unoptimized: true }  // 이미지 최적화 비활성화 (필요 시)
}

export default nextConfig