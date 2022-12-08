export default {
  server: {
    host: '0.0.0.0',
    proxy: {
      /*'^[.]/[.]netlify/.*'*/
      '^.[.].*' : {
        target : 'http://localhost:9000',     
        rewrite : (path) => path,   
        /*changeOrigin : true,*/
        }
    }
  }
}