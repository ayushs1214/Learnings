#include<bits/stdc++.h>
using namespace std;

int main () {
  int marks;
  cin >> marks;
  if (marks < 25){
    cout << "F";
  }
  else if (marks =< 45 && marks >= 25){
    cout << "E";
  }
  
  return 0;
}