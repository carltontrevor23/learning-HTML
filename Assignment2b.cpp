#include <iostream>

double area(double a, double b, double h) {
    double area = (a + b) * h / 2;
    return area;
}

int main() {
    double a = 3;
    double b = 5;
    double h = 4;
    std::cout << "The area of the trapezium is " << area(a, b, h) << "\n\n\n";
    return 0;
}