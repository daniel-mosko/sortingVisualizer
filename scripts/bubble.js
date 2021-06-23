function bubbleSort(arr){
    var i,j;
    for(i;i<=arr.lenght;i++){
        for(j;i<=arr.lenght-1;j++){
            if(arr[i]<arr[j]){
                var pom = arr[j];
                arr[j] = arr[i];
                arr[i] = pom;
            }
        }
    }
}