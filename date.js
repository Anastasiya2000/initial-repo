const moment=require('moment')



const obj ={
    bar:function (format){
        return moment().format(format);
    }
}

module.exports = obj;