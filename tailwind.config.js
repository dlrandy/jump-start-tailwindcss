module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // 自定义工具类，这里注意要写全，否则没有就没有了
    // spacing:{
    //   // 0:'3rem'
    // },
    // screens:{
    //   md:'680px'
    // },
    extend: {
      // 扩展工具类
      spacing: {
        'crazy': '.3rem',
      },   screens:{
      
      },
    },
  },
  variants: {
    // 对所有的变化状态 禁用文本变色 
    // textColor: [],
    extend: {
      // textColor: []
    },
  },
  plugins: [],
}
