var slovo = prompt();
var len = slovo.length;
var st = new Set();
for ( var i = 0; i < len; i++) {
  if( st.has(slovo[i]) ){
    st.delete(slovo[i]);
  }
  else{
    st.add(slovo[i]);
  }
}
  if( st.size < 2 )
    console.log(true);
  else {
    console.log(false);
  }
