#include <stdint.h>
#include <iostream>
#include <string>;
#include "fbxdocument.h"
using std::cout;
using std::endl;
using namespace fbx;

int main(int argc, char** argv)
{
	std::string fileName = "models/piramid.fbx";

	try {
		fbx::FBXDocument doc;
		std::cout << "Reading " << fileName << std::endl;
		doc.read(fileName);
		std::cout << "Read " << std::endl;

		doc.print();
		std::cout << "Printed " << std::endl;

	}
	catch (std::string e) {
		std::cout << "Fail" << std::endl;
		std::cout << e << std::endl;
		return 2;
	}

	std::cin.get();
}
