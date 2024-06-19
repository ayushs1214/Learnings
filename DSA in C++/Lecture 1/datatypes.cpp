#include <bits/stdc++.h>
using namespace std;

int main()
{
  // INTEGER can store value from range of -2147483648 to 2147483647
  int x = 10;

  // Beyond this LONG can help
  long z = 15;
  long long y = 1000000000000000000LL;

  float a = 5.8;
  cout << x << endl;
  cout << y << endl;
  cout << z << endl;
  cout << a << endl;

  // Reading a string from the user
  string str;
  cout << "HI AYUSH! ";
  getline(cin, str); // Correct usage of getline with cin
  cout << str << endl;

  return 0;
}
