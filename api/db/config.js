module.exports = {
  docker: {    
    url: 'postgres://zallpy:zallpy@postgres:5432/zallpy',
    dialect: 'postgres',
  },
  local: {    
    url: 'postgres://zallpy:zallpy@localhost:5432/zallpy',
    dialect: 'postgres',
  }
};