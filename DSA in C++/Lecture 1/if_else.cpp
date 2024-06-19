#include <iostream>
using namespace std;

int main()
{
  int age;
  cout << "Enter your age: ";
  cin >> age;
  if (age >= 18)
  {
    cout << "You're an adult";
  }
  else
  {
    cout << "Not an adult";
  }
  return 0;
}
