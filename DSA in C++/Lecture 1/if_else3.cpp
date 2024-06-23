#include <bits/stdc++.h>
using namespace std;

int main()
{
  int age;
  cout << "Enter your age: ";
  cin >> age;
  if (age < 18)
  {
    cout << "Not eligible for job";
  }
  else if (age <= 57)
  {
    cout << "You are eligible for job";
    if (age >= 55)
    {
      cout << ", but retirement soon.";
    }
  }
  else
  {
    cout << "Retirement time.";
  }
  return 0;
}