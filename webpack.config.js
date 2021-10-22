const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env, options) => {
  console.log(env, options);
  return {
    resolve: {
      // import 키워드 사용 시 .js 확장자명을 안적어도 됨
      extensions: ['.js'],
      alias: {
        // 절대 경로를 넣어줌
        // 아래 구문은 src 폴더를 기준으로 파일을 찾는 절대 경로가 된다.
        '~': path.resolve(__dirname, 'src') 
      }
    },
    entry: {
      main: './src/main.js',
    },
    output: {
      // path: '',
      // filename: '',
      // publicPath: 절대 경로를 추가한다.
      publicPath: '/',
      // clean: 파일이 초기화된다. 즉, 파일이 누적돼서 생기는 것을 방지한다.
      clean: true
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.s?css/,
          use: [
            'style-loader',
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ]
        }
      ]
    },
    plugins: [
      new HtmlPlugin({
        template: './src/index.html'
      }),
      new CopyPlugin({
        patterns: [
          // to 생략 가능
          // { to: '', from: '' }
          { from: 'static' }
        ]
      })
    ],
    // 기본값이지만 필요 시 수정해야함
    // devServer: {
    //   port: 8080,
    //   // open: 브라우저가 자동으로 열림
    //   open: true
    // }
  }
}