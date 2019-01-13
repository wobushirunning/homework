module.exports = {
  devServer: {
    host: "localhost",
    port: 9001,
    proxy: {
      "/agents": {
        target: "http://127.0.0.1:3001",
        changeOrigin: false
      }
    }
  }
};
