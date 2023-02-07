/** @type {import('tailwindcss').Config} */
module.exports = {
  // 사용하지 않는 스타일들을 자동으로 제거하여 최종 빌드 사이즈를 최적화 해준다
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  // src 하위 파일 중 확장자가 .js, .jsx, .ts, .tsx인 파일을 대상으로 한다.
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [],
}
