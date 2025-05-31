#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() {

    /* Enter your code here. Read input from STDIN. Print output to STDOUT */  
    int number;
    scanf("%d" , &number);
    int arr[number];
    for (int i = 0; i < number; i++) {
        scanf("%d" , &arr[i]);
    }
    
    int sum = 0;
    for (int j = 0; j < number; j++) {
        sum += arr[j];
    
    }
    
    printf("%d" , sum);
    return 0;
}