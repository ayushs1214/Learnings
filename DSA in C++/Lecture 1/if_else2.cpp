#include <iostream>
using namespace std;

int main()
{
  int marks;
  cin>>marks;

  cout << "Enter your marks: "; // Move the prompt before reading the input

  if (marks < 25)
  {
    cout << "F";
  }
  else if (marks <= 45 && marks >= 25)
  {
    cout << "E";
  }
  else if (marks <= 49 && marks >= 46)
  {
    cout << "D";
  }
  else if (marks <= 59 && marks >= 50)
  {
    cout << "C";
  }
  else if (marks <= 69 && marks >= 60)
  {
    cout << "B";
  }
  else if (marks <= 100 && marks >= 70)
  {
    cout << "A";
  }

  return 0;
}
