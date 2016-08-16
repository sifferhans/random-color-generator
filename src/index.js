

module.exports = {
  hex: function(){
    var color = '#'+Math.floor(Math.random()*16777215).toString(16);
    if(color.lenght < 7){
      this.hex();
    }
    return color;
  },
  rgb: function(){
    var r = function(){ return Math.floor(Math.random()*256) }
    var color = 'rgb('+ r() +','+ r() +','+ r() +')';
    return color;
  }
};
