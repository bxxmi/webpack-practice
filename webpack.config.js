const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
// copy-webpack-plugin: favicon, img 등 정적 파일들을 빌드하는 플러그인
const CopyPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = (env, options) => {
  console.log(env, options);
  return {
    // resolve: 모듈 해석 설정을 담당한다.
    resolve: {
      // extensions: ['확장자'] 를 통해 확장자를 생략할 수 있다.
      // ex) import 키워드 사용 시 .js 확장자명을 안적어도 됨
      extensions: ['.js', '.vue'],
      alias: {
        // 경로에 대한 별칭 부여
        // 해석: '~' 별칭을 사용해서 src 폴더 기준으로 파일을 찾는다. (절대경로)
        '~': path.resolve(__dirname, 'src') 
      }
    },
    entry: {
      main: './src/main.js',
    },
    output: {
      // path: '',
      // filename: '',
      // publicPath: 배포 빌드 시 절대 경로를 추가한다. (=prefix 개념)
      publicPath: '/',
      // clean: 파일이 초기화된다. 즉, 파일이 누적돼서 생기는 것을 방지한다.
      clean: true
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: 'vue-loader'
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.s?css/,
          use: [
            // vue-style-loader는 style-loader를 내포하고 있다.
            'vue-style-loader',
            'css-loader',
            'postcss-loader',
            {
              loader: 'sass-loader',
              options: {
                // 전체적으로 적용할 scss 파일을 전역으로 사용할 수 있게 한다.
                // 단, 적용될 컴포넌트들의 스타일 태그에는 다음과 같아야한다.
                // <style lang="scss">
                additionalData: '@import "~/scss/main.scss";'
              }
            }
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
      }),
      new VueLoaderPlugin()
    ],
    devServer: {
      historyApiFallback: true
    }
    // 기본값이지만 필요 시 수정해야함
    // devServer: {
    //   port: 8080,
    //   // open: 브라우저가 자동으로 열림
    //   open: true
    // }
  }
}