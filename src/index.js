
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let kk=[];
  if((matrix==undefined)||(matrix==0)) return kk;
  for(let i=0;i<matrix.length;i++)
  {
    if(!(i%2))
      {
    kk=kk.concat(matrix[i]);
      }
    else{
      kk=kk.concat(matrix[i].reverse())
    }

  }
  return kk;
}
