#include <iostream>
using namespace std;

void c(int n) {
    if (n < 2) {
        cout << n << " ";
        return;
    }
    c(n / 2);
    cout << n << " ";
}

int main() {
    int n = 14;
    c(n);

    return 0;
}
